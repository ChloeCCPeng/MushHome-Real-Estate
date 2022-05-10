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
        <nav class="static text-slate-200 px-8" >
        {!user ? 
        <button as={Link} path="/login" onClick={handleLoginClick} >LOGIN</button> 
        :
        <button variant="outline" onClick={handleLogoutClick}> LOGOUT</button>
        }
      </nav>
        <Link class="static text-slate-200 px-10 float-right" to="/tools" exact>TOOLS</Link>
        <Link class="static text-slate-200 px-10 float-right" to="/account" exact>ACCOUNT</Link>
        <Link class="static text-slate-200 px-10 float-right" to="/houseRenovationIdeas" exact>RENOVATION</Link>
        <Link class="static text-slate-200 px-10 float-right"  exact to="/" >HOME</Link>
    </div>
  );
}

    export default NavBar;