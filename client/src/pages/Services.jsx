import React from 'react'
import { useAuth } from '../store/auth'

const Services = () => {
    const { services } = useAuth()

    return (
        <>
            <div style={{ marginTop: '0.5cm' }}>
                <h2>My <span className='custom-shadow' style={{ color: '#5479f7' }}>Services . . .</span></h2>
                <div className="row d-flex justify-content-center">
                    {services && services.length > 0 && services.map((item, index) => (
                        <div key={index} className="card m-3 col-5 custom-card" style={{ backgroundColor: 'transparent', border: '2px solid #5479f7', borderRadius: '20px', color: 'white', width: '20rem' }}>
                            <img src={item.image} className="card-img-top" alt={item.title}></img>
                            <div className="card-body">
                                <h5 className="card-title">Title: {item.title}</h5>
                                <h6 className="card-subtitle mt-2 mb-2"><strong>Description:</strong> {item.description}</h6>
                                <p className="card-text"><strong>Technology Used:</strong> {item.skills.join(", ")}</p>
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
                    div .card{
                    width: 25rem !important
                    }
                }
            `}</style>
        </>
    )
}

export default Services
