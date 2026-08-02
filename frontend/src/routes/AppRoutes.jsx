import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import VideoDetails from "../pages/VideoDetails";
import ChannelList from "../pages/ChannelList";
import CreateChannel from "../pages/CreateChannel";
import Playlist from "../pages/Playlist";
import CreatePlaylist from "../pages/CreatePlaylist";
import Comments from "../pages/Comments";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/register" element={<Register />} />

                <Route path="/login" element={<Login />} />

                <Route path="/" element={<Home />} />

                <Route path="/video/:id" element={<VideoDetails />} />

                <Route path="/video/:videoId/comments" element={<Comments />} />

                <Route path="/channels" element={<ChannelList />} />

                <Route
                    path="/channels/create"
                    element={<CreateChannel />}
                />

                <Route
                    path="/playlists"
                    element={<Playlist />}
                />

                <Route
                    path="/playlists/create"
                    element={<CreatePlaylist />}
                />

            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
