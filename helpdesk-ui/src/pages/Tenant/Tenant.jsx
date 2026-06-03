import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar";

import {
    getTenants,
    createTenant
} from "../../services/tenantService";

function Tenant() {

    const [tenants,
        setTenants] =
        useState([]);

    const [tenantName,
        setTenantName] =
        useState("");

    const [contactPerson,
        setContactPerson] =
        useState("");

    const [email,
        setEmail] =
        useState("");

    const [phone,
        setPhone] =
        useState("");

    useEffect(() => {

        loadTenants();

    }, []);

    const loadTenants =
        async () => {

            try {

                const response =
                    await getTenants();

                setTenants(
                    response
                );

            } catch (error) {

                console.log(error);
            }
        };

    const handleCreate =
        async () => {

            if (
                !tenantName.trim() ||
                !contactPerson.trim() ||
                !email.trim() ||
                !phone.trim()
            ) {

                alert(
                    "Fill all fields"
                );

                return;
            }

            try {

                await createTenant({

                    tenantName,
                    contactPerson,
                    email,
                    phone

                });

                setTenantName("");
                setContactPerson("");
                setEmail("");
                setPhone("");

                loadTenants();

                alert(
                    "Tenant Created"
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
                    Tenant Management
                </h1>

                <div className="form-card">

                    <input
                        type="text"
                        placeholder="Tenant Name"
                        value={tenantName}
                        onChange={(e) =>
                            setTenantName(
                                e.target.value
                            )
                        }
                    />

                    <input
                        type="text"
                        placeholder="Contact Person"
                        value={contactPerson}
                        onChange={(e) =>
                            setContactPerson(
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
                        type="text"
                        placeholder="Phone"
                        value={phone}
                        onChange={(e) =>
                            setPhone(
                                e.target.value
                            )
                        }
                    />

                    <button
                        onClick={
                            handleCreate
                        }
                    >
                        Create Tenant
                    </button>

                </div>

                <h2
                    style={{
                        marginBottom:
                        "20px"
                    }}
                >
                    Tenant List
                </h2>

                {tenants.map(tenant => (

                    <div
                        key={tenant.id}
                        className="ticket-card"
                    >

                        <h3>
                            🏢 {tenant.tenantName}
                        </h3>

                        <p>
                            <strong>
                                Contact:
                            </strong>
                            {" "}
                            {tenant.contactPerson}
                        </p>

                        <p>
                            <strong>
                                Email:
                            </strong>
                            {" "}
                            {tenant.email}
                        </p>

                        <p>
                            <strong>
                                Phone:
                            </strong>
                            {" "}
                            {tenant.phone}
                        </p>

                    </div>

                ))}

            </div>

        </>

    );
}

export default Tenant;