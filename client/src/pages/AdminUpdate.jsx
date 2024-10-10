import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminUpdate = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        mnumber: "",
        city: "",
        state: "",
        email: "",
    })

    const params = useParams();
    // console.log("Params Single User: ", params);
    const { authorizationToken, API } = useAuth();

    const getSingleUserData = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/allusers/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            // console.log(`Users Single Data:  ${data}`);
            setData(data);

            if (response.ok) {
                getAllUsersData();
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getSingleUserData();
    }, []);

    const handleInput = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `http://localhost:5000/api/admin/allusers/update/${params.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: authorizationToken,
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                toast.success("Data Updated Successfully");
                navigate('/admin/allusers')
            } else {
                toast.error("Data Not Updated");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container">
                <div className='col form'>
                    <h3>Update <span style={{ color: '#5479f7' }}> User </span> :</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-3">
                            <div className="input-group">
                                <label htmlFor='firstlastname' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">First and Last Name :</label>
                                <input name="firstname" value={data.firstname} onChange={handleInput} id='firstname' style={{ backgroundColor: 'transparent', color: 'white' }} type="text" aria-label="First name" className="form-control" required />
                                <input name="lastname" value={data.lastname} onChange={handleInput} id='lastname' style={{ backgroundColor: 'transparent', color: 'white' }} type="text" aria-label="Last name" className="form-control" required />
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor='username' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Recipient's Username :</label>
                                <input name="username" value={data.username} onChange={handleInput} id='username' type="text" className="form-control" style={{ backgroundColor: 'transparent', color: 'white' }} aria-label="Recipient's Username" required />
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor='email' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Recipient's E-Mail Address :</label>
                                <input name="email" value={data.email} onChange={handleInput} type="email" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor='mobilenumber' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Recipient's Mobile Number :</label>
                                <input name="mnumber" value={data.mnumber} onChange={handleInput} id='mobilenumber' type="number" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" required />
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor='city' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Recipient's City :</label>
                                <input name="city" value={data.city} onChange={handleInput} id='city' type="text" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" required />
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor='state' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Recipient's State :</label>
                                <input name="state" value={data.state} onChange={handleInput} id='state' type="text" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" required />
                            </div>
                            <div className="mt-3">
                                <button style={{ border: '2px solid #5479f7', backgroundColor: '#5479f7' }} type="submit" className="btn btn-outline-light">Update User Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminUpdate
