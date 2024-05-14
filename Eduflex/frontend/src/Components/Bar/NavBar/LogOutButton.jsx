import React, { useContext } from "react";
// Initialization for ES Users
import { Dropdown, Collapse, initMDB } from "mdb-ui-kit";
import { AuthContext } from "../../../Authentication/Checkcontext/AuthContext";
import { useNavigate } from "react-router-dom";
initMDB({ Dropdown, Collapse });

function LogOutButton() {
  const cusauth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    cusauth.logout(); // Call the logout function from the context
    navigate("/Login"); // Redirect to the login page after logout
  };

  return (
    <div>
        <div>
        <form class="d-flex">
            <button class="btn btn-primary" type="submit"  onClick={handleLogout}>Sign Out</button>
        </form>

        
    </div>
    </div>
  )
}

export default LogOutButton