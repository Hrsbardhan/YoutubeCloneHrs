import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="flex items-center justify-between border-b px-6 py-4">
            <Link to="/" className="text-2xl font-bold">
                YouTube Clone
            </Link>

            <input
                type="text"
                placeholder="Search"
                className="w-96 rounded border px-3 py-2"
            />

            <nav className="flex gap-3">
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    );
}
