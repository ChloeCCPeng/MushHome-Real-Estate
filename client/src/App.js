import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Account from "./components/Account";
import Listing from "./components/Listing";
import HouseMarketReport from "./components/HouseMarketReport";
import HouseDetail from "./components/HouseDetail";
import HouseRenovationIdeas from "./components/HouseRenovationIdeas";
import Tools from "./components/Tools";
import NewHouseForm from "./components/NewHouseForm";
import Mortgage from "./components/Mortgage";
import MyListing from "./components/MyListing";
import Presale from "./components/Presale";


function App() {
  const [list, setList] = useState ([])
  // const [state, setState] = useState([]);
  const [user, setUser] = useState("");
  const [houseToDisplay, setHouseToDisplay] = useState("")
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        navigate("/")
      };
    });
  }, []);

  useEffect(() => {
    setLoading (true)
    fetch("/houses")
    .then(res => res.json())
    .then(data => setList(data))
    // .then(data => console.log(data))
    .finally(() => setLoading (false))
  }, [])


  if (loading) {
    return <div class="ring">Loading<span class="ring-span"></span></div>
  }
  
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home setHouseToDisplay={setHouseToDisplay} list={list} setList={setList}/>}/> 
        <Route path="/login" element={<Login onLogin={setUser} />}/>
        {/* <Route path="/logout" element={<Logout onLogout={setUser} />}/> */}
        <Route path="/account" element={<Account /> }/>
        <Route path="/listing" element={<Listing /> }/>
        <Route path="/houseMarketReport" element={<HouseMarketReport /> }/>
        <Route path="/houseRenovationIdeas" element={<HouseRenovationIdeas /> }/>
        <Route path="/houses/:id" element={<HouseDetail houseToDisplay={houseToDisplay}/>}/>
        {/* <Route path="/tools" element={<Tools />}/> */}
        <Route path="/mortgage" element={<Mortgage />}/>
        <Route path="/houses/new" element={<NewHouseForm list={list} setList={setList}/>}/>
        {/* <Route path="/houses" element={<MyListing /> }/> */}
        {/* <Route path="/houses/:id/Edit" element={<MyListing /> }/> */}
        <Route path="/myListing" element={<MyListing /> }/>
        {/* <Route path="/search" element={<Search /> }/> */}
        <Route path="/presalefaq" element={<Presale />}/>
      </Routes>
    </>
  );
};
export default App;
