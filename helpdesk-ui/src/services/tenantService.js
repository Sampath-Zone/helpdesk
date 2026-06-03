import api from "../api/axiosConfig";

export const getTenants =
    async () => {

    const response =
        await api.get(
            "/api/tenants"
        );

    return response.data;
};

export const createTenant =
    async (tenant) => {

    const response =
        await api.post(
            "/api/tenants",
            tenant
        );

    return response.data;
};