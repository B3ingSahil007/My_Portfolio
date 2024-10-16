import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'

const AdminAllProjects = () => {
    const [allprojects, setAllProjects] = useState([])
    const { authorizationToken } = useAuth();

    const getAllProjectData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/admin/allprojects', {
                method: 'GET',
                headers: {
                    Authorization: authorizationToken
                }
            })
            const data = await response.json()
            // console.log(`Users : ${data}`);
            setAllProjects(data)
        } catch (error) {
            console.log(error);
        }
    }

    const deleteProject = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/allprojects/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: authorizationToken
                }
            })
            const data = await response.json()
            // console.log(`Users After Delete : ${data}`);

            if (response.ok) {
                getAllProjectData()
                toast.success(allprojects.title, " Project Deleted Successfully")
            }
        } catch (error) {
            console.log(error);
            toast.error(allprojects.title, " Project Not Deleted")
        }
    }

    useEffect(() => {
        getAllProjectData()
    }, []);

    return (
        <>
            <div style={{ maxHeight: '64vh', overflowY: 'auto' }} className="container">
                <div className="row">
                    <h3>All <span className='custom-text' style={{ color: '#5479f7' }}> Projects :</span></h3>
                    {allprojects && allprojects.length > 0 && allprojects.map((item, index) => (
                        <div key={index} className="col-12 p-2">
                            <div className="card m-1" style={{ border: '2px solid #5479f7', background: 'transparent', color: 'white' }}>
                                <div className="card-body">
                                    <div className="row">
                                        <h6 className='col'><span style={{ color: '#5479f7' }}>Title : </span>{item.title}</h6>
                                        <h6 className='col d-flex justify-content-end'><span className='mx-1' style={{ color: '#5479f7' }}>ID :</span> {item.id}</h6>
                                    </div>
                                    <h6><span style={{ color: '#5479f7' }}>Overview : </span>{item.overview}</h6>
                                    <h6><span style={{ color: '#5479f7' }}>Skills : </span>{item.skills.join(", ")}</h6>
                                    <h6><span style={{ color: '#5479f7' }}>Link : </span><a style={{ textDecoration: 'none' }} target='_blank' href={item.link}>GitHub Repo</a></h6>
                                    <div style={{ marginTop: '-0.5cm' }} className="justify-content-end d-flex">
                                        <Link onClick={() => { editUser() }} to={`/admin/allprojects/${item._id}/edit`} className="btn btn-outline-success mx-3">Edit</Link>
                                        <button onClick={() => { deleteProject(item._id) }} className="btn btn-outline-danger">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AdminAllProjects
