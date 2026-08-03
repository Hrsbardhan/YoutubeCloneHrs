import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Card from "../components/Card";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function PlaylistManager() {

    const navigate = useNavigate();

    const [playlists, setPlaylists] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        loadPlaylists();
    }, []);

    const loadPlaylists = async () => {

        try {

            const { data } = await api.get("/playlists");

            const token = JSON.parse(atob(localStorage.getItem("token").split(".")[1]));

            const mine = data.filter(
                playlist =>
                    playlist.owner?._id === token.id ||
                    playlist.owner === token.id
            );

            setPlaylists(mine);

        } catch {

            setError("Unable to load playlists");

        } finally {

            setLoading(false);

        }

    };

    const deletePlaylist = async (id) => {

        if (!window.confirm("Delete this playlist?")) return;

        try {

            await api.delete(`/playlists/${id}`);

            setPlaylists(prev => prev.filter(p => p._id !== id));

        } catch {

            setError("Unable to delete playlist");

        }

    };

    if (loading) return <Loading />;

    return (

        <div>

            <h1>My Playlists</h1>

            {error && <ErrorMessage message={error} />}

            {
                playlists.length === 0 &&
                <p>No playlists found.</p>
            }

            {
                playlists.map(playlist => (

                    <Card key={playlist._id}>

                        <h3>{playlist.title}</h3>

                        <p>{playlist.description}</p>

                        <button
                            onClick={() => navigate(`/playlists/${playlist._id}`)}
                        >
                            Open
                        </button>

                        <button
                            onClick={() => navigate(`/manage/playlists/${playlist._id}/edit`)}
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => deletePlaylist(playlist._id)}
                        >
                            Delete
                        </button>

                    </Card>

                ))
            }

        </div>

    );

}

export default PlaylistManager;
