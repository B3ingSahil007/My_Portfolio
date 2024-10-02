import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import InfoPannel from '../components/InfoPannel';

const Home = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const titles = ["Frontend Developer", "Web Designer"];
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [titles.length]);

  const connectcontact = () => {
    navigate("/contact")
  }
  const learnabout = () => {
    navigate("/about")
  }

  return (
    <>
      <div className="container m-3 row align-items-center">
        {/* <div className="col intro">
        <h3>Hi, I'm Sahil Miyawala, a skilled <br />{titles[currentTitle]}.</h3><br />
        <p>"I specialize in creating dynamic, responsive, and user-friendly websites using technologies like React, JavaScript, HTML, CSS, and more."</p>
        <p>"I believe in writing clean, scalable code and designing intuitive interfaces that offer seamless user experiences."</p>
        <p>"Over the years, I’ve worked on various projects ranging from small business websites to large-scale applications, always aiming to deliver top-notch results."</p>
        <p>"Feel free to explore my work in services or reach out if you're interested in collaborating!"</p>
      </div> */}
        {/*//^ Introduction */}
        <div className="col intro ">
          <h2>Hello! I'm <span className='custom-text' style={{ color: '#5479f7' }}>Sahil Miyawala</span>.</h2>
          <p>A dedicated and creative Frontend Developer and Web Designer with a passion for building interactive, responsive, and user-focused web applications.</p>
          <p>With expertise in React, JavaScript, HTML, and CSS and more, I enjoy turning complex problems into simple, beautiful solutions.</p>
          <p>I’ve worked on a range of projects, from e-commerce websites to web applications, always ensuring quality and performance.</p>
          <p>Take a look at my work below, and let’s create something amazing together!</p>
          <div>
            <button style={{ border: '2px solid #5479f7', backgroundColor: '#5479f7' }} onClick={() => { connectcontact() }} className="btn btn-outline-light">Connect Now</button>
            <button style={{ border: '2px solid #5479f7' }} onClick={() => { learnabout() }} className="btn btn-dark mx-3">Learn More</button>
          </div>
        </div>
        <div className="col image">
          <img style={{ width: '12cm' }} src="/images/home.png" alt="Home_Image" />
        </div>
        {/*//^ Info Pannel / Portfolio Overview */}
        <InfoPannel />
        {/*//^ Help Customers */}
        <div style={{ marginTop: '2cm' }} className="col image">
          <img style={{ width: '12cm' }} src="/images/design.png" alt="Home_Image" />
        </div>
        <div className="col intro">
          <p>We are here to help you :</p>
          <h2>Get Started <span style={{ color: '#5479f7' }}>Today</span>,</h2>
          <p>As a passionate developer, I'm here to showcase my skills and projects that reflect my journey in web development. From crafting responsive designs to implementing interactive features, my work demonstrates my commitment to quality and creativity.</p>
          <p>Explore my projects, discover my approach, and see how I can help bring your ideas to life.</p>
          <p>Let’s connect and collaborate on your next project!</p>
          <div>
            <button style={{ border: '2px solid #5479f7', backgroundColor: '#5479f7' }} onClick={() => { connectcontact() }} className="btn btn-outline-light">Connect Now</button>
            <button style={{ border: '2px solid #5479f7' }} onClick={() => { learnabout() }} className="btn btn-dark mx-3">Learn More</button>
          </div>
        </div>
      </div>

      <style>{`
                .custom-text {
                    transition: text-shadow 0.4s ease;
                }
                .custom-text:hover {
                    text-shadow: 5px 5px 5px grey;
                }
            `}</style>
    </>
  );
};

export default Home;
