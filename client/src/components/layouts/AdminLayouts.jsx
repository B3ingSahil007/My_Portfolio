import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { GrServices } from "react-icons/gr";

const AdminLayouts = () => {
    return (
        <>
            <div className="row mt-3">
                <div className="col-md-3">
                    <ul>
                        <NavLink style={{ color: '#5479f7', textDecoration: 'none', width: '60%' }} className="nav-link custom-shadow mb-3" to="/admin">
                            <FaHome className='mb-1' /> Home
                        </NavLink>
                        <NavLink style={{ color: '#5479f7', textDecoration: 'none', width: '60%' }} className="nav-link custom-shadow mb-3" to="/admin/allusers">
                            <FaUsers className='mb-1' /> Users
                        </NavLink>
                        <NavLink style={{ color: '#5479f7', textDecoration: 'none', width: '60%' }} className="nav-link custom-shadow mb-3" to="/admin/allcontacts">
                            <AiFillMessage className='mb-1' /> Contacts
                        </NavLink>
                        <NavLink style={{ color: '#5479f7', textDecoration: 'none', width: '60%' }} className="nav-link custom-shadow mb-3" to="/services">
                            <GrServices className='mb-1' /> Services
                        </NavLink>
                    </ul>
                </div>

                <div className="col-md-9">
                    <Outlet />
                </div>
            </div>

            <style>{`
                .custom-shadow {
                    transition: text-shadow 0.4s ease;
                }
                .custom-shadow:hover {
                    text-shadow: 2px 2px 5px grey;
                }
            `}</style>
        </>
    )
}

export default AdminLayouts
