import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function UploadVideo() {

    const navigate = useNavigate();

    const [channels, setChannels] = useState([]);

    const [form, setForm] = useState({
        title: "",
        description: "",
        videoUrl: "",
        thumbnailUrl: "",
        category: "",
        channel: ""
    });

    const [error, setError] = useState("");

    useEffect(() => {

        const loadChannels = async () => {

            try {

                const response = await api.get("/channels");

                setChannels(response.data);

            } catch (error) {

                console.log(error);

            }

        };

        loadChannels();

    }, []);

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const submit = async (e) => {

        e.preventDefault();

        try {

            await api.post("/videos", form);

            navigate("/");

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Unable to upload video"
            );

        }

    };

    return (

        <div className="form-container">

            <h2>Upload Video</h2>

            {
                error &&
                <p>{error}</p>
            }

            <form onSubmit={submit}>

                <input
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                    required
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                />

                <input
                    name="videoUrl"
                    placeholder="Video URL"
                    value={form.videoUrl}
                    onChange={handleChange}
                    required
                />

                <input
                    name="thumbnailUrl"
                    placeholder="Thumbnail URL"
                    value={form.thumbnailUrl}
                    onChange={handleChange}
                />

                <input
                    name="category"
                    placeholder="Category"
                    value={form.category}
                    onChange={handleChange}
                />

                <select
                    name="channel"
                    value={form.channel}
                    onChange={handleChange}
                    required
                >
                    <option value="">
                        Select Channel
                    </option>

                    {
                        channels.map((channel) => (

                            <option
                                key={channel._id}
                                value={channel._id}
                            >
                                {channel.name}
                            </option>

                        ))
                    }

                </select>

                <button type="submit">
                    Upload
                </button>

            </form>

        </div>

    );

}

export default UploadVideo;