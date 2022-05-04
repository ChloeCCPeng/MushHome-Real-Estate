import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Account from "./components/Account";
import Listing from "./components/Listing";
import HouseMarketReport from "./components/HouseMarketReport";
import { useNavigate } from "react-router-dom";
// import Search from "./components/Search";
// import './App.css';

function App() {
  // const [state, setState] = useState([]);
  const [user, setUser] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        navigate("/")
      };
    });
  }, []);


  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}/> 
        <Route path="/login" element={<Login onLogin={setUser} />}/>
        {/* <Route path="/logout" element={<Logout onLogout={setUser} />}/> */}
        <Route path="/account" element={<Account /> }/>
        <Route path="/listing" element={<Listing /> }/>
        <Route path="/houseMarketReport" element={<HouseMarketReport /> }/>
        {/* <Route path="/search" element={<Search /> }/> */}
      </Routes>
    </>
  );
};
export default App;
