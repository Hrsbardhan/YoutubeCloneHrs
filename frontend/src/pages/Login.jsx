import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormButton from "../components/FormButton";
import { AuthContext } from "../context/AuthContext";
import { login as loginRequest } from "../services/authService";

function Login() {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const submit = async (e) => {
        e.preventDefault();

        const response = await loginRequest(form);

        login(response);

        navigate("/");
    };

    return (
        <div className="form-container">

            <h2>
                Login
            </h2>

            <form onSubmit={submit}>

                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            email: e.target.value
                        })
                    }
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            password: e.target.value
                        })
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
