import { useEffect, useState } from "react";
import api from "../services/api";
import VideoCard from "../components/VideoCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function Home() {

    const [videos, setVideos] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        const loadVideos = async () => {

            try {

                const response = await api.get("/videos");

                setVideos(response.data);

            } catch (error) {

                setError(
                    "Unable to load videos"
                );

            } finally {

                setLoading(false);

            }
        };

        loadVideos();

    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return (
            <ErrorMessage
                message={error}
            />
        );
    }

    return (
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
    );
}

export default Home;
