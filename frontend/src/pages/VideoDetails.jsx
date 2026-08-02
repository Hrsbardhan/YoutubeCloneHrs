import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function VideoDetails() {
    const {
        id
    } = useParams();

    const [video, setVideo] = useState(null);

    useEffect(() => {
        const loadVideo = async () => {
            const response = await api.get(
                `/videos/${id}`
            );

            setVideo(response.data);
        };

        loadVideo();
    }, [id]);

    if (!video) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>
                {video.title}
            </h1>

            <p>
                {video.description}
            </p>

            <video
                controls
                width="600"
                src={video.videoUrl}
            />
        </div>
    );
}

export default VideoDetails;
