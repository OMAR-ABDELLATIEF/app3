import React from "react";
import HomePage from "./components/homePage/HomePage";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AboutPage from "./components/aboutPage/AboutPage";
import ContactUs from "./components/ContactUs/ContactUs";
import LoginPage from "./components/loginPage/LoginPage";
import ServicePage from "./components/servicePage/servicePage";

export default function App() {
    const Routing = createBrowserRouter([
        {
            path: "",
            element: <Layout />,
            // errorElement: <h1>404 Not Found</h1>,
            children: [
                { path: "", element: <HomePage />  },
                { path: "about", element: <AboutPage /> },
                {path:"service" , element:<ServicePage/>},
                {
                    path: "contact", element: <ContactUs />, children: [
                    {index:true , element:<h1>Contact Us Form</h1>},
                    {path:"emails" , element:<h1>Emails</h1>},
                    {path:"locations" , element:<h1>Locations</h1>},
                    {path:"phone-number" , element:<h1>Phone Number</h1>},
                    ]
                },
                {path:"*" , element:<section><h1>Not Found Page</h1></section>}
            ],
        },
        {
            path: "login",
            element:<LoginPage/>
        }
    ]);
    return <RouterProvider router={Routing} />;
}
