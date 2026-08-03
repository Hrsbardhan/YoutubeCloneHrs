import { NavLink } from "react-router-dom";
import {
    FaHome,
    FaFire,
    FaPlayCircle,
    FaHistory,
    FaThumbsUp,
    FaList,
    FaCog
} from "react-icons/fa";

import "./Sidebar.css";

const menuItems = [

    {
        name: "Home",
        to: "/",
        icon: <FaHome />
    },

    {
        name: "Shorts",
        to: "/shorts",
        icon: <FaFire />
    },

    {
        name: "Subscriptions",
        to: "/subscriptions",
        icon: <FaPlayCircle />
    },

    {
        name: "History",
        to: "/history",
        icon: <FaHistory />
    },

    {
        name: "Liked Videos",
        to: "/liked",
        icon: <FaThumbsUp />
    },

    {
        name: "Playlists",
        to: "/playlists",
        icon: <FaList />
    },

    {
        name: "Settings",
        to: "/settings",
        icon: <FaCog />
    }

];

function Sidebar() {

    return (

        <aside className="sidebar">

            {
                menuItems.map(item => (

                    <NavLink
                        key={item.name}
                        to={item.to}
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-link active"
                                : "sidebar-link"
                        }
                    >

                        <span className="sidebar-icon">
                            {item.icon}
                        </span>

                        <span>
                            {item.name}
                        </span>

                    </NavLink>

                ))
            }

        </aside>

    );

}

export default Sidebar;
