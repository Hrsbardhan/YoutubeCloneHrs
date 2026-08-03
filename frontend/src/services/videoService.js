import api from "./api";

export const getVideos = async () => {
    const response = await api.get("/videos");
    return response.data;
};

export const getVideoById = async (id) => {
    const response = await api.get(`/videos/${id}`);
    return response.data;
};

export const createVideo = async (data) => {
    const response = await api.post("/videos", data);
    return response.data;
};

export const updateVideo = async (id, data) => {
    const response = await api.put(`/videos/${id}`, data);
    return response.data;
};

export const deleteVideo = async (id) => {
    const response = await api.delete(`/videos/${id}`);
    return response.data;
};
