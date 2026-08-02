import Card from "./Card";

function ChannelCard({
    channel
}) {
    return (
        <Card>
            <h3>
                {channel.name}
            </h3>

            <p>
                {channel.description}
            </p>

            <span>
                Subscribers:
                {" "}
                {channel.subscribers}
            </span>
        </Card>
    );
}

export default ChannelCard;
