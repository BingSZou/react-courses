import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    const activeStyle = {color: "#f1502a" };
    return (
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>
            { "  |  "}
            <NavLink to="/about" activeStyle={activeStyle}>about</NavLink>
            { "  |  "}
            <NavLink to="/courses" activeStyle={activeStyle}>courses</NavLink>
        </nav>
    );
}

export default Header
