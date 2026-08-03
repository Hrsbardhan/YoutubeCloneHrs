import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/layout.css";

function MainLayout({ children }) {

    return (

        <>

            <Navbar />

            <div className="app-layout">

                <Sidebar />

                <main className="app-content">

                    {children}

                </main>

            </div>

        </>

    );

}

export default MainLayout;
