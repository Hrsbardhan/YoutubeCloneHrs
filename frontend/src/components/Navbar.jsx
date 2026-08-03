import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


function Navbar() {

    const {
        user,
        logout
    } = useContext(AuthContext);


    return (

        <nav>

            <a href="/">
                Home
            </a>


            {
                user ? (

                    <>

                        <span>
                            {user.username}
                        </span>


                        <button
                            onClick={logout}
                        >
                            Logout
                        </button>

                    </>

                ) : (

                    <>

                        <a href="/login">
                            Login
                        </a>


                        <a href="/register">
                            Register
                        </a>

                    </>

                )

            }

        </nav>

    );

}

export default Navbar;


