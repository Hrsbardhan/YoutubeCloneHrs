import { useEffect, useState } from "react";
import api from "../services/api";
import PlaylistCard from "../components/PlaylistCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function Playlist() {

    const [playlists, setPlaylists] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        const loadPlaylists = async () => {

            try {

                const response = await api.get(
                    "/playlists",
                    {
                        headers: {
                            Authorization:
                            `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                );

                setPlaylists(response.data);

            } catch (error) {

                setError(
                    "Unable to load playlists"
                );

            } finally {

                setLoading(false);

            }
        };

        loadPlaylists();

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
                playlists.map((playlist) => (

                    <PlaylistCard
                        key={playlist._id}
                        playlist={playlist}
                    />

                ))
            }

        </div>
    );
}

export default Playlist;
