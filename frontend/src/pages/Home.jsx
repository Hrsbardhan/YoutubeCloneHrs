import { useEffect, useState } from "react";
import api from "../services/api";
import VideoCard from "../components/VideoCard";

function Home() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const loadVideos = async () => {
            const response = await api.get("/videos");

            setVideos(response.data);
        };

        loadVideos();
    }, []);

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
