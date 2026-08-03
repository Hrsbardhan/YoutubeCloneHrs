import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormButton from "../components/FormButton";
import { login as loginRequest } from "../services/authService";
import { AuthContext } from "../context/AuthContext";

function Login() {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const data = await loginRequest({
                email,
                password
            });

            login(data);

            navigate("/");

        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Login failed"
            );
        }
    };

    return (
        <div className="form-container">

            <h2>
                Login
            </h2>

            {
                error && <p>{error}</p>
            }

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                />

                <FormButton>
                    Login
                </FormButton>

            </form>

        </div>
    );
}

export default Login;
