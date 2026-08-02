import { NavLink } from "react-router-dom";

const items = [
    { name: "Home", to: "/" },
    { name: "Playlists", to: "/playlist/demo" },
];

export default function Sidebar() {
    return (
        <aside className="w-60 border-r p-4">
            <nav className="flex flex-col gap-2">
                {items.map((item) => (
                    <NavLink key={item.to} to={item.to}>
                        {item.name}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}
