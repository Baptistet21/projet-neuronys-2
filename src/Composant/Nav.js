import React from "react";
import "./Nav.css"
import {Link} from "react-router-dom";

const Nav = () =>{
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/reclamation" >
                        Reclamation
                    </Link>
                </li>
                <li >
                    <Link to="/rattachement" >
                        Rattachement
                    </Link>
                </li>
            </ul>
        </nav>
    )
}


export default Nav;