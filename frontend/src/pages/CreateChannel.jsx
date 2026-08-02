import { useState } from "react";
import api from "../services/api";

function CreateChannel() {
    const [form, setForm] = useState({
        name: "",
        description: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const submit = async (e) => {
        e.preventDefault();

        await api.post(
            "/channels",
            form,
            {
                headers: {
                    Authorization:
                        `Bearer ${localStorage.getItem("token")}`
                }
            }
        );

        setForm({
            name: "",
            description: ""
        });
    };

    return (
        <form onSubmit={submit}>
            <h1>
                Create Channel
            </h1>

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
                Create
            </button>
        </form>
    );
}

export default CreateChannel;
