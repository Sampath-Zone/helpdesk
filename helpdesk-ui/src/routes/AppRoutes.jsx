import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Dashboard from "../pages/Dashboard/Dashboard";
import Category from "../pages/Category/Category";
import Ticket from "../pages/Ticket/Ticket";
import Feedback from "../pages/Feedback/Feedback";
import Tenant from "../pages/Tenant/Tenant";
import MyTickets from "../pages/MyTickets/MyTickets";
import User from "../pages/User/User";

import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/categories"
                    element={
                        <ProtectedRoute>
                            <Category />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/tickets"
                    element={
                        <ProtectedRoute>
                            <Ticket />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/feedback"
                    element={
                        <ProtectedRoute>
                            <Feedback />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/tenants"
                    element={
                        <ProtectedRoute>
                            <Tenant />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/my-tickets"
                    element={
                        <ProtectedRoute>
                            <MyTickets />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/users"
                    element={
                        <ProtectedRoute>
                            <User />
                        </ProtectedRoute>
                    }
                />

            </Routes>

        </BrowserRouter>

    );
}

export default AppRoutes;