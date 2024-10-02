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
                    <h4><NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="navbar-brand" to="/">B3ing_Sahil_007</NavLink></h4>
                </div>
                <nav className="navbar">
                    <div className="container-fluid">
                        <div>
                            <ul style={{ gap: '1rem' }} className="nav justify-content-end">
                                <li className="nav-item">
                                    <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link" to="/contact">Contact</NavLink>
                                </li>
                                {isLoggedIn ? (
                                    <>
                                        <li className="nav-item">
                                            <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link" to="/myprojects">My Projects</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link" to="/experience">Experience</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link" to="/services">Services</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link" to="/logout">Log Out</NavLink>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item">
                                            <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link" to="/registeration">Registeration</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink style={{ color: '#5479f7', textDecoration: 'none' }} className="nav-link" to="/login">Log In</NavLink>
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
        </>
    )
}

export default Navbar