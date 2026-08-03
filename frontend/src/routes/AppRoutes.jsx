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
import Search from "../pages/Search";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "../components/ProtectedRoute";


function AppRoutes() {

    return (

        <BrowserRouter>

            <MainLayout>

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
                        path="/search"
                        element={<Search />}
                    />


                    <Route
                        path="/video/:id"
                        element={<VideoDetails />}
                    />


                    <Route
                        path="/video/:videoId/comments"
                        element={<Comments />}
                    />


                    <Route
                        path="/channels"
                        element={<ChannelList />}
                    />


                    <Route
                        path="/channels/create"
                        element={
                            <ProtectedRoute>
                                <CreateChannel />
                            </ProtectedRoute>
                        }
                    />


                    <Route
                        path="/playlists"
                        element={
                            <ProtectedRoute>
                                <Playlist />
                            </ProtectedRoute>
                        }
                    />


                    <Route
                        path="/playlists/create"
                        element={
                            <ProtectedRoute>
                                <CreatePlaylist />
                            </ProtectedRoute>
                        }
                    />

                </Routes>

            </MainLayout>

        </BrowserRouter>

    );

}

export default AppRoutes;
