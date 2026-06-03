import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate =
        useNavigate();

    const role =
        localStorage.getItem(
            "role"
        );

    const handleLogout =
        () => {

            localStorage.removeItem(
                "token"
            );

            localStorage.removeItem(
                "role"
            );

            navigate("/");
        };

    return (

        <nav className="navbar">

            <div className="navbar-logo">

                🎫 HelpDesk

            </div>

            <div className="navbar-links">

                {role === "ADMIN" && (

                    <>

                        <Link to="/dashboard">
                            Dashboard
                        </Link>

                        <Link to="/categories">
                            Categories
                        </Link>

                        <Link to="/tickets">
                            Tickets
                        </Link>

                        <Link to="/tenants">
                            Tenants
                        </Link>

                        <Link to="/feedback">
                            Feedback
                        </Link>

                        <Link to="/users">
                            Users
                        </Link>

                    </>

                )}

                {role === "TENANT" && (

                    <>

                        <Link to="/dashboard">
                            Dashboard
                        </Link>

                        <Link to="/tickets">
                            Tickets
                        </Link>

                        <Link to="/my-tickets">
                            My Tickets
                        </Link>

                        <Link to="/feedback">
                            Feedback
                        </Link>

                    </>

                )}

                {role === "SUPPORT_AGENT" && (

                    <>

                        <Link to="/dashboard">
                            Dashboard
                        </Link>

                        <Link to="/my-tickets">
                            My Tickets
                        </Link>

                    </>

                )}

            </div>

            <button
                className="logout-btn"
                onClick={
                    handleLogout
                }
            >
                Logout
            </button>

        </nav>

    );
}

export default Navbar;