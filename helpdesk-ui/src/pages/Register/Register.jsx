import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { register }
from "../../services/authService";

function Register() {

    const [name,
        setName] =
        useState("");

    const [email,
        setEmail] =
        useState("");

    const [password,
        setPassword] =
        useState("");

    const role =
        "TENANT";

    const navigate =
        useNavigate();

    const handleRegister =
        async () => {

            if (
                !name.trim() ||
                !email.trim() ||
                !password.trim()
            ) {

                alert(
                    "All fields are required"
                );

                return;
            }

            const emailRegex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (
                !emailRegex.test(
                    email
                )
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

                await register({

                    name,
                    email,
                    password,
                    role

                });

                alert(
                    "Registration Successful"
                );

                navigate("/");

            } catch (error) {

                console.log(error);

                alert(
                    "Registration Failed"
                );
            }
        };

    return (

        <div
            className="auth-container"
        >

            <div
                className="auth-card"
            >

                <h2>
                    🎫 HelpDesk
                </h2>

                <h3>
                    Create Account
                </h3>

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
                    placeholder="Email"
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

                <input
                    type="text"
                    value="TENANT"
                    readOnly
                />

                <button
                    onClick={
                        handleRegister
                    }
                >
                    Register
                </button>

                <button
                    className="secondary-btn"
                    onClick={() =>
                        navigate("/")
                    }
                >
                    Back To Login
                </button>

            </div>

        </div>
    );
}

export default Register;