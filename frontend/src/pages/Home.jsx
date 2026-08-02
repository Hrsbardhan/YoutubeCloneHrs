import { useEffect, useState } from "react";
import api from "../services/api";

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
        <div>
            <h1>
                Videos
            </h1>

            {
                videos.map((video) => (
                    <div key={video._id}>
                        <h3>
                            {video.title}
                        </h3>

                        <p>
                            {video.description}
                        </p>
                    </div>
                ))
            }
        </div>
    );
}

export default Home;
