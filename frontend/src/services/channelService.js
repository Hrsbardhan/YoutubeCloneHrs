import api from "./api";

export const getChannels = async () => {
    const response = await api.get("/channels");
    return response.data;
};

export const createChannel = async (data) => {
    const response = await api.post("/channels", data);
    return response.data;
};

export const getChannelById = async (id) => {
    const response = await api.get(`/channels/${id}`);
    return response.data;
};

export const updateChannel = async (id, data) => {
    const response = await api.put(`/channels/${id}`, data);
    return response.data;
};

export const deleteChannel = async (id) => {
    const response = await api.delete(`/channels/${id}`);
    return response.data;
};
