import api from "../api/axiosConfig";

export const getFeedback =
    async () => {

    const response =
        await api.get(
            "/api/feedback"
        );

    return response.data;
};

export const createFeedback =
    async (feedback) => {

    const response =
        await api.post(
            "/api/feedback",
            feedback
        );

    return response.data;
};