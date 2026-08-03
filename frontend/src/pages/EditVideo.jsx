import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditVideo() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        description: "",
        videoUrl: "",
        thumbnailUrl: "",
        category: ""
    });

    const [error, setError] = useState("");

    useEffect(() => {
        loadVideo();
    }, []);

    const loadVideo = async () => {

        try {

            const { data } = await api.get(`/videos/${id}`);

            setForm({
                title: data.title || "",
                description: data.description || "",
                videoUrl: data.videoUrl || "",
                thumbnailUrl: data.thumbnailUrl || "",
                category: data.category || ""
            });

        } catch {

            setError("Unable to load video");

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

            await api.put(`/videos/${id}`, form);

            navigate("/manage/videos");

        } catch {

            setError("Unable to update video");

        }

    };

    return (

        <div className="form-container">

            <h2>Edit Video</h2>

            {error && <p>{error}</p>}

            <form onSubmit={submit}>

                <input
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Title"
                />

                <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Description"
                />

                <input
                    name="videoUrl"
                    value={form.videoUrl}
                    onChange={handleChange}
                    placeholder="Video URL"
                />

                <input
                    name="thumbnailUrl"
                    value={form.thumbnailUrl}
                    onChange={handleChange}
                    placeholder="Thumbnail URL"
                />

                <input
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    placeholder="Category"
                />

                <button>Update Video</button>

            </form>

        </div>

    );

}

export default EditVideo;
