import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditPlaylist() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        description: ""
    });

    const [error, setError] = useState("");

    useEffect(() => {

        loadPlaylist();

    }, []);

    const loadPlaylist = async () => {

        try {

            const { data } = await api.get(`/playlists/${id}`);

            setForm({
                title: data.title || "",
                description: data.description || ""
            });

        } catch {

            setError("Unable to load playlist");

        }

    };

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const submit = async (e) => {

        e.preventDefault();

        try {

            await api.put(`/playlists/${id}`, form);

            navigate("/manage/playlists");

        } catch {

            setError("Unable to update playlist");

        }

    };

    return (

        <div className="form-container">

            <h2>Edit Playlist</h2>

            {error && <p>{error}</p>}

            <form onSubmit={submit}>

                <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Playlist Title"
                />

                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Description"
                />

                <button>
                    Update Playlist
                </button>

            </form>

        </div>

    );

}

export default EditPlaylist;
