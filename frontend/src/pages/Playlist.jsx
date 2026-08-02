import { useEffect, useState } from "react";
import api from "../services/api";
import PlaylistCard from "../components/PlaylistCard";

function Playlist() {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const loadPlaylists = async () => {
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
        };

        loadPlaylists();
    }, []);

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
