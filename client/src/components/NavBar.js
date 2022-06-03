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
        <Link to="/login"><button><span class="material-icons text-2xl align-sub">person</span> LOGIN </button> </Link>
        :
        <button variant="outline" onClick={handleLogoutClick}><span class="material-icons text-2xl align-sub">person_off</span> LOGOUT 
</button>
        }
      </nav>
        <Link class="static text-slate-200 px-10 float-right" to="/mortgage" exact><span class="material-icons text-2xl align-sub">
real_estate_agent
</span>
MORTGAGE</Link>
        <Link class="static text-slate-200 px-10 float-right" to="/account" exact newHouse={newHouse}><span class="material-icons text-2xl align-sub">
manage_accounts
</span>
ACCOUNT</Link>
        {/* <Link class="static text-slate-200 px-10 float-right" to="/houseRenovationIdeas" exact>RENOVATION</Link> */}
        {/* <Link class="static text-slate-200 px-10 float-right"  exact to="/" >HOME</Link> */}
        <Link class="static text-slate-200 px-10 float-right"  exact to="/houses/new" ><span class="material-icons text-2xl align-sub">
home
</span> LIST A HOUSE</Link>
    </div>
  );
}

    export default NavBar;