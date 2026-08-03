import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

function EditChannel() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        description: ""
    });

    const [error, setError] = useState("");

    useEffect(() => {
        loadChannel();
    }, []);

    const loadChannel = async () => {

        try {

            const { data } = await api.get(`/channels/${id}`);

            setForm({
                name: data.name || "",
                description: data.description || ""
            });

        } catch {

            setError("Unable to load channel");

        }

    };

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };

    const submit = async (e) => {

        e.preventDefault();

        try {

            await api.put(`/channels/${id}`, form);

            navigate("/manage/channels");

        } catch {

            setError("Unable to update channel");

        }

    };

    return (

        <div className="form-container">

            <h2>Edit Channel</h2>

            {error && <p>{error}</p>}

            <form onSubmit={submit}>

                <input
                    name="name"
                    placeholder="Channel Name"
                    value={form.name}
                    onChange={handleChange}
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                />

                <button>
                    Update Channel
                </button>

            </form>

        </div>

    );

}

export default EditChannel;
