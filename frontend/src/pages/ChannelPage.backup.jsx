import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import VideoCard from "../components/VideoCard";

function ChannelPage() {

    const { id } = useParams();

    const [channel, setChannel] = useState(null);
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        loadChannel();
    }, [id]);

    const loadChannel = async () => {

        try {

            const channelRes = await api.get(`/channels/${id}`);
            setChannel(channelRes.data);

            const videoRes = await api.get("/videos");

            const filtered = videoRes.data.filter(
                video =>
                    video.channel?._id === id ||
                    video.channel === id
            );

            setVideos(filtered);

        } catch {

            setError("Unable to load channel");

        } finally {

            setLoading(false);

        }

    };

    if (loading) return <Loading />;

    if (error) return <ErrorMessage message={error} />;

    return (

        <div>

            <h1>{channel.name}</h1>

            <p>{channel.description}</p>

            <h2>Videos</h2>

            {
                videos.length
                    ? videos.map(video => (
                        <VideoCard
                            key={video._id}
                            video={video}
                        />
                    ))
                    : <p>No videos available.</p>
            }

        </div>

    );

}

export default ChannelPage;
