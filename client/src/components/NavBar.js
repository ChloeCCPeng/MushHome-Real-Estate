import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function NavBar({ user, setUser}) {
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
        <Link to="/" exact>home</Link>
        <nav>
        {!user ? 
        <button as={Link} to="/login" exact>Login</button> 
        :
          <button variant="outline" onClick={handleLogoutClick}>
          Logout
          </button>
        }
      </nav>
        <Link to="/account" exact>Account</Link>
    </div>
  );
}

    export default NavBar;