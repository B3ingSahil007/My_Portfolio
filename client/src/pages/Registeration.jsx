import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'

const URL = 'http://localhost:5000/api/auth/registeration'

const Registeration = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState({
        firstname: "",
        lastname: "",
        username: "",
        mnumber: "",
        city: "",
        state: "",
        email: "",
        password: "",
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
            //^ Connect Frontend To Server Or Backend
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            })

            if (response.ok === true) {
                const res_data = await response.json();
                console.log("Response From Server", res_data);
                storeTokenInLocalStorage(res_data.token)
                setUser({ firstname: "", lastname: "", username: "", mnumber: "", city: "", state: "", email: "", password: "" })
                navigate('/login')
            }

            console.log("Registeration Form", response);
        } catch (error) {
            console.log("Registeration", error);
        }

    };

    const { storeTokenInLocalStorage } = useAuth()

    return (
        <>
            <div className="mt-3 container row align-items-center">
                <div className='col image'>
                    <img style={{ width: '12cm' }} src="/images/register.png" alt="Registeration_Image" />
                </div>
                <div className='col form'>
                    <h3>Register Here, For Our <span style={{ color: '#5479f7' }}> Great Services </span> :</h3>
                    <form>
                        <div className="mt-3">
                            <div className="input-group">
                                <label htmlFor='firstlastname' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">First and Last Name :</label>
                                <input name="firstname" value={user.firstname} onChange={handleInput} id='firstname' style={{ backgroundColor: 'transparent', color: 'white' }} type="text" aria-label="First name" className="form-control" required />
                                <input name="lastname" value={user.lastname} onChange={handleInput} id='lastname' style={{ backgroundColor: 'transparent', color: 'white' }} type="text" aria-label="Last name" className="form-control" required />
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor='username' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Recipient's Username :</label>
                                <input name="username" value={user.username} onChange={handleInput} id='username' type="text" className="form-control" style={{ backgroundColor: 'transparent', color: 'white' }} aria-label="Recipient's Username" required />
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor='mobilenumber' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Recipient's Mobile Number :</label>
                                <input name="mnumber" value={user.mnumber} onChange={handleInput} id='mobilenumber' type="number" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" required />
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor='city' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Recipient's City :</label>
                                <input name="city" value={user.city} onChange={handleInput} id='city' type="text" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" required />
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor='state' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Recipient's State :</label>
                                <input name="state" value={user.state} onChange={handleInput} id='state' type="text" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" required />
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor='email' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Recipient's E-Mail Address :</label>
                                <input name="email" value={user.email} onChange={handleInput} type="email" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor='password' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Recipient's Password :</label>
                                <input name="password" value={user.password} onChange={handleInput} type="password" style={{ backgroundColor: 'transparent', color: 'white' }} id="inputPassword5" className="form-control" autoComplete='on' aria-describedby="passwordHelpBlock" required />
                            </div>
                            <div className="mt-3">
                                <button style={{ border: '2px solid #5479f7', backgroundColor: '#5479f7' }} onClick={handleSubmit} type="submit" className="btn btn-outline-light">Register Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Registeration