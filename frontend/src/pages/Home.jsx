import { useEffect, useState } from "react";
import api from "../services/api";
import VideoCard from "../components/VideoCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import "../styles/home.css";

function Home() {

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        fetchVideos();

    }, []);

    async function fetchVideos() {

        try {

            const { data } = await api.get("/videos");

            setVideos(data);

        } catch {

            setError("Unable to load videos.");

        } finally {

            setLoading(false);

        }

    }

    if (loading) return <Loading />;

    if (error) return <ErrorMessage message={error} />;

    return (

        <div className="home">

            <div className="video-grid">

                {
                    videos.map(video => (

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

export default Home;
