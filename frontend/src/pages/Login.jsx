import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../services/authService";
import { AuthContext } from "../context/AuthContext";

function Login() {
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [form, setForm] = useState({
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

        const data = await loginRequest(form);

        login(data);

        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

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
                Login
            </button>
        </form>
    );
}

export default Login;
