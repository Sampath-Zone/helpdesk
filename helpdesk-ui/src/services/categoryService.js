import api from "../api/axiosConfig";

export const getCategories = async () => {

    const response =
        await api.get("/api/categories");

    return response.data;
};

export const createCategory =
    async (data) => {

    const response =
        await api.post(
            "/api/categories",
            data
        );

    return response.data;
};
