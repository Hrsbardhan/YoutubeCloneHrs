import Card from "./Card";

function VideoCard({
    video
}) {
    return (
        <Card>
            <h3>
                {video.title}
            </h3>

            <p>
                {video.description}
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
