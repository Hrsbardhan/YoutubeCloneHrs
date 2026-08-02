import { useEffect, useState } from "react";
import api from "../services/api";

function ChannelList() {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        const loadChannels = async () => {
            const response = await api.get("/channels");

            setChannels(response.data);
        };

        loadChannels();
    }, []);

    return (
        <div>
            <h1>
                Channels
            </h1>

            {
                channels.map((channel) => (
                    <div key={channel._id}>
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
                    </div>
                ))
            }
        </div>
    );
}

export default ChannelList;
