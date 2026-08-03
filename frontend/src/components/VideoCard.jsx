import { Link } from "react-router-dom";
import "../styles/videoCard.css";

function VideoCard({ video }) {

    return (

        <Link
            to={`/video/${video._id}`}
            className="video-card"
        >

            <img
                className="video-thumbnail"
                src={
                    video.thumbnailUrl ||
                    "https://placehold.co/640x360?text=Thumbnail"
                }
                alt={video.title}
            />

            <div className="video-info">

                <div className="video-avatar">

                    {video.owner?.username?.charAt(0).toUpperCase() || "U"}

                </div>

                <div className="video-meta">

                    <h3>
                        {video.title}
                    </h3>

                    <p>
                        {video.owner?.username || "Unknown Channel"}
                    </p>

                    <span>

                        {video.views || 0} views

                    </span>

                </div>

            </div>

        </Link>

    );

}

export default VideoCard;
