import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BottomNavigation from "../components/BottomNavigation";
import "../styles/layout.css";

function MainLayout({children}){

return(

<>

<Navbar/>

<div className="app-shell">

<Sidebar/>

<main className="content">

{children}

</main>

</div>

<BottomNavigation/>

</>

);

}

export default MainLayout;
