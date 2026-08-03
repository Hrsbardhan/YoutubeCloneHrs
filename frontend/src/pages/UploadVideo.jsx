import { useState } from "react";
import api from "../services/api";

function UploadVideo() {

    const [form, setForm] = useState({
        title: "",
        description: "",
        videoUrl: "",
        thumbnailUrl: "",
        category: "",
        channel: ""
    });


    const submit = async (e) => {

        e.preventDefault();


        await api.post(
            "/videos",
            form
        );


        setForm({
            title: "",
            description: "",
            videoUrl: "",
            thumbnailUrl: "",
            category: "",
            channel: ""
        });

    };


    return (

        <form onSubmit={submit}>

            <h1>
                Upload Video
            </h1>


            <input
                placeholder="Title"
                value={form.title}
                onChange={(e) =>
                    setForm({
                        ...form,
                        title: e.target.value
                    })
                }
            />


            <textarea
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                    setForm({
                        ...form,
                        description: e.target.value
                    })
                }
            />


            <input
                placeholder="Video URL"
                value={form.videoUrl}
                onChange={(e) =>
                    setForm({
                        ...form,
                        videoUrl: e.target.value
                    })
                }
            />


            <input
                placeholder="Thumbnail URL"
                value={form.thumbnailUrl}
                onChange={(e) =>
                    setForm({
                        ...form,
                        thumbnailUrl: e.target.value
                    })
                }
            />


            <input
                placeholder="Category"
                value={form.category}
                onChange={(e) =>
                    setForm({
                        ...form,
                        category: e.target.value
                    })
                }
            />


            <input
                placeholder="Channel ID"
                value={form.channel}
                onChange={(e) =>
                    setForm({
                        ...form,
                        channel: e.target.value
                    })
                }
            />


            <button>
                Upload
            </button>


        </form>

    );

}

export default UploadVideo;
