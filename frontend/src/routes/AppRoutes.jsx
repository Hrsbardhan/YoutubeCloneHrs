import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import VideoDetails from "../pages/VideoDetails";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/video/:id"
                    element={<VideoDetails />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
