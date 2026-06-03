import { useEffect, useState } from "react";
import { getDashboard } from "../../services/dashboardService";
import Navbar from "../../components/Navbar";

function Dashboard() {

    const [dashboard,
        setDashboard] = useState(null);

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const response =
                await getDashboard();

            setDashboard(response);

        } catch (error) {

            console.log(error);
        }
    };

    if (!dashboard) {

        return (
            <>
                <Navbar />
                <h2>Loading...</h2>
            </>
        );
    }

    return (

    <>
        <Navbar />

        <div className="page-container">

            <h1 className="page-title">
                Dashboard
            </h1>

            <div className="dashboard-grid">

                <div className="stat-card">
                    <h2>
                        {dashboard.totalTickets}
                    </h2>

                    <p>
                        Total Tickets
                    </p>
                </div>

                <div className="stat-card">
                    <h2>
                        {dashboard.openTickets}
                    </h2>

                    <p>
                        Open Tickets
                    </p>
                </div>

                <div className="stat-card">
                    <h2>
                        {dashboard.closedTickets}
                    </h2>

                    <p>
                        Closed Tickets
                    </p>
                </div>

                <div className="stat-card">
                    <h2>
                        {dashboard.resolvedTickets}
                    </h2>

                    <p>
                        Resolved Tickets
                    </p>
                </div>

            </div>

        </div>

    </>

);
}

export default Dashboard;