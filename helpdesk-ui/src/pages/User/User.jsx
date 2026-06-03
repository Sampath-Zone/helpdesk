import { useState } from "react";

import Navbar from "../../components/Navbar";
import api from "../../api/axiosConfig";

function User() {

    const [name,
        setName] =
        useState("");

    const [email,
        setEmail] =
        useState("");

    const [password,
        setPassword] =
        useState("");

    const [role,
        setRole] =
        useState("SUPPORT_AGENT");

    const createUser =
        async () => {

            if (
                !name.trim() ||
                !email.trim() ||
                !password.trim()
            ) {

                alert(
                    "All fields required"
                );

                return;
            }

            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (
                !emailRegex.test(email)
            ) {

                alert(
                    "Enter valid email"
                );

                return;
            }

            if (
                password.length < 6
            ) {

                alert(
                    "Password must be at least 6 characters"
                );

                return;
            }

            try {

                await api.post(
                    "/api/users",
                    {
                        name,
                        email,
                        password,
                        role
                    }
                );

                alert(
                    "User Created Successfully"
                );

                setName("");
                setEmail("");
                setPassword("");
                setRole(
                    "SUPPORT_AGENT"
                );

            } catch (error) {

                console.log(error);

                alert(
                    "Failed To Create User"
                );
            }
        };

    return (

        <>
            <Navbar />

            <div className="page-container">

                <h1 className="page-title">
                    User Management
                </h1>

                <div className="form-card">

                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) =>
                            setName(
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) =>
                            setEmail(
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) =>
                            setPassword(
                                e.target.value
                            )
                        }
                    />

                    <select
                        value={role}
                        onChange={(e) =>
                            setRole(
                                e.target.value
                            )
                        }
                    >

                        <option value="SUPPORT_AGENT">
                            SUPPORT_AGENT
                        </option>

                        <option value="ADMIN">
                            ADMIN
                        </option>

                    </select>

                    <button
                        onClick={
                            createUser
                        }
                    >
                        Create User
                    </button>

                </div>

                <div
                    className="ticket-card"
                >

                    <h3>
                        👨‍💼 Admin Actions
                    </h3>

                    <p>
                        Create Support Agents
                        and Admin users
                        from this page.
                    </p>

                </div>

            </div>

        </>

    );
}

export default User;