import FormButton from "../components/FormButton";

function Register() {

    return (

        <div className="form-container">

            <h2>
                Register
            </h2>


            <form>

                <input
                    placeholder="Username"
                />


                <input
                    type="email"
                    placeholder="Email"
                />


                <input
                    type="password"
                    placeholder="Password"
                />


                <FormButton>
                    Register
                </FormButton>

            </form>

        </div>

    );
}

export default Register;
