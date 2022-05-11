import React, { useEffect, useState } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router-dom";
import Navbar from "./Navbar"
import { NavLink } from "react-router-dom";


function NewForm() {
    const [isEdit, setIsEdit] = useState(false);
    const [categories, setCategories] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        price: 0,
        category_id: 1,
        description: ""
    });

    const history = useHistory();
    const match = useRouteMatch();
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:4008/categories")
            .then(r => r.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        if (match.path === "/FoodForm/:id/Edit") {
            fetch(`http://localhost:4008/foods/${id}`)
                .then(res => res.json())
                .then(data => {
                    setFormData(data)
                    setIsEdit(true);
                })
        }
    }, [categories])

    const categoryList = categories.map(category => {
        return <option key={category.id} value={category.id}>{category.name}</option>
    })

    // Create conditional title
    const title = isEdit ? "Edit Menu Item" : "Add New Menu Item"

    //Create conditional submit button text
    const submit = isEdit ? "Update Item" : "Add to Menu"
    
    //Create conditional delete button
    const deleteButton = isEdit ? <button className="bg-gray-50 backdrop-blur-lg bg-opacity-30 text-black font-bold py-2 px-4 border-b-4 hover:scale-110 rounded-full" type="button" onClick={handleDelete}>Delete</button> : null

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (match.path === "/FoodForm/:id/Edit") {
            fetch(`http://localhost:4008/foods/edit/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then((r) => r.json())
                .then(data => history.push("/menu"));
        } else {
            fetch("http://localhost:4008/foods/new", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData)
            })
                .then((r) => r.json())
                .then(data => history.push("/menu"));
        }
    }

    function handleDelete(e) {
        fetch(`http://localhost:4008/foods/${id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then((deletedFood) => history.push("/menu"));
    }


    return (
        <div id="entry-form" className="mt-0 drop-shadow-2xl mx-auto w-screen lg:px-24 bg-opacity-50 flex flex-col justify-center items-center h-screen">
            <h1 className='text-[30px] text-center'>
                {title}
            </h1>
            <br />
            <form id="new-entry-form" onSubmit={handleSubmit}>
                <div className="bg-white backdrop-blur-lg bg-opacity-60 shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm ">
                    <div className="-mx-3 mb-2 flex-wrap place-content-center">
                        <div className="px-3 mb-6 md:mb-0">
                            <label className="uppercase tracking-wide text-black text-sm font-bold mb-2" for="company">
                                Item Name:
                            </label>
                            <input
                                className="w-full bg-gray-50 backdrop-blur-lg bg-opacity-30  text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company"
                                type="text"
                                name="name"
                                placeholder="Enter new item's name..."
                                value={formData.name}
                                maxLength="30"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="px-3">
                            <label className="uppercase tracking-wide text-black text-sm font-bold mb-2" for="title">
                                price:
                            </label>
                            <input
                                className="w-full bg-gray-50 backdrop-blur-lg bg-opacity-30 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                type="number"
                                name="price"
                                placeholder="Enter new item's price..."
                                value={formData.price}
                                maxLength="3"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <label className="uppercase tracking-wide text-black text-sm font-bold mb-2">
                        Category:
                        <select className="w-full bg-gray-50 backdrop-blur-lg bg-opacity-30 border border-gray-200 text-black text-sm py-3 px-4 pr-8 mb-3 rounded" id="drop-down" name="category_id" value={formData.category_id} onChange={handleChange} >
                            <option value=''>Select a Category</option>
                            {categoryList}
                        </select>
                    </label>
                    <div className="-mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className=" uppercase tracking-wide text-black text-sm font-bold mb-2" for="application-link">
                                Description:
                            </label>
                            <textarea
                                className="h-32 w-full bg-gray-50 backdrop-blur-lg bg-opacity-30 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                                type="text"
                                name="description"
                                placeholder="Enter a decription"
                                value={formData.description}
                                maxLength="200"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="-mx-3 mt-2 flex-wrap place-content-center">
                        <div className="flex place-content-center px-3 gap-10">
                            <button className="bg-gray-50 backdrop-blur-lg bg-opacity-30 text-black font-bold py-2 px-4 border-b-4 hover:scale-110 rounded-full" type="submit">{submit}</button>

                            {deleteButton}
                        </div>
                    </div>
 

                </div>
            </form>
        </div>
    )
}

export default NewForm