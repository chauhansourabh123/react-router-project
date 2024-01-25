import React from "react";
import { Link, NavLink } from 'react-router-dom'


function Header() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <span className="text-danger fs-5 fw-bold">Your</span>
                        <span className="text-dark fs-5 fw-bold">Logo</span>
                    </Link>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><NavLink
                        to="/"
                        className={({ isActive }) => 
                            `${isActive ? "link-danger" : "link-dark"} fs-6 px-2 link-underline-light `
                        }>

                        Home
                    </NavLink>
                    </li>
                    <li><NavLink
                        to="/about"
                        className={({ isActive }) => 
                            `${isActive ? "link-danger" : "link-dark"} fs-6 px-2 link-underline-light `
                        }>

                        About
                    </NavLink>
                    </li>
                    <li><NavLink
                        to="/contact"
                        className={({ isActive }) => 
                            `${isActive ? "link-danger" : "link-dark"} fs-6 px-2 link-underline-light `
                        }>

                        Contact Us
                    </NavLink>
                    </li>
                    <li><NavLink
                        to="/github"
                        className={({ isActive }) => 
                            `${isActive ? "link-danger" : "link-dark"} fs-6 px-2 link-underline-light `
                        }>

                        Github
                    </NavLink>
                    </li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-light me-2">Login</button>
                    <button type="button" className="btn btn-danger">Get Started</button>
                </div>
            </header>
        </div>
    );
}

export default Header;