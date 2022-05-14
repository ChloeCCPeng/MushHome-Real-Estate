import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
import NewHouseForm from "./NewHouseForm";

function NavBar({ user, setUser, handleLoginClick, newHouse}) {

    let navigate = useNavigate();

    function handleLogoutClick() {
      fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
          setUser("");
          navigate("/")
      }
      });
  }

    return (
      <div class="sidebar">
      <br/>
        <nav class="static text-slate-200 px-8" >
        {!user ? 
        <Link to="/login"><button><span class="material-icons">person</span> LOGIN </button> </Link>
        :
        <button variant="outline" onClick={handleLogoutClick}><span class="material-icons">person_off</span> LOGOUT 
</button>
        }
      </nav>
        <Link class="static text-slate-200 px-10 float-right" to="/mortgage" exact>MORTGAGE</Link>
        <Link class="static text-slate-200 px-10 float-right" to="/account" exact newHouse={newHouse}>ACCOUNT</Link>
        {/* <Link class="static text-slate-200 px-10 float-right" to="/houseRenovationIdeas" exact>RENOVATION</Link> */}
        {/* <Link class="static text-slate-200 px-10 float-right"  exact to="/" >HOME</Link> */}
        <Link class="static text-slate-200 px-10 float-right"  exact to="/houses/new" >LIST A HOUSE!</Link>
    </div>
  );
}

    export default NavBar;