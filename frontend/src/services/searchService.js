import api from "./api";

export const searchVideos = async (query) => {
    const response = await api.get(
        `/search?query=${query}`
    );

    return response.data;
};
