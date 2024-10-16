import React from 'react'
import { NavLink, Outlet, Navigate } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { IoAddCircleOutline } from "react-icons/io5";
import { HiMiniWrenchScrewdriver } from "react-icons/hi2";
import { SiPolymerproject } from "react-icons/si";
import { FaLayerGroup } from "react-icons/fa";
import { TbClock24 } from "react-icons/tb";
import { GiGrowth } from "react-icons/gi";

import { useAuth } from '../../store/auth';

const AdminLayouts = () => {
    const { user, isLoading } = useAuth()
    // console.log(user);

    if (isLoading) {
        return <h1 className='mt-3 d-flex justify-content-center' style={{ color: '#5479f7' }}>Loading . . .</h1>
    }

    if (!user.isAdmin) {
        return <Navigate to="/home" />
    }

    return (
        <>
            <div className="row mt-3">
                <div className="col-md-3">
                    <ul>
                        <NavLink style={{ color: '#5479f7', textDecoration: 'none', width: '60%' }} className="nav-link custom-shadow mb-3" to="/admin">
                            <span> <FaHome className='mb-1' /></span> Home
                        </NavLink>
                        <NavLink style={{ color: '#5479f7', textDecoration: 'none', width: '60%' }} className="nav-link custom-shadow mb-3" to="/admin/allusers">
                            <span> <FaUsers className='mb-1' /></span> Users
                        </NavLink>
                        <NavLink style={{ color: '#5479f7', textDecoration: 'none', width: '60%' }} className="nav-link custom-shadow mb-3" to="/admin/allcontacts">
                            <span> <AiFillMessage className='mb-1' /></span> Contacts
                        </NavLink>
                        <NavLink style={{ color: '#5479f7', textDecoration: 'none', width: '60%' }} className="nav-link custom-shadow mb-3" to="/admin/addprojects">
                            <span> <IoAddCircleOutline className='mb-1' /></span> Add Projects
                        </NavLink>
                        <NavLink style={{ color: '#5479f7', textDecoration: 'none', width: '60%' }} className="nav-link custom-shadow mb-3" to="/admin/addexperience">
                            <span> <GiGrowth className='mb-1' /></span> Add Experience
                        </NavLink>
                        <NavLink style={{ color: '#5479f7', textDecoration: 'none', width: '60%' }} className="nav-link custom-shadow mb-3" to="/admin/allservices">
                            <span> <HiMiniWrenchScrewdriver className='mb-1' /></span> Add Services
                        </NavLink>
                        <NavLink style={{ color: '#5479f7', textDecoration: 'none', width: '60%' }} className="nav-link custom-shadow mb-3" to="/admin/allprojects">
                            <span> <SiPolymerproject className='mb-1' /></span> All Projects
                        </NavLink>
                        <NavLink style={{ color: '#5479f7', textDecoration: 'none', width: '60%' }} className="nav-link custom-shadow mb-3" to="/admin/allexperiences">
                            <span> <FaLayerGroup className='mb-1' /></span> All Experience
                        </NavLink>
                        <NavLink style={{ color: '#5479f7', textDecoration: 'none', width: '60%' }} className="nav-link custom-shadow mb-3" to="/admin/allservices">
                            <span> <TbClock24 className='mb-1' /></span> All Services
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
                span {
                    color: grey 
                }
            `}</style>
        </>
    )
}

export default AdminLayouts
