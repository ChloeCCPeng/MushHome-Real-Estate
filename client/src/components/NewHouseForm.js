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
    <div class="mx-20">
      <h1 class="my-10 text-xl">{title}</h1>

        <div className="container">
          <form onSubmit={handleSubmit}>
              <div class="mb-2">
                  <label class="text-slate-400" >Image</label>
                  <input type="text" class="bg-transparent text-slate-300" id="photo" name="photo" autoComplete="on" onChange={handleChange}/>
              </div>
              <div class="mb-2">
                  <label class="text-slate-400" >Address</label>
                  <input required type="text" class="bg-transparent text-slate-300" id="street" name="street" autoComplete="on" onChange={handleChange}/>
              </div>
              <div class="mb-2">
                  <label class="text-slate-400">City</label>
                  <input required type="text" class="bg-transparent text-slate-300" id="city" name="city" autoComplete="on" onChange={handleChange}/>
              </div>
              <div class="mb-2">
                  <label class="text-slate-400">State</label>
                  <input required type="text" maxlength="2" class="bg-transparent text-slate-300" id="state" name="state" autoComplete="on" onChange={handleChange}/>
              </div>
              <div class="mb-2">
                  <label class="text-slate-400">Zip Code</label>
                  <input required type="text" maxlength="10" class="bg-transparent text-slate-300" id="postcde" name="postcde" autoComplete="on" onChange={handleChange}/>
              </div>
              <div class="mb-2">
                  <label class="text-slate-400">List Price</label>
                  <input required type="number" class="bg-transparent text-slate-300" id="listPrice" name="listPrice" autoComplete="on" onChange={handleChange}/>
              </div>
              <div class="mb-2">
                  <label class="text-slate-400">lot Size Acres</label>
                  <input type="number" class="bg-transparent text-slate-300" id="lotSizeAcres" name="lotSizeAcres" autoComplete="on" onChange={handleChange}/>
              </div>
              <div class="mb-2">
                  <label class="text-slate-400" >Bedrooms</label>
                  <input type="number" class="bg-transparent text-slate-300" id="bedroomsTotal" name="bedroomsTotal" autoComplete="on" onChange={handleChange}/>
              </div>
              <div class="mb-2">
                  <label class="text-slate-400">Bathroom</label>
                  <input type="number" class="bg-transparent text-slate-300" id="bathroomsTotal" name="bathroomsTotal" autoComplete="on" onChange={handleChange}/>
              </div>
              <div class="mb-2">
                  <label class="text-slate-400">Association Fee</label>
                  <input type="number" class="bg-transparent text-slate-300" id="associationFee" name="associationFee" autoComplete="on" onChange={handleChange}/>
              </div>
              <div class="mb-2">
                  <label class="text-slate-400">Fireplace</label>
                  <input type="number" class="bg-transparent text-slate-300" id="fireplacesTotal" name="fireplacesTotal" autoComplete="on" onChange={handleChange}/>
              </div>
              <div class="mb-2">
                  <label class="text-slate-400">Year Built</label>
                  <input type="number" maxlength="4" class="bg-transparent text-slate-300" id="yearBuilt" name="yearBuilt" autoComplete="on" onChange={handleChange}/>
              </div>
              <div class="mb-2">
                  <label class="text-slate-400">Flooring</label>
                  <input type="text" class="bg-transparent text-slate-300" id="flooring" name="flooring" autoComplete="on" onChange={handleChange}/>
              </div>
              <div class="mb-2">
                  <label class="text-slate-400">Roof</label>
                  <input type="text" class="bg-transparent text-slate-300" id="roof" name="roof" autoComplete="on" onChange={handleChange}/>
              </div>
              <button class="mt-7 ml-25 bg-yellow-400 text-black text-sm leading-6 font-medium py-2 px-3 rounded-xl fa-solid fa-arrow-right mb-20 hover:bg-yellow-600 duration-300 hover:scale-110" type="submit"  onChange={handleSubmit}>Submit</button>
              {/* <button class="mt-7 ml-25 bg-yellow-400 text-black text-sm leading-6 font-medium py-2 px-3 rounded-xl fa-solid fa-arrow-right mb-20" type="submit"  onChange={handleChange}>Delete</button> */}
          </form>
        </div>
    </div>
  )
}

export default NewHouseForm