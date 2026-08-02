import FormButton from "../components/FormButton";

function Login() {

    return (

        <div className="form-container">

            <h2>
                Login
            </h2>


            <form>

                <input
                    type="email"
                    placeholder="Email"
                />


                <input
                    type="password"
                    placeholder="Password"
                />


                <FormButton>
                    Login
                </FormButton>

            </form>

        </div>

    );
}

export default Login;
