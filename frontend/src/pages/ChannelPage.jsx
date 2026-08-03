import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import VideoCard from "../components/VideoCard";
import Card from "../components/Card";
import Loading from "../components/Loading";

function ChannelPage() {

    const {
        id
    } = useParams();

    const [videos, setVideos] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const loadVideos = async () => {

            const response = await api.get("/videos");

            const filtered =
                response.data.filter(
                    (video) =>
                        video.channel?._id === id
                );

            setVideos(filtered);

            setLoading(false);

        };

        loadVideos();

    }, [id]);


    if (loading) {
        return <Loading />;
    }


    return (

        <Card>

            <h1>
                Channel Videos
            </h1>


            {
                videos.map(
                    (video) => (

                        <VideoCard
                            key={video._id}
                            video={video}
                        />

                    )
                )
            }

        </Card>

    );
}

export default ChannelPage;
