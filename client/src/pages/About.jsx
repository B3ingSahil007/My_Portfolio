import React from 'react'
import InfoPannel from '../components/InfoPannel'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../store/auth'

const About = () => {
    const navigate = useNavigate();

    const { user } = useAuth()

    const projects = () => {
        navigate("/myprojects")
    }
    const experience = () => {
        navigate("/experience")
    }
    const services = () => {
        navigate("/services")
    }

    return (
        <>
            <div style={{ marginTop: '1cm' }} className="container row align-items-center">
                <div className="col">
                    <p>Welcome, <span style={{ color: '#5479f7' }}>{user ? user.firstname : 'To Our Website'}</span> . . .</p>
                    <h1>Why Choose <span style={{ color: '#5479f7' }}> Us </span>?</h1>
                    <p>As a passionate developer, I specialize in delivering innovative solutions using modern technologies like HTML, CSS, JavaScript, and frameworks such as Bootstrap, ReactJS, Material-UI and more.</p>
                    <p>I prioritize a design philosophy that emphasizes user experience and functionality, ensuring every project is visually appealing and effective in meeting your goals.</p>
                    <p>We are committed to understanding your unique needs, allowing us to tailor our services for maximum impact and satisfaction.</p>
                    <p>Whether it's a personal project or a corporate initiative, we have the skills to bring your vision to life.</p>
                    <p>By choosing us, you're partnering with a dedicated team eager to create something exceptional together.</p>
                </div>
                <div className="col image">
                    <img style={{ width: '12cm' }} src="/images/about.png" alt="Home_Image" />
                </div>
                <div>
                    <button style={{ border: '2px solid #5479f7', backgroundColor: '#5479f7' }} onClick={() => { projects() }} className="btn btn-outline-light">My Projects</button>
                    <button style={{ border: '2px solid #5479f7' }} onClick={() => { experience() }} className="btn btn-dark mx-3">Experience</button>
                    <button style={{ border: '2px solid #5479f7' }} onClick={() => { services() }} className="btn btn-dark">Services</button>
                </div>
                <InfoPannel />
            </div>
        </>
    )
}

export default About
