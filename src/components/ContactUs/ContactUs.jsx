import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function ContactUs() {
    return (
        <section>
            <div className="contact_content">
                <Outlet />
            </div>
            <div className="contact_links">
                <NavLink className={({isActive})=>isActive?"custom_ative":""} to={""} end>Contact Us Form</NavLink>
                <NavLink className={({isActive})=>isActive?"custom_ative":""} to={"emails"}>Emails</NavLink>
                <NavLink className={({isActive})=>isActive?"custom_ative":""} to={"locations"}>Locations</NavLink>
                <NavLink className={({isActive})=>isActive?"custom_ative":""} to={"phone-number"}>Phone Number</NavLink>
            </div>
        </section>
    );
}
