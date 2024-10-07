import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../store/auth'

const Navbar = () => {
    const { isLoggedIn } = useAuth()
    // console.log("Login Or Not", isLoggedIn);

    return (
        <>
            <div style={{ maxWidth: '140rem' }} className="container mt-3 d-flex justify-content-between">
                <div className="logo-brand mt-2">
                    <h4><NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="navbar-brand custom-shadow" to={isLoggedIn ? "/home" : "/login"}>B3ing_Sahil_007</NavLink></h4>
                </div>
                <nav className="navbar">
                    <div className="container-fluid">
                        <div>
                            <ul style={{ gap: '1rem' }} className="nav justify-content-end">
                                {isLoggedIn ? (
                                    <>
                                        <li className="nav-item">
                                            <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link custom-shadow" to="/home">Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link custom-shadow" to="/about">About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link custom-shadow" to="/contact">Contact</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link custom-shadow" to="/myprojects">My Projects</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link custom-shadow" to="/experience">Experience</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link custom-shadow" to="/services">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link custom-shadow" to="/logout">Log Out</NavLink>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link custom-shadow" to="/">Registeration</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link custom-shadow" to="/login">Log In</NavLink>
                                        </li>
                                    </>
                                )}
                                {/* <li className="nav-item">
                                    <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link" to="/error">Error 404</NavLink>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <style>{`
                .custom-shadow {
                    transition: text-shadow 0.4s ease;
                }
                .custom-shadow:hover {
                    text-shadow: 2px 2px 5px grey;
                }

                /* Responsive Styles */
                @media (max-width: 1024px) {
                ul {
                    gap: 0rem !important;
                }
                }
            `}</style>
        </>
    )
}

export default Navbar