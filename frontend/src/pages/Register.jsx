import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormButton from "../components/FormButton";
import { register } from "../services/authService";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            await register(form);

            navigate("/login");

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Registration failed"
            );

        }
    };

    return (

        <div className="form-container">

            <h2>
                Register
            </h2>

            {
                error && <p>{error}</p>
            }

            <form onSubmit={handleSubmit}>

                <input
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                />

                <input
                    name="email"
                    type="email"
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

                <FormButton>
                    Register
                </FormButton>

            </form>

        </div>
    );
}

export default Register;
