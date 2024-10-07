import React from 'react'
import { useNavigate } from 'react-router-dom';

const Error404 = () => {
    const navigate = useNavigate();

    const connecthome = () => {
        navigate("/home")
    }

    const reportproblem = () => {
        navigate("/contact")
    }
    return (
        <>
            <div className="container row justify-content-center align-items-center">
                <div className="col image">
                    <img style={{ width: '12cm', marginTop: '1cm' }} src="/images/network.png" alt="Error_Image" />
                </div>
                <div className="col error d-flex flex-column align-items-center">
                    <h1 style={{ fontSize: '7cm', opacity: '0.3', color: '#5479f7', position: 'absolute' }}>404</h1>
                    <div style={{ position: 'relative', marginTop: '2cm' }}>
                        <h1 className='justify-content-center d-flex' style={{ fontSize: '2cm' }}>Oops !!</h1>
                        <h1 className='justify-content-center d-flex' style={{ fontSize: '1.5cm' }}>Page Not Found.</h1>
                    </div>
                    <p style={{ marginTop: '1.5cm' }} className='text-center'>Oops !!, It Seems Like The Page You're Trying To Access Is Doesn't Exist. If You Believe There's An Issue, Feel Free To Report It, And We'll Look Into It.</p>
                    <div>
                        <button onClick={connecthome} style={{ border: '2px solid #5479f7', backgroundColor: '#5479f7' }} className="btn btn-outline-light mx-3">Return To Home Now</button>
                        <button onClick={reportproblem} style={{ border: '2px solid #5479f7', backgroundColor: '#5479f7' }} className="btn btn-outline-light mx-3">Report A Problem</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error404
