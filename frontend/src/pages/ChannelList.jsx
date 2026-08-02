import { useEffect, useState } from "react";
import api from "../services/api";
import ChannelCard from "../components/ChannelCard";

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
        <div className="video-grid">
            {
                channels.map((channel) => (
                    <ChannelCard
                        key={channel._id}
                        channel={channel}
                    />
                ))
            }
        </div>
    );
}

export default ChannelList;
