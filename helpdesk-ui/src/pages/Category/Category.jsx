import { useEffect, useState } from "react";

import {
    getCategories,
    createCategory
} from "../../services/categoryService";

import Navbar from "../../components/Navbar";

function Category() {

    const [categories,
        setCategories] =
        useState([]);

    const [name,
        setName] =
        useState("");

    const [description,
        setDescription] =
        useState("");

    useEffect(() => {

        loadCategories();

    }, []);

    const loadCategories =
        async () => {

            try {

                const response =
                    await getCategories();

                setCategories(
                    response
                );

            } catch (error) {

                console.log(error);
            }
        };

    const handleCreate =
        async () => {

            if (
                !name.trim() ||
                !description.trim()
            ) {

                alert(
                    "Fill all fields"
                );

                return;
            }

            try {

                await createCategory({

                    name,
                    description

                });

                setName("");
                setDescription("");

                loadCategories();

                alert(
                    "Category Added"
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
                    Category Management
                </h1>

                <div className="form-card">

                    <input
                        type="text"
                        placeholder="Category Name"
                        value={name}
                        onChange={(e) =>
                            setName(
                                e.target.value
                            )
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

                    <button
                        onClick={
                            handleCreate
                        }
                    >
                        Add Category
                    </button>

                </div>

                <h2
                    style={{
                        marginBottom:
                        "20px"
                    }}
                >
                    Categories
                </h2>

                {categories.map(category => (

                    <div
                        key={category.id}
                        className="ticket-card"
                    >

                        <h3>
                            📂 {category.name}
                        </h3>

                        <p>
                            {category.description}
                        </p>

                    </div>

                ))}

            </div>

        </>

    );
}

export default Category;