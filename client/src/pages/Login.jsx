import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'

const URL = 'http://localhost:5000/api/auth/login'

const Login = () => {
    const { user } = useAuth()

    const navigate = useNavigate()

    const [userO, setUser] = useState({
        email: "",
        password: "",
    })

    const handleLoginInput = (e) => {
        const { name, value } = e.target
        setUser({ ...userO, [name]: value });
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        console.log(userO);

        try {
            //^ Connect Frontend To Server Or Backend
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userO),
            })

            const res_data = await response.json();
            console.log("Response From Server", res_data);

            if (response.ok) {
                storeTokenInLocalStorage(res_data.token)
                setUser({ email: "", password: "" })
                toast.success(`Login Successfull, Welcome ${res_data.firstname} ${res_data.lastname}`)
                navigate('/home')
            } else {
                toast.error(res_data.msg)
                console.log("Invalid Credentials, E-Mail Or Password !!");
            }
        } catch (error) {
            console.log("Login Error", error);
        }
    };

    const { storeTokenInLocalStorage } = useAuth()

    return (
        <>
            <div className="container mt-3 row align-items-center">
                <div className='col image'>
                    <img style={{ width: '12cm' }} src="/images/login.png" alt="Log-In_Image" />
                </div>
                <div className="col">
                    <h3>Login To Your <span style={{ color: '#5479f7' }}> Account </span> :</h3>
                    <form>
                        <div className="mt-3">
                            <div className="input-group mt-3">
                                <label htmlFor='email' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Recipient's E-Mail Address :</label>
                                <input value={userO.email} onChange={handleLoginInput} name="email" type="email" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor='password' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Recipient's Password :</label>
                                <input value={userO.password} onChange={handleLoginInput} name="password" type="password" style={{ backgroundColor: 'transparent', color: 'white' }} id="inputPassword5" className="form-control" autoComplete='on' aria-describedby="passwordHelpBlock" required />
                            </div>
                            <div className="mt-3">
                                <button style={{ border: '2px solid #5479f7', backgroundColor: '#5479f7' }} onClick={handleLoginSubmit} type="submit" className="btn btn-outline-light">Log-In Now</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login