import { NavLink } from "react-router-dom";
import {
FaHome,
FaPlayCircle,
FaPlusCircle,
FaList,
FaUserCircle
} from "react-icons/fa";

import "../styles/bottomNavigation.css";

function BottomNavigation(){

return(

<nav className="bottom-nav">

<NavLink to="/" className="bottom-link">
<FaHome/>
<span>Home</span>
</NavLink>

<NavLink to="/shorts" className="bottom-link">
<FaPlayCircle/>
<span>Shorts</span>
</NavLink>

<NavLink to="/upload" className="bottom-link">
<FaPlusCircle/>
<span>Create</span>
</NavLink>

<NavLink to="/playlists" className="bottom-link">
<FaList/>
<span>Library</span>
</NavLink>

<NavLink to="/dashboard" className="bottom-link">
<FaUserCircle/>
<span>You</span>
</NavLink>

</nav>

);

}

export default BottomNavigation;
