import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";

function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        await register(form);

        navigate("/login");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Register</h2>

            <input
                name="username"
                placeholder="Username"
                value={form.username}
                onChange={handleChange}
            />

            <input
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
            />

            <input
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
            />

            <button type="submit">
                Register
            </button>
        </form>
    );
}

export default Register;
