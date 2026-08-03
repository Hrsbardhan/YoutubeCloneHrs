import api from "./api";

export const getComments = async (videoId) => {
    const response = await api.get(`/comments/${videoId}`);
    return response.data;
};

export const createComment = async (data) => {
    const response = await api.post("/comments", data);
    return response.data;
};

export const deleteComment = async (id) => {
    const response = await api.delete(`/comments/${id}`);
    return response.data;
};
