import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

function Navbar() {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <header className="navbar">

            <div className="navbar-left">

                <button className="menu-btn">
                    ☰
                </button>

                <Link className="logo" to="/">
                    ▶ YouTube Clone
                </Link>

            </div>

            <div className="navbar-center">

                <input
                    className="search-input"
                    type="text"
                    placeholder="Search videos..."
                />

                <button className="search-btn">
                    🔍
                </button>

            </div>

            <div className="navbar-right">

                {user ? (
                    <>
                        <button className="icon-btn">
                            📹
                        </button>

                        <button className="icon-btn">
                            🔔
                        </button>

                        <Link className="username" to="/channel">
                            {user.username}
                        </Link>

                        <button
                            className="logout-btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link className="login-btn" to="/login">
                            Login
                        </Link>

                        <Link className="register-btn" to="/register">
                            Register
                        </Link>
                    </>
                )}

            </div>

        </header>
    );
}

export default Navbar;