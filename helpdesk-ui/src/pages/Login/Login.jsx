import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";

function Login() {

    const [email,
        setEmail] =
        useState("");

    const [password,
        setPassword] =
        useState("");

    const navigate =
        useNavigate();

    const handleLogin =
        async () => {

            if (
                !email.trim() ||
                !password.trim()
            ) {

                alert(
                    "Email and Password are required"
                );

                return;
            }

            try {

                const response =
                    await login({

                        email,
                        password

                    });

                localStorage.setItem(
                    "token",
                    response.token
                );

                localStorage.setItem(
                    "role",
                    response.role
                );

                navigate(
                    "/dashboard"
                );

            } catch (error) {

                alert(
                    "Invalid Credentials"
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
                    Login
                </h3>

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

                <button
                    onClick={
                        handleLogin
                    }
                >
                    Login
                </button>

                <button
                    className="secondary-btn"
                    onClick={() =>
                        navigate(
                            "/register"
                        )
                    }
                >
                    Create Account
                </button>

            </div>

        </div>

    );
}

export default Login;