import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function UploadVideo() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        description: "",
        videoUrl: "",
        thumbnailUrl: "",
        category: ""
    });

    const [error, setError] = useState("");


    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };


    const submit = async (e) => {

        e.preventDefault();

        try {

            await api.post(
                "/videos",
                form
            );

            navigate("/");

        } catch (error) {

            setError(
                "Unable to upload video"
            );

        }

    };


    return (

        <div className="form-container">

            <h2>
                Upload Video
            </h2>


            {
                error &&
                <p>
                    {error}
                </p>
            }


            <form onSubmit={submit}>

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


                <input
                    name="videoUrl"
                    placeholder="Video URL"
                    value={form.videoUrl}
                    onChange={handleChange}
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


                <button>
                    Upload
                </button>

            </form>

        </div>

    );

}

export default UploadVideo;
