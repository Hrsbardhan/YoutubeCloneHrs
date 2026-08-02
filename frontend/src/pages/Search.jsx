import { useState } from "react";
import api from "../services/api";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import VideoCard from "../components/VideoCard";

function Search() {

    const [query, setQuery] = useState("");

    const [category, setCategory] = useState("");

    const [videos, setVideos] = useState([]);

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");


    const searchVideos = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            setError("");

            const response = await api.get(
                "/search",
                {
                    params: {
                        query,
                        category
                    }
                }
            );

            setVideos(response.data);

        } catch (error) {

            setError(
                "Search failed"
            );

        } finally {

            setLoading(false);

        }
    };


    return (
        <div>

            <form onSubmit={searchVideos}>

                <input
                    value={query}
                    placeholder="Search videos"
                    onChange={(e) =>
                        setQuery(e.target.value)
                    }
                />


                <input
                    value={category}
                    placeholder="Category"
                    onChange={(e) =>
                        setCategory(e.target.value)
                    }
                />


                <button>
                    Search
                </button>

            </form>


            {
                loading &&
                <Loading />
            }


            {
                error &&
                <ErrorMessage
                    message={error}
                />
            }


            <div className="video-grid">

                {
                    videos.map((video) => (

                        <VideoCard
                            key={video._id}
                            video={video}
                        />

                    ))
                }

            </div>

        </div>
    );
}

export default Search;
