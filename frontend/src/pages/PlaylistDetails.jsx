import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import VideoCard from "../components/VideoCard";

function PlaylistDetails() {

    const { id } = useParams();

    const [playlist, setPlaylist] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        loadPlaylist();

    }, [id]);

    const loadPlaylist = async () => {

        try {

            const { data } = await api.get(`/playlists/${id}`);

            setPlaylist(data);

        } catch {

            setError("Unable to load playlist");

        } finally {

            setLoading(false);

        }

    };

    if (loading) return <Loading />;

    if (error) return <ErrorMessage message={error} />;

    return (

        <div>

            <h1>{playlist.title}</h1>

            <p>{playlist.description}</p>

            {
                playlist.videos?.length
                    ? playlist.videos.map(video => (
                        <VideoCard
                            key={video._id}
                            video={video}
                        />
                    ))
                    : <p>No videos in this playlist.</p>
            }

        </div>

    );

}

export default PlaylistDetails;
