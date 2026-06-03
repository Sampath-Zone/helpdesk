import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";

import {
    getTickets,
    getMyTickets,
    createTicket,
    updateTicketStatus,
    assignTicket
} from "../../services/ticketService";

import {
    getCategories
} from "../../services/categoryService";

import {
    getUsers
} from "../../services/userService";

function Ticket() {

    const role =
        localStorage.getItem(
            "role"
        );

    const [tickets, setTickets] =
        useState([]);

    const [categories, setCategories] =
        useState([]);

    const [users, setUsers] =
        useState([]);

    const [title, setTitle] =
        useState("");

    const [description,
        setDescription] =
        useState("");

    const [priority,
        setPriority] =
        useState("LOW");

    const [categoryId,
        setCategoryId] =
        useState("");


    const loadMyTickets =
        async () => {

            try {

                const response =
                    await getMyTickets();

                setTickets(response);

            } catch (error) {

                console.log(error);
            }
        };

    useEffect(() => {

        if (role === "ADMIN") {

            loadTickets();
            loadUsers();

        } else {

            loadMyTickets();

        }

        loadCategories();

    }, []);

    const loadTickets =
        async () => {

            try {

                const response =
                    await getTickets();

                setTickets(response);

            } catch (error) {

                console.log(error);
            }
        };

    const loadCategories =
        async () => {

            try {

                const response =
                    await getCategories();

                setCategories(response);

            } catch (error) {

                console.log(error);
            }
        };

    const loadUsers =
        async () => {

            try {

                const response =
                    await getUsers();

                setUsers(response);

            } catch (error) {

                console.log(error);
            }
        };

    const handleCreate =
        async () => {

            if (
                !title ||
                !description ||
                !categoryId
            ) {

                alert(
                    "Fill all fields"
                );

                return;
            }

            try {

                await createTicket({

                    title,
                    description,
                    priority,
                    categoryId

                });

                setTitle("");
                setDescription("");
                setPriority("LOW");
                setCategoryId("");

                if (role === "ADMIN") {

                    loadTickets();

                } else {

                    loadMyTickets();

                }

            } catch (error) {

                console.log(error);
            }
        };

    const handleStatusUpdate =
        async (id, status) => {

            try {

                await updateTicketStatus(
                    id,
                    status
                );

                loadTickets();

            } catch (error) {

                console.log(error);
            }
        };

    const handleAssign =
        async (ticketId, userId) => {

            try {

                await assignTicket(
                    ticketId,
                    userId
                );

                loadTickets();

            } catch (error) {

                console.log(error);
            }
        };

    return (

    <>
        <Navbar />

        <div className="page-container">

           <h1 className="page-title">
    Ticket Management
</h1>

<div className="form-card">

    <input
        type="text"
        placeholder="Ticket Title"
        value={title}
        onChange={(e) =>
            setTitle(e.target.value)
        }
    />

    <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) =>
            setDescription(
                e.target.value
            )
        }
    />

    <select
        value={priority}
        onChange={(e) =>
            setPriority(
                e.target.value
            )
        }
    >

        <option value="LOW">
            LOW
        </option>

        <option value="MEDIUM">
            MEDIUM
        </option>

        <option value="HIGH">
            HIGH
        </option>

    </select>

    <select
        value={categoryId}
        onChange={(e) =>
            setCategoryId(
                e.target.value
            )
        }
    >

        <option value="">
            Select Category
        </option>

        {categories.map(category => (

            <option
                key={category.id}
                value={category.id}
            >
                {category.name}
            </option>

        ))}

    </select>

    <button
        onClick={handleCreate}
    >
        Create Ticket
    </button>

</div>

<h2
    style={{
        marginBottom: "20px"
    }}
>
    Tickets
</h2>

{tickets.map(ticket => (

    <div
        key={ticket.id}
        className="ticket-card"
    >

        <h3>
            🎫 {ticket.title}
        </h3>

        <p>
            Description:
            {" "}
            {ticket.description}
        </p>

        <p>
            Priority:
            {" "}
            {ticket.priority}
        </p>

        <p>
            Assigned To:
            {" "}
            {ticket.assignedTo ||
            "Not Assigned"}
        </p>

        <p>
            Status:
            {" "}
            {ticket.status}
        </p>

        {role === "ADMIN" && (

            <>

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

        )}

    </div>

))}

                

        </div>

    </>

    );
}
export default Ticket;