import React from 'react'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../store/auth'

const Experience = () => {
    const navigate = useNavigate();

    const { experience } = useAuth()

    const connectcontact = () => {
        navigate("/contact")
    }
    const learnabout = () => {
        navigate("/about")
    }

    return (
        <>
            <div className="container mt-3 row align-items-center">
                <div className="col intro ">
                    <h2>My <span className='custom-shadow' style={{ color: '#5479f7' }}>Experience . . .</span></h2>
                    <p>In this section, I highlight my professional experience in web development, showcasing my journey through various projects and roles.</p>
                    <p>I have honed my skills in technologies such as React, Node.js, and MongoDB, contributing to dynamic applications and collaborating with diverse teams.</p>
                    <p>My experiences reflect my dedication to continuous learning and delivering high-quality solutions in the ever-evolving tech landscape.</p>
                    <div>
                        <button style={{ border: '2px solid #5479f7', backgroundColor: '#5479f7' }} onClick={() => { connectcontact() }} className="btn btn-outline-light">Connect Now</button>
                        <button style={{ border: '2px solid #5479f7' }} onClick={() => { learnabout() }} className="btn btn-dark mx-3">Learn More</button>
                    </div>
                </div>
                <div className="col image">
                    <img style={{ width: '12cm' }} src="/images/login.png" alt="Home_Image" />
                </div>
            </div>
            <div style={{ marginTop: '0.5cm' }} className="row">
                {experience && experience.length > 0 && experience.map((item, index) => (
                    <div className="card col m-2 bg-dark text-light custom-card" style={{ border: '1px solid white' }} key={index}>
                        <div className="card-header row">
                            <h5 className='custom-text' style={{ color: '#5479f7' }}>{item.title}</h5>
                            <h6 style={{ color: "grey" }} className='col'>{item.company}</h6>
                            <h6 style={{ color: "grey" }} className="col d-flex justify-content-end">{item.duration}</h6>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{item.description}</p>
                            <div>
                                <p className="card-text">
                                    <span style={{ fontWeight: '600' }}>Skills:</span> {item.skills.join(", ")} <br />
                                    <span style={{ fontWeight: '600' }}>Location:</span> {item.location}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <style>{`
                .custom-card {
                    box-shadow: 0px 0px 10px #5479f7;
                    transition: box-shadow 0.3s ease-in-out;
                }
                .custom-card:hover {
                    box-shadow: 2px 2px 15px white;
                }
                    .custom-text {
                    transition: text-shadow 0.4s ease;
                }
                .custom-text:hover {
                    text-shadow: 2px 2px 4px grey;
                }
                    /* Responsive Styles */
                @media (max-width: 1024px) {
                    p{
                    font-size: 0.9rem
                    }
                    h6{
                    font-size: 0.9rem
                    }
                    h5{
                    font-size: 1rem
                    }
                    h2{
                    font-size: 1.8rem
                    }
                    img{
                    width: 10cm !important
                    }
                }
            `}</style>
        </>
    )
}

export default Experience
