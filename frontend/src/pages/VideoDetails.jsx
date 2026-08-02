import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import Card from "../components/Card";

function VideoDetails() {

    const {
        id
    } = useParams();

    const [video, setVideo] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        const loadVideo = async () => {

            try {

                const response = await api.get(
                    `/videos/${id}`
                );

                setVideo(response.data);

            } catch (error) {

                setError(
                    "Unable to load video"
                );

            } finally {

                setLoading(false);

            }
        };

        loadVideo();

    }, [id]);


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
        <Card>

            <h1>
                {video.title}
            </h1>


            <video
                controls
                width="100%"
                src={video.videoUrl}
            />


            <p>
                {video.description}
            </p>


            <p>
                Views:
                {" "}
                {video.views}
            </p>


            <Link
                to={`/video/${id}/comments`}
            >
                View Comments
            </Link>

        </Card>
    );
}

export default VideoDetails;
