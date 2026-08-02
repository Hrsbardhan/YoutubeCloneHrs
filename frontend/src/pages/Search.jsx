import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../services/api";

function Search() {
    const [searchParams] = useSearchParams();

    const initialQuery =
        searchParams.get("query") || "";

    const [query, setQuery] = useState(initialQuery);
    const [category, setCategory] = useState("");
    const [videos, setVideos] = useState([]);

    const searchVideos = async (e) => {
        e.preventDefault();

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
    };

    return (
        <div>
            <h1>
                Search Videos
            </h1>

            <form onSubmit={searchVideos}>
                <input
                    value={query}
                    placeholder="Search"
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
                videos.map((video) => (
                    <div key={video._id}>
                        <h3>
                            {video.title}
                        </h3>

                        <p>
                            {video.category}
                        </p>
                    </div>
                ))
            }
        </div>
    );
}

export default Search;
