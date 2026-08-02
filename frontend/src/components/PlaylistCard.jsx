import Card from "./Card";

function PlaylistCard({
    playlist
}) {
    return (
        <Card>
            <h3>
                {playlist.title}
            </h3>

            <p>
                {playlist.description}
            </p>

            <span>
                Videos:
                {" "}
                {playlist.videos.length}
            </span>
        </Card>
    );
}

export default PlaylistCard;
