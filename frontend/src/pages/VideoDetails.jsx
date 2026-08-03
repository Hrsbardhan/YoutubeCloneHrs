import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import "../styles/watch.css";

function VideoDetails() {

    const { id } = useParams();

    const [video,setVideo] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    useEffect(()=>{

        fetchVideo();

    },[id]);

    async function fetchVideo(){

        try{

            const {data}=await api.get(`/videos/${id}`);

            setVideo(data);

        }
        catch{

            setError("Unable to load video.");

        }
        finally{

            setLoading(false);

        }

    }

    if(loading) return <Loading/>;

    if(error) return <ErrorMessage message={error}/>;

    return(

        <div className="watch-page">

            <section className="watch-main">

                <video
                    className="watch-player"
                    controls
                    src={video.videoUrl}
                />

                <h2 className="watch-title">

                    {video.title}

                </h2>

                <div className="watch-stats">

                    <span>{video.views || 0} views</span>

                    <div className="watch-actions">

                        <button>👍 Like</button>

                        <button>👎 Dislike</button>

                        <button>↗ Share</button>

                        <button>💾 Save</button>

                    </div>

                </div>

                <div className="channel-box">

                    <div className="channel-avatar">

                        {video.owner?.username?.charAt(0).toUpperCase() || "U"}

                    </div>

                    <div className="channel-info">

                        <h4>

                            {video.owner?.username || "Unknown"}

                        </h4>

                        <p>Creator</p>

                    </div>

                    <button className="subscribe-btn">

                        Subscribe

                    </button>

                </div>

                <div className="description-box">

                    <p>

                        {video.description || "No description available."}

                    </p>

                </div>

            </section>

            <aside className="related-videos">

                <h3>

                    Related Videos

                </h3>

                <p>

                    Related videos section will be integrated during
                    Frontend API Integration milestone.

                </p>

            </aside>

        </div>

    );

}

export default VideoDetails;
