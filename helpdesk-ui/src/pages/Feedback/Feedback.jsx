import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";

import {
    getFeedback,
    createFeedback
} from "../../services/feedbackService";

import {
    getMyTickets
} from "../../services/ticketService";

function Feedback() {

    const [feedbackList,
        setFeedbackList] =
        useState([]);

    const [tickets,
        setTickets] =
        useState([]);

    const [rating,
        setRating] =
        useState("");

    const [comment,
        setComment] =
        useState("");

    const [ticketId,
        setTicketId] =
        useState("");

    useEffect(() => {

        loadFeedback();
        loadTickets();

    }, []);

    const loadFeedback =
        async () => {

        try {

            const response =
                await getFeedback();

            setFeedbackList(
                response
            );

        } catch (error) {

            console.log(error);
        }
    };

    const loadTickets =
        async () => {

        try {

            const response =
                await getMyTickets();

            const filteredTickets =
                response.filter(ticket =>
                    ticket.status === "RESOLVED" ||
                    ticket.status === "CLOSED"
                );

            setTickets(
                filteredTickets
            );

        } catch (error) {

            console.log(error);
        }
    };

    const handleCreate =
        async () => {

        if (
            !ticketId ||
            !rating ||
            !comment.trim()
        ) {

            alert(
                "Please fill all fields"
            );

            return;
        }

        try {

            await createFeedback({

                rating,
                comment,
                ticketId

            });

            setRating("");
            setComment("");
            setTicketId("");

            loadFeedback();

            alert(
                "Feedback Submitted"
            );

        } catch (error) {

            console.log(error);
        }
    };

    return (

        <>
            <Navbar />

            <div className="page-container">

                <h1 className="page-title">
                    Feedback Management
                </h1>

                <div className="form-card">

                    <select
                        value={ticketId}
                        onChange={(e) =>
                            setTicketId(
                                e.target.value
                            )
                        }
                    >

                        <option value="">
                            Select Ticket
                        </option>

                        {tickets.map(ticket => (

                            <option
                                key={ticket.id}
                                value={ticket.id}
                            >
                                {ticket.title}
                            </option>

                        ))}

                    </select>

                    <select
                        value={rating}
                        onChange={(e) =>
                            setRating(
                                e.target.value
                            )
                        }
                    >

                        <option value="">
                            Select Rating
                        </option>

                        <option value="1">
                            ⭐ 1
                        </option>

                        <option value="2">
                            ⭐ 2
                        </option>

                        <option value="3">
                            ⭐ 3
                        </option>

                        <option value="4">
                            ⭐ 4
                        </option>

                        <option value="5">
                            ⭐ 5
                        </option>

                    </select>

                    <input
                        type="text"
                        placeholder="Enter your feedback..."
                        value={comment}
                        onChange={(e) =>
                            setComment(
                                e.target.value
                            )
                        }
                    />

                    <button
                        onClick={
                            handleCreate
                        }
                    >
                        Submit Feedback
                    </button>

                </div>

                <h2
                    style={{
                        marginBottom:
                        "20px"
                    }}
                >
                    Submitted Feedback
                </h2>

                {feedbackList.map(feedback => (

                    <div
                        key={feedback.id}
                        className="ticket-card"
                    >

                        <h3>
                            ⭐ Rating:
                            {" "}
                            {feedback.rating}
                        </h3>

                        <p>
                            {feedback.comment}
                        </p>

                    </div>

                ))}

            </div>

        </>

    );
}

export default Feedback;