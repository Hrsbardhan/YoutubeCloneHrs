import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import "../styles/dashboard.css";

function Dashboard(){

    const [videos,setVideos]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{

        loadVideos();

    },[]);

    async function loadVideos(){

        try{

            const {data}=await api.get("/videos");

            setVideos(data);

        }
        catch{

            alert("Unable to load dashboard.");

        }
        finally{

            setLoading(false);

        }

    }

    async function deleteVideo(id){

        if(!window.confirm("Delete this video?")) return;

        try{

            await api.delete(`/videos/${id}`);

            setVideos(videos.filter(v=>v._id!==id));

        }
        catch{

            alert("Delete failed.");

        }

    }

    if(loading){

        return <h2 style={{color:"white"}}>Loading...</h2>;

    }

    return(

        <div className="dashboard">

            <div className="dashboard-header">

                <h1>

                    Creator Dashboard

                </h1>

                <Link
                    className="upload-button"
                    to="/upload"
                >

                    Upload Video

                </Link>

            </div>

            <table className="dashboard-table">

                <thead>

                    <tr>

                        <th>Thumbnail</th>

                        <th>Title</th>

                        <th>Views</th>

                        <th>Category</th>

                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                {

                    videos.map(video=>

                        <tr key={video._id}>

                            <td>

                                <img
                                    src={
                                        video.thumbnailUrl ||
                                        "https://placehold.co/160x90"
                                    }
                                    alt=""
                                />

                            </td>

                            <td>

                                {video.title}

                            </td>

                            <td>

                                {video.views}

                            </td>

                            <td>

                                {video.category}

                            </td>

                            <td>

                                <Link
                                    to={`/edit-video/${video._id}`}
                                    className="edit-btn"
                                >

                                    Edit

                                </Link>

                                <button
                                    className="delete-btn"
                                    onClick={()=>deleteVideo(video._id)}
                                >

                                    Delete

                                </button>

                            </td>

                        </tr>

                    )

                }

                </tbody>

            </table>

        </div>

    );

}

export default Dashboard;
