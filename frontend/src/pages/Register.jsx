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

    const submit = async (e) => {
        e.preventDefault();

        await register(form);

        navigate("/login");
    };

    return (
        <div className="form-container">

            <h2>
                Register
            </h2>

            <form onSubmit={submit}>

                <input
                    placeholder="Username"
                    value={form.username}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            username: e.target.value
                        })
                    }
                />

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
                    Register
                </FormButton>

            </form>

        </div>
    );
}

export default Register;
