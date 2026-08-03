import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import VideoCard from "../components/VideoCard";
import "../styles/channel.css";

function ChannelPage(){

    const { id } = useParams();

    const [channel,setChannel]=useState(null);
    const [videos,setVideos]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");

    useEffect(()=>{

        loadChannel();

    },[id]);

    async function loadChannel(){

        try{

            const channelRes=await api.get(`/channels/${id}`);
            setChannel(channelRes.data);

            try{

                const videoRes=await api.get(`/videos?channel=${id}`);
                setVideos(videoRes.data);

            }catch{

                setVideos([]);

            }

        }
        catch{

            setError("Unable to load channel.");

        }
        finally{

            setLoading(false);

        }

    }

    if(loading) return <Loading/>;

    if(error) return <ErrorMessage message={error}/>;

    return(

        <div className="channel-page">

            <div className="channel-banner"></div>

            <section className="channel-header">

                <div className="channel-avatar">

                    {
                        channel?.name?.charAt(0)?.toUpperCase() || "C"
                    }

                </div>

                <div className="channel-details">

                    <h1>

                        {channel.name}

                    </h1>

                    <p>

                        {channel.description || "No description available."}

                    </p>

                    <span>

                        {(channel.subscribers || 0)} Subscribers

                    </span>

                </div>

                <button className="subscribe-button">

                    Subscribe

                </button>

            </section>

            <nav className="channel-tabs">

                <button className="active">

                    Home

                </button>

                <button>

                    Videos

                </button>

                <button>

                    Playlists

                </button>

                <button>

                    About

                </button>

            </nav>

            <section className="channel-video-grid">

                {

                    videos.length
                    ?

                    videos.map(video=>

                        <VideoCard
                            key={video._id}
                            video={video}
                        />

                    )

                    :

                    <p className="empty-message">

                        No videos uploaded yet.

                    </p>

                }

            </section>

        </div>

    );

}

export default ChannelPage;
