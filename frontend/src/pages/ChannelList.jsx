import { useEffect, useState } from "react";
import api from "../services/api";
import ChannelCard from "../components/ChannelCard";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";


function ChannelList() {

    const [channels, setChannels] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    useEffect(() => {

        const loadChannels = async () => {

            try {

                const response = await api.get(
                    "/channels"
                );

                setChannels(response.data);

            } catch (error) {

                setError(
                    "Unable to load channels"
                );

            } finally {

                setLoading(false);

            }

        };


        loadChannels();

    }, []);


    if (loading) {

        return <Loading />;

    }


    if (error) {

        return (
            <ErrorMessage
                message={error}
            />
        );

    }


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
