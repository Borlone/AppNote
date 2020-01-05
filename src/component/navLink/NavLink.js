import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavLink extends Component{
    render(){
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
}

export default NavLink;