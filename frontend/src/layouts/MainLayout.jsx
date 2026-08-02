import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <div style={{ display: "flex", minHeight: "calc(100vh - 72px)" }}>
                <Sidebar />
                <main style={{ flex: 1, padding: "24px" }}>
                    <Outlet />
                </main>
            </div>
        </>
    );
}
