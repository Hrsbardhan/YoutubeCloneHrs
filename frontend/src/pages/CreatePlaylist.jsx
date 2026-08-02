import { useState } from "react";
import api from "../services/api";

function CreatePlaylist() {
    const [form, setForm] = useState({
        title: "",
        description: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const submit = async (e) => {
        e.preventDefault();

        await api.post(
            "/playlists",
            form,
            {
                headers: {
                    Authorization:
                        `Bearer ${localStorage.getItem("token")}`
                }
            }
        );

        setForm({
            title: "",
            description: ""
        });
    };

    return (
        <form onSubmit={submit}>
            <h1>
                Create Playlist
            </h1>

            <input
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
            />

            <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
            />

            <button>
                Create
            </button>
        </form>
    );
}

export default CreatePlaylist;
