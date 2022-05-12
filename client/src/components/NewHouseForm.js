import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Outlet } from "react-router-dom";

function NewHouseForm({list,setList}) {

  console.log(list)

  const [isEdit, setIsEdit] = useState(false);
  const [houses, setHouses] = useState([]);
  // const [myHouses, setMyHouses] = useState([])
  const [formData, setFormData] = useState({
      street: "",
      city: "",
      state: "",
      postcde: "",
      listPrice: 0,
      house_id: 1
  });

  const navigate = useNavigate();
  // const outlet = Outlet();
  const { id } = useParams();


// const houseList = houses.map(house => {
//   return <option key={house.id} value={house.id}>{house.name}</option>
// })

// Create conditional title
const title = isEdit ? "Edit Your Listing" : "List a New House"

//Create conditional submit button text
// const submit = isEdit ? "Update Listing" : "Add to Market"

//Create conditional delete button
// const deleteButton = isEdit ? <button  type="button" onClick={handleDelete}>Delete</button> : null

function handleChange(e) {
  setFormData({
      ...formData,
      [e.target.name]: e.target.value
  })
}

function handleSubmit(e) {
  console.log(formData)
  e.preventDefault()
  fetch("/houses/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  // .then(data => console.log(data))
  .then(data => {
    setList([...list, data])
    navigate("/")
  })
  // console.log(houses)
  // .finally(() => setLoading (false))
}
//   if (outlet.path === "/houses/:id/Edit") {
//       fetch(`http://localhost:3000/houses/edit/${id}`, {
//           method: "PATCH",
//           headers: {
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//       })
//           .then((r) => r.json())
//           .then(data => navigate("/"));
//   } else {
//       fetch("http://localhost:3000/houses/new", {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData)
//       })
//           .then((r) => r.json())
//           .then(data => navigate("/"));
//   }
// }

function handleDelete(e) {
  fetch(`http://localhost:3000/houses/${id}`, {
      method: "DELETE",
  })
      .then((r) => r.json())
      .then((deletedHouse) => navigate("/"));
}


  return (
    <div>
      <h1>{title}</h1>

        <div className="container">
          <form onSubmit={handleSubmit}>
              <div>
                  <label class="text-slate-400" >Address</label>
                  <input required type="text" class="bg-transparent" id="street" name="street" autoComplete="on" onChange={handleChange}/>
              </div>
              <div>
                  <label class="text-slate-400">City</label>
                  <input required type="text" class="bg-transparent" id="city" name="city" autoComplete="on" onChange={handleChange}/>
              </div>
              <div>
                  <label class="text-slate-400">State</label>
                  <input required type="text" class="bg-transparent" id="state" name="state" autoComplete="on" onChange={handleChange}/>
              </div>
              <div>
                  <label class="text-slate-400">List Price</label>
                  <input required type="text" class="bg-transparent" id="listPrice" name="listPrice" autoComplete="on" onChange={handleChange}/>
              </div>
              {/* <div>
                  <label class="text-slate-400">lot Size Acres</label>
                  <input required type="email" class="bg-transparent" id="lotSizeAcres" name="lotSizeAcres" autoComplete="on" onChange={handleChange}/>
              </div>
              <div>
                  <label class="text-slate-400" >Bedrooms</label>
                  <input required type="text" class="bg-transparent" id="bedroomsTotal" name="bedroomsTotal" autoComplete="on" onChange={handleChange}/>
              </div>
              <div>
                  <label class="text-slate-400">City</label>
                  <input required type="text" class="bg-transparent" id="city" name="city" autoComplete="on" onChange={handleChange}/>
              </div>
              <div>
                  <label class="text-slate-400">State</label>
                  <input required type="text" class="bg-transparent" id="state" name="state" autoComplete="on" onChange={handleChange}/>
              </div>
              <div>
                  <label class="text-slate-400">List Price</label>
                  <input required type="text" class="bg-transparent" id="listPrice" name="listPrice" autoComplete="on" onChange={handleChange}/>
              </div>
              <div>
                  <label class="text-slate-400">Email</label>
                  <input required type="email" class="bg-transparent" id="listPrice" name="listPrice" autoComplete="on" onChange={handleChange}/>
              </div> */}
              <button class="text-slate-400 btn btn-primary btn-block" type="submit"  onChange={handleSubmit}>Submit</button>
              <button class="text-slate-400 btn btn-primary btn-block" type="submit"  onChange={handleChange}>Delete</button>
          </form>
        </div>
    </div>
  )
}

export default NewHouseForm



// import React, {useEffect, useState} from 'react'
// import { useNavigate, useParams, useRouteMatch } from "react-router-dom";
// import { NavLink } from "react-router-dom";

//     useEffect(() => {
//         fetch("http://localhost:4008/categories")
//             .then(r => r.json())
//             .then(data => setCategories(data))
//     }, [])

//     useEffect(() => {
//         if (match.path === "/FoodForm/:id/Edit") {
//             fetch(`http://localhost:4008/foods/${id}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     setFormData(data)
//                     setIsEdit(true);
//                 })
//         }
//     }, [categories])
    

// function NewHouseForm() {

//   const [isEdit, setIsEdit] = useState(false);
//   const [houses, setHouses] = useState([]);
//   const [formData, setFormData] = useState({
//       address: "",
//       city: "",
//       state: "",
//       postcde: "",
//       listPrice: ""
//   });

//   const [submitting, setSubmitting] = useState(false);
//   const history = useHistory();
//   const match = useRouteMatch();
//   const { id } = useParams();

//   // const handleSubmit = event => {
//   //   event.preventDefault();
//   // setSubmitting(true);

//   // setTimeout(() => {
//   //   setSubmitting(false);›
//   // }, 3000)
//   // }

// function handleSubmit (e) {
//   e.preventDefault();
//   console.log('submit');
//   fetch('http://localhost:3000/houses', {
//     method: 'POST',
//     headers: {"Content-Type" : "application/json"}
//   })
//   .then(res => res.json())
//   .then((house)=> setSubmitting (house))
// };


// const handleChange =(e) => {
//   e.preventDefault();
//   console.log('change');
// }


// import React, { useEffect, useState } from "react";
// import { useHistory, useParams, useRouteMatch } from "react-router-dom";
// import Navbar from "./Navbar"
// import { NavLink } from "react-router-dom";


// function NewForm() {
//     const [isEdit, setIsEdit] = useState(false);
//     const [categories, setCategories] = useState([]);
//     const [formData, setFormData] = useState({
//         name: "",
//         price: 0,
//         category_id: 1,
//         description: ""
//     });

//     const history = useHistory();
//     const match = useRouteMatch();
//     const { id } = useParams();

//     useEffect(() => {
//         fetch("http://localhost:4008/categories")
//             .then(r => r.json())
//             .then(data => setCategories(data))
//     }, [])

//     useEffect(() => {
//         if (match.path === "/FoodForm/:id/Edit") {
//             fetch(`http://localhost:4008/foods/${id}`)
//                 .then(res => res.json())
//                 .then(data => {
//                     setFormData(data)
//                     setIsEdit(true);
//                 })
//         }
//     }, [categories])

//     const categoryList = categories.map(category => {
//         return <option key={category.id} value={category.id}>{category.name}</option>
//     })

//     // Create conditional title
//     const title = isEdit ? "Edit Menu Item" : "Add New Menu Item"

//     //Create conditional submit button text
//     const submit = isEdit ? "Update Item" : "Add to Menu"
    
//     //Create conditional delete button
//     const deleteButton = isEdit ? <button className="bg-gray-50 backdrop-blur-lg bg-opacity-30 text-black font-bold py-2 px-4 border-b-4 hover:scale-110 rounded-full" type="button" onClick={handleDelete}>Delete</button> : null

//     function handleChange(e) {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         })
//     }

//     function handleSubmit(e) {
//         e.preventDefault()
//         if (match.path === "/FoodForm/:id/Edit") {
//             fetch(`http://localhost:4008/foods/edit/${id}`, {
//                 method: "PATCH",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(formData),
//             })
//                 .then((r) => r.json())
//                 .then(data => history.push("/menu"));
//         } else {
//             fetch("http://localhost:4008/foods/new", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(formData)
//             })
//                 .then((r) => r.json())
//                 .then(data => history.push("/menu"));
//         }
//     }

//     function handleDelete(e) {
//         fetch(`http://localhost:4008/foods/${id}`, {
//             method: "DELETE",
//         })
//             .then((r) => r.json())
//             .then((deletedFood) => history.push("/menu"));
//     }

    
//   return (
//     <div>
//       <h1>List a House</h1>
//         <div className="container">
//         {submitting &&
//        <div>Listing a House...</div>
//      }
//           <form onSubmit={handleSubmit}>
//               <div>
//                   <label class="text-slate-400" >Address</label>
//                   <input type="text" class="bg-transparent" id="address" name="address" autoComplete="on" onChange={handleChange}/>
//               </div>
//               <div>
//                   <label class="text-slate-400">City</label>
//                   <input type="text" class="bg-transparent" id="city" name="city" autoComplete="on" onChange={handleChange}/>
//               </div>
//               <div>
//                   <label class="text-slate-400">State</label>
//                   <input type="text" class="bg-transparent" id="state" name="state" autoComplete="on" onChange={handleChange}/>
//               </div>
//               <div>
//                   <label class="text-slate-400">List Price</label>
//                   <input type="text" class="bg-transparent" id="listPrice" name="listPrice" autoComplete="on" onChange={handleChange}/>
//               </div>
//               <div>
//                   <label class="text-slate-400">Email</label>
//                   <input type="email" class="bg-transparent" id="listPrice" name="listPrice" autoComplete="on" onChange={handleChange}/>
//               </div>
//               <button class="text-slate-400 btn btn-primary btn-block" type="submit"  onChange={handleChange}>List</button>
//           </form>
//         </div>
//     </div>
//   )
// }

// export default NewHouseForm