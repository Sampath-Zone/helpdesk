import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";

import {
    getMyTickets,
    updateTicketStatus
} from "../../services/ticketService";

function MyTickets() {

    const role =
        localStorage.getItem(
            "role"
        );

    const [tickets,
        setTickets] =
        useState([]);

    useEffect(() => {

        loadTickets();

    }, []);

    const loadTickets =
        async () => {

        try {

            const response =
                await getMyTickets();

            setTickets(response);

        } catch (error) {

            console.log(error);
        }
    };

    const handleStatusUpdate =
        async (ticketId, status) => {

        try {

            await updateTicketStatus(
                ticketId,
                status
            );

            loadTickets();

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <>
            <Navbar />

            <h1>
                My Tickets
            </h1>

            {tickets.map(ticket => (

    <div
        key={ticket.id}
        className="ticket-card"
    >

        <h3>
            🎫 {ticket.title}
        </h3>

        <p>
            <strong>Description:</strong>
            {" "}
            {ticket.description}
        </p>

        <p>
            <strong>Priority:</strong>
            {" "}
            {ticket.priority}
        </p>

        <p>
            <strong>Assigned To:</strong>
            {" "}
            {ticket.assignedTo ||
                "Not Assigned"}
        </p>

        {role === "ADMIN" ? (

            <>

                <p>
                    <strong>
                        Current Status:
                    </strong>
                    {" "}
                    {ticket.status}
                </p>

                <select
                    defaultValue=""
                    onChange={(e) =>
                        handleAssign(
                            ticket.id,
                            e.target.value
                        )
                    }
                >

                    <option value="">
                        Assign User
                    </option>

                    {users.map(user => (

                        <option
                            key={user.id}
                            value={user.id}
                        >
                            {user.name}
                        </option>

                    ))}

                </select>

                <select
                    value={ticket.status}
                    onChange={(e) =>
                        handleStatusUpdate(
                            ticket.id,
                            e.target.value
                        )
                    }
                >

                    <option value="NEW">
                        NEW
                    </option>

                    <option value="IN_PROGRESS">
                        IN_PROGRESS
                    </option>

                    <option value="RESOLVED">
                        RESOLVED
                    </option>

                    <option value="CLOSED">
                        CLOSED
                    </option>

                </select>

            </>

        ) : (

            <p>

                <strong>Status:</strong>

                {" "}

                {ticket.status}

            </p>

        )}

    </div>

))}
            

        </>

    );
}

export default MyTickets;