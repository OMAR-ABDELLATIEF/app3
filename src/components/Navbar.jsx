import React from "react";
import "../style/navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
export default function Navbar() {
    const navigate = useNavigate();
    function loginNavigate() {
        navigate("/login");
    }
    return (
        <nav className="navbar">
            <h1>Logo</h1>
            <div className="navbar_menu">
                <ul>
                    <NavLink className={({isActive})=>isActive?"custom_ative shaban":""} to={"/"}>Home</NavLink>
                    <NavLink className={({isActive})=>isActive?"custom_ative":""} to={"/about"}>About</NavLink>
                    <NavLink className={({isActive})=>isActive?"custom_ative":""} to={"/service"}>Service</NavLink>
                    <NavLink className={({isActive})=>isActive?"custom_ative":""} to={"/contact"}>Contact us</NavLink>
                </ul>
            </div>
            <button onClick={loginNavigate}>Login</button>
        </nav>
    );
}
