import api from "../api/axiosConfig";

export const getTickets = async () => {

    const response =
        await api.get("/api/tickets");

    return response.data;
};

export const createTicket = async (data) => {

    const response =
        await api.post(
            "/api/tickets",
            data
        );

    return response.data;
};

export const updateTicketStatus =
    async (id, status) => {

    const response =
        await api.put(
            `/api/tickets/${id}/status`,
            {
                status: status
            }
        );

    return response.data;
};

export const assignTicket =
    async (ticketId, userId) => {

    const response =
        await api.put(
            `/api/tickets/${ticketId}/assign`,
            {
                userId
            }
        );

    return response.data;
};

export const getMyTickets =
    async () => {

    const response =
        await api.get(
            "/api/tickets/my"
        );

    return response.data;
};