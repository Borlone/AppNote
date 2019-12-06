import React from "react";
import {Link} from "react-router-dom";

function NavLink(){
    return(
        <ul className="nav-bar">
            <li className="nav-item">
                <Link to="/list">Home</Link>
            </li>
            <li className="nav-item">
                <Link to="/new">New</Link>
            </li>
        </ul>
    )
}

export default NavLink;