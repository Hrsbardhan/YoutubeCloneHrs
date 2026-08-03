import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Card from "../components/Card";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";


function ChannelPage() {

    const {
        id
    } = useParams();


    const [channel, setChannel] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    useEffect(() => {

        const loadChannel = async () => {

            try {

                const response = await api.get(
                    `/channels/${id}`
                );

                setChannel(response.data);

            } catch (error) {

                setError(
                    "Unable to load channel"
                );

            } finally {

                setLoading(false);

            }

        };


        loadChannel();

    }, [id]);


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

        <Card>

            <h1>
                {channel.name}
            </h1>


            <p>
                {channel.description}
            </p>


            <p>
                Subscribers:
                {" "}
                {channel.subscribers}
            </p>

        </Card>

    );

}


export default ChannelPage;
