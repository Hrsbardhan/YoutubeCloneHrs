import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../services/authService";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import FormButton from "../components/FormButton";

function Login() {

    const navigate = useNavigate();

    const {
        login
    } = useContext(AuthContext);


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

            const data =
                await loginRequest(form);


            login(data);


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
