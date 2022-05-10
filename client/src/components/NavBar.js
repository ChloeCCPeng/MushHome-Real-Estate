import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';

function NavBar({ user, setUser, handleLoginClick}) {

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
        <button as={Link} path="/login" onClick={handleLoginClick} ><span class="material-icons">
account_circle
</span></button> 
        :
        <button variant="outline" onClick={handleLogoutClick}> <span class="material-icons">
account_circle
</span></button>
        }
      </nav>
        <Link class="static text-slate-200 px-10 float-right" to="/tools" exact>TOOLS</Link>
        <Link class="static text-slate-200 px-10 float-right" to="/account" exact>ACCOUNT</Link>
        {/* <Link class="static text-slate-200 px-10 float-right" to="/houseRenovationIdeas" exact>RENOVATION</Link> */}
        <Link class="static text-slate-200 px-10 float-right"  exact to="/" >HOME</Link>
    </div>
  );
}

    export default NavBar;

    // <button class="bg-yellow-400 text-black text-sm leading-6 font-medium py-2 px-3 rounded-lg" onDelete={handleDelete} ><i class="material-icons">
    // highlight_off 
    // </i> Sold! Delete from the Market </button> 