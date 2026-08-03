import api from "./api";

export const getPlaylists = async () => {
    const response = await api.get("/playlists");
    return response.data;
};

export const createPlaylist = async (data) => {
    const response = await api.post("/playlists", data);
    return response.data;
};

export const getPlaylistById = async (id) => {
    const response = await api.get(`/playlists/${id}`);
    return response.data;
};

export const updatePlaylist = async (id, data) => {
    const response = await api.put(`/playlists/${id}`, data);
    return response.data;
};

export const addVideoToPlaylist = async (id, videoId) => {
    const response = await api.post(
        `/playlists/${id}/videos`,
        { videoId }
    );

    return response.data;
};

export const deletePlaylist = async (id) => {
    const response = await api.delete(`/playlists/${id}`);
    return response.data;
};
