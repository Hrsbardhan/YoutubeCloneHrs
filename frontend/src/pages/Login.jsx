import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormButton from "../components/FormButton";
import { login as loginService } from "../services/authService";
import { AuthContext } from "../context/AuthContext";

function Login() {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

    };


    const submit = async (e) => {

        e.preventDefault();

        try {

            const response = await loginService(form);

            login(response);

            navigate("/");

        } catch (error) {

            setError(
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
                error &&
                <p>
                    {error}
                </p>
            }


            <form onSubmit={submit}>

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
                    Login
                </FormButton>

            </form>

        </div>

    );
}

export default Login;
