import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register as registerRequest } from "../services/authService";
import FormButton from "../components/FormButton";


function Register() {

    const navigate = useNavigate();


    const [form, setForm] = useState({
        username: "",
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

            await registerRequest(form);


            navigate("/login");


        } catch (error) {

            setError(
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
                error &&
                <p>
                    {error}
                </p>
            }


            <form onSubmit={submit}>


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
