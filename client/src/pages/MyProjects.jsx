import React from 'react'
import { useAuth } from '../store/auth'
import { useNavigate } from "react-router-dom";

const MyProjects = () => {
    const navigate = useNavigate();

    const { projects } = useAuth()

    const experience = () => {
        navigate("/experience")
    }
    const services = () => {
        navigate("/services")
    }

    // const arrangedProjects = [
    //     projects[1],
    //     projects[5],
    //     projects[0],
    //     projects[2],
    //     projects[3],
    //     projects[4],
    // ].filter(Boolean);

    return (
        <>
            <div className="container mt-3 row align-items-center">
                <div className="col intro ">
                    <h2>My <span className='custom-shadow' style={{ color: '#5479f7' }}>Projects . . .</span></h2>
                    <p>Throughout my development journey, I’ve worked on a variety of projects that showcase my skills in web development and my passion for building responsive and user-friendly applications.</p>
                    <p>From personal portfolios to full-stack applications, these projects reflect my experience with modern technologies like ReactJS, Node.js, and MongoDB, as well as front-end design frameworks like Bootstrap and Material-UI.</p>
                    <p>Each project has taught me valuable lessons, helping me grow as a developer and refine my ability to solve real-world problems through code.</p>
                    <div>
                        <button style={{ border: '2px solid #5479f7', backgroundColor: '#5479f7' }} onClick={() => { experience() }} className="btn btn-outline-light">Experience</button>
                        <button style={{ border: '2px solid #5479f7' }} onClick={() => { services() }} className="btn btn-dark mx-3">Services</button>
                    </div>
                </div>
                <div className="col image">
                    <img style={{ width: '12cm' }} src="/images/webdev.png" alt="Home_Image" />
                </div>
            </div>
            <div style={{ marginTop: '0.5cm' }}>
                <div className="row d-flex justify-content-center">
                    {projects && projects.length > 0 && projects.map((item, index) => (
                        <div key={index} className="card m-3 col-3 custom-card" style={{ backgroundColor: 'transparent', border: '2px solid #5479f7', borderRadius: '20px', color: 'white', width: '33rem' }}>
                            <div className="card-body">
                                <h5 className="card-title">Title : {item.title}</h5>
                                <h6 className="card-subtitle mt-2 mb-2"><strong>Overview :</strong> {item.overview}</h6>
                                <p className="card-text"><strong>Technology Used :</strong> {item.skills.join(", ")}</p>
                                <strong>Link : </strong><a style={{ textDecoration: 'none' }} target='_blank' href={item.link} className="card-text">GitHub Repo</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .custom-card {
                    box-shadow: 2px 2px 15px #5479f7;
                    transition: box-shadow 0.3s ease-in-out;
                }
                .custom-card:hover {
                    box-shadow: 2px 2px 30px white;
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
                    div .card{
                    width: 25rem !important
                    }
                }
            `}</style>
        </>
    )
}

export default MyProjects
