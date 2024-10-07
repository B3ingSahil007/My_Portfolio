import React from 'react'

const InfoPannel = () => {
    return (
        <>
            <div style={{ borderRadius: '10px', border: '1px solid white', backgroundColor: "black", height: '2.5cm', color: 'white', marginTop: '1cm' }} className='row'>
                <div style={{ borderRight: "0.2rem solid grey", margin: '1.2rem 0' }} className="col d-flex flex-column justify-content-center align-items-center">
                    <h3 className='m-0'>2</h3>
                    <p className='m-0'>Worked In Companies</p>
                </div>
                <div style={{ borderRight: "0.2rem solid grey", margin: '1.2rem 0' }} className="col d-flex flex-column justify-content-center align-items-center">
                    <h3 className='m-0'>0</h3>
                    <p className='m-0'>Happy Clients</p>
                </div>
                <div style={{ borderRight: "0.2rem solid grey", margin: '1.2rem 0' }} className="col d-flex flex-column justify-content-center align-items-center">
                    <h3 className='m-0'>10+</h3>
                    <p className='m-0'>Projects Done</p>
                </div>
                <div style={{ borderRight: "0.2rem solid grey", margin: '1.2rem 0' }} className="col d-flex flex-column justify-content-center align-items-center">
                    <h3 className='m-0'>5+</h3>
                    <p className='m-0'>Well known Developers</p>
                </div>
                <div className="col d-flex flex-column justify-content-center align-items-center">
                    <h3 className='m-0'>24 / 7</h3>
                    <p className='m-0'>Service</p>
                </div>
            </div>
            <style>{`
                /* Responsive Styles */
                @media (max-width: 1024px) {
                h3 {
                    font-size: 1.5rem;
                }
                    p{
                    font-size: 0.9rem
                    }
                }
            `}</style>
        </>
    )
}

export default InfoPannel
