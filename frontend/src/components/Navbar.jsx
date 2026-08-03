import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


function Navbar() {

    const {
        user,
        logout
    } = useContext(AuthContext);


    return (

        <nav>

            <Link to="/">
                Home
            </Link>


            <Link to="/channels">
                Channels
            </Link>


            <Link to="/playlists">
                Playlists
            </Link>


            {
                user ? (

                    <button
                        onClick={logout}
                    >
                        Logout
                    </button>

                ) : (

                    <>
                        <Link to="/login">
                            Login
                        </Link>

                        <Link to="/register">
                            Register
                        </Link>
                    </>

                )
            }


        </nav>

    );

}


export default Navbar;
