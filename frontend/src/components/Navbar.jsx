import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {

    const {
        logout
    } = useContext(AuthContext);


    return (

        <nav>

            <h2>
                YouTube Clone
            </h2>


            <div>

                <Link to="/">
                    Home
                </Link>

                {" | "}

                <Link to="/search">
                    Search
                </Link>

                {" | "}

                <Link to="/channels">
                    Channels
                </Link>

                {" | "}

                <Link to="/playlists">
                    Playlists
                </Link>

                {" | "}

                <button
                    onClick={logout}
                >
                    Logout
                </button>

            </div>

        </nav>

    );
}

export default Navbar;
