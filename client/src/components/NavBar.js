import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from 'react';
// import { UserContext } from './UserContext';

function NavBar({ user, setUser, handleLoginClick}) {

  console.log (user);
    // const history = useHistory();
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
      <div>
        <nav>
        {!user ? 
        <button as={Link} exact to="/login" onClick={handleLoginClick} >Login</button> 
        :
        <button variant="outline" onClick={handleLogoutClick}> Logout</button>
        }
      </nav>
        <Link exact to="/" >home</Link>
        <Link to="/account" exact>Account</Link>
  

    </div>
  );
}

    export default NavBar;