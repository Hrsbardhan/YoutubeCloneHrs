import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Card from "../components/Card";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function VideoManager() {

    const navigate = useNavigate();

    const [videos, setVideos] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    const loadVideos = async () => {

        try {

            const response = await api.get(
                "/videos"
            );

            setVideos(response.data);

        } catch (error) {

            setError(
                "Unable to load videos"
            );

        } finally {

            setLoading(false);

        }

    };


    useEffect(() => {

        loadVideos();

    }, []);


    const deleteVideo = async (id) => {

        try {

            await api.delete(
                `/videos/${id}`
            );

            loadVideos();

        } catch (error) {

            setError(
                "Unable to delete video"
            );

        }

    };


    if (loading) {

        return <Loading />;

    }


    return (

        <div>

            {
                error &&
                <ErrorMessage
                    message={error}
                />
            }


            <h1>
                My Videos
            </h1>


            {
                videos.map((video) => (

                    <Card key={video._id}>

                        <h3>
                            {video.title}
                        </h3>


                        <p>
                            {video.description}
                        </p>


                        <button
                            onClick={() =>
                                deleteVideo(video._id)
                            }
                        >
                            Delete
                        </button>

                        <button
                            onClick={() => navigate(`/manage/videos/$($video._id)/edit`.Replace("$($video._id)","${video._id}"))}
                        >
                            Edit
                        </button>

                    </Card>

                ))
            }

        </div>

    );

}

export default VideoManager;
