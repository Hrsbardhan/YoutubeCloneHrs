import { useState } from "react";
import api from "../services/api";
import "../styles/upload.css";

function Upload(){

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const [category,setCategory]=useState("General");
    const [thumbnailUrl,setThumbnailUrl]=useState("");
    const [videoUrl,setVideoUrl]=useState("");
    const [loading,setLoading]=useState(false);

    async function handleSubmit(e){

        e.preventDefault();

        setLoading(true);

        try{

            await api.post("/videos",{

                title,
                description,
                category,
                thumbnailUrl,
                videoUrl

            });

            alert("Video uploaded successfully.");

            setTitle("");
            setDescription("");
            setCategory("General");
            setThumbnailUrl("");
            setVideoUrl("");

        }
        catch{

            alert("Upload failed.");

        }
        finally{

            setLoading(false);

        }

    }

    return(

        <div className="upload-page">

            <div className="upload-card">

                <h1>

                    Upload Video

                </h1>

                <form onSubmit={handleSubmit}>

                    <label>

                        Video Title

                    </label>

                    <input
                        value={title}
                        onChange={e=>setTitle(e.target.value)}
                        required
                    />

                    <label>

                        Description

                    </label>

                    <textarea
                        rows="5"
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                    />

                    <label>

                        Category

                    </label>

                    <select
                        value={category}
                        onChange={e=>setCategory(e.target.value)}
                    >

                        <option>General</option>
                        <option>Education</option>
                        <option>Gaming</option>
                        <option>Technology</option>
                        <option>Music</option>
                        <option>Entertainment</option>

                    </select>

                    <label>

                        Thumbnail URL

                    </label>

                    <input
                        value={thumbnailUrl}
                        onChange={e=>setThumbnailUrl(e.target.value)}
                    />

                    <label>

                        Video URL

                    </label>

                    <input
                        value={videoUrl}
                        onChange={e=>setVideoUrl(e.target.value)}
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                    >

                        {

                            loading
                            ? "Uploading..."
                            : "Publish Video"

                        }

                    </button>

                </form>

            </div>

        </div>

    );

}

export default Upload;
