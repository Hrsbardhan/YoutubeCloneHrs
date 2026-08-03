import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Card from "../components/Card";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

function ChannelManager() {

    const navigate = useNavigate();

    const [channels, setChannels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const loadChannels = async () => {

        try {

            const { data } = await api.get("/channels");

            setChannels(data);

        } catch {

            setError("Unable to load channels");

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        loadChannels();

    }, []);

    const deleteChannel = async (id) => {

        if (!window.confirm("Delete this channel?")) return;

        try {

            await api.delete(`/channels/${id}`);

            loadChannels();

        } catch {

            setError("Unable to delete channel");

        }

    };

    if (loading) return <Loading />;

    return (

        <div>

            <h1>My Channels</h1>

            {error && <ErrorMessage message={error} />}

            {
                channels.map(channel => (

                    <Card key={channel._id}>

                        <h3>{channel.name}</h3>

                        <p>{channel.description}</p>

                        <button
                            onClick={() =>
                                navigate(`/channels/${channel._id}`)
                            }
                        >
                            View
                        </button>

                        <button
                            onClick={() =>
                                navigate(`/manage/channels/${channel._id}/edit`)
                            }
                        >
                            Edit
                        </button>

                        <button
                            onClick={() =>
                                deleteChannel(channel._id)
                            }
                        >
                            Delete
                        </button>

                    </Card>

                ))
            }

        </div>

    );

}

export default ChannelManager;
