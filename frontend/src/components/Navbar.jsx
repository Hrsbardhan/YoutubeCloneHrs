import { Link } from "react-router-dom";

function Navbar() {
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

                <Link to="/login">
                    Login
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
