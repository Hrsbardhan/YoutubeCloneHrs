import { useEffect, useState } from "react";
import api from "../services/api";

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
        <div>
            <h1>
                My Playlists
            </h1>

            {
                playlists.map((playlist) => (
                    <div key={playlist._id}>
                        <h3>
                            {playlist.title}
                        </h3>

                        <p>
                            {playlist.description}
                        </p>

                        <p>
                            Videos:
                            {" "}
                            {playlist.videos.length}
                        </p>
                    </div>
                ))
            }
        </div>
    );
}

export default Playlist;
