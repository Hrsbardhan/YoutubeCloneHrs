import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import VideoCard from "../components/VideoCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function WatchPage() {

    const { id } = useParams();

    const [video,setVideo]=useState(null);
    const [related,setRelated]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");

    useEffect(()=>{
        loadData();
    },[id]);

    const loadData=async()=>{

        try{

            const videoRes=await api.get(`/videos/${id}`);
            setVideo(videoRes.data);

            const listRes=await api.get("/videos");

            const videos=listRes.data.filter(
                v=>v._id!==id
            );

            setRelated(videos.slice(0,8));

        }catch{

            setError("Unable to load watch page");

        }finally{

            setLoading(false);

        }

    };

    if(loading) return <Loading/>;

    if(error) return <ErrorMessage message={error}/>;

    return(

        <div className="watch-page">

            <div>

                <video
                    controls
                    width="100%"
                    src={video.videoUrl}
                />

                <h2>{video.title}</h2>

                <p>{video.description}</p>

                <p>
                    Views: {video.views}
                </p>

            </div>

            <aside>

                <h3>Related Videos</h3>

                {
                    related.map(item=>(
                        <VideoCard
                            key={item._id}
                            video={item}
                        />
                    ))
                }

            </aside>

        </div>

    );

}

export default WatchPage;
