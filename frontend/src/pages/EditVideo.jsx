import { useEffect,useState } from "react";
import { useNavigate,useParams } from "react-router-dom";
import api from "../services/api";
import "../styles/editVideo.css";

function EditVideo(){

    const {id}=useParams();
    const navigate=useNavigate();

    const [loading,setLoading]=useState(true);

    const [form,setForm]=useState({

        title:"",
        description:"",
        category:"",
        thumbnailUrl:"",
        videoUrl:""

    });

    useEffect(()=>{

        loadVideo();

    },[]);

    async function loadVideo(){

        try{

            const {data}=await api.get(`/videos/${id}`);

            setForm({

                title:data.title || "",
                description:data.description || "",
                category:data.category || "",
                thumbnailUrl:data.thumbnailUrl || "",
                videoUrl:data.videoUrl || ""

            });

        }
        catch{

            alert("Unable to load video.");

        }
        finally{

            setLoading(false);

        }

    }

    function handleChange(e){

        setForm({

            ...form,
            [e.target.name]:e.target.value

        });

    }

    async function handleSubmit(e){

        e.preventDefault();

        try{

            await api.put(`/videos/${id}`,form);

            alert("Video updated successfully.");

            navigate("/dashboard");

        }
        catch{

            alert("Update failed.");

        }

    }

    if(loading){

        return <h2 style={{color:"white"}}>Loading...</h2>;

    }

    return(

        <div className="edit-video-page">

            <div className="edit-video-card">

                <h1>Edit Video</h1>

                <form onSubmit={handleSubmit}>

                    <label>Title</label>

                    <input
                        name="title"
                        value={form.title}
                        onChange={handleChange}
                        required
                    />

                    <label>Description</label>

                    <textarea
                        rows="5"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                    />

                    <label>Category</label>

                    <input
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                    />

                    <label>Thumbnail URL</label>

                    <input
                        name="thumbnailUrl"
                        value={form.thumbnailUrl}
                        onChange={handleChange}
                    />

                    <label>Video URL</label>

                    <input
                        name="videoUrl"
                        value={form.videoUrl}
                        onChange={handleChange}
                    />

                    <button type="submit">

                        Save Changes

                    </button>

                </form>

            </div>

        </div>

    );

}

export default EditVideo;
