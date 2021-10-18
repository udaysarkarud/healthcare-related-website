import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import useAuthContext from '../../hook/useAuthContext';

const Header = () => {
    const { userProfile, handelSignOut } = useAuthContext()
    return (
        <header>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src="images/logo.png" alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li className="nav-item">
                                    <NavLink to="/home" className="nav-link">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink to="/home#about" className="nav-link">About</HashLink>
                                </li>

                                <li className="nav-item">
                                    <HashLink to="/home#services" className="nav-link">Services</HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink to="/home#doctorsteam" className="nav-link">Our Doctors</HashLink>
                                </li>
                                <li className="nav-item">
                                    <HashLink to="/home#blog" className="nav-link">Blog</HashLink>
                                </li>

                                <li className="nav-item">
                                    <HashLink to="/home#contact" className="nav-link">Contact</HashLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/appointment" className="nav-link">APPOINTMENT</NavLink>
                                </li>
                            </ul>
                            <div>
                                {
                                    !userProfile?.email ? <NavLink to="/login" className="btn btn-outline-light">Log in / Register</NavLink> : <button className="btn btn-outline-danger" onClick={handelSignOut}>Log out</button>
                                }
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;