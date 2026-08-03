import { Link } from "react-router-dom";
import Card from "./Card";

function VideoCard({
    video
}) {

    return (
        <Card>

            <Link
                to={`/video/${video._id}`}
            >

                <h3>
                    {video.title}
                </h3>

            </Link>

            <p>
                {video.description}
            </p>

            <p>
                Channel:
                {" "}
                {video.channel?.name || "Unknown"}
            </p>

            <span>
                Views:
                {" "}
                {video.views}
            </span>

        </Card>
    );
}

export default VideoCard;
