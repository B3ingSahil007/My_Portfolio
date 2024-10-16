    import { useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify'

const defaultContact = {
    username: "",
    email: "",
    message: "",
}

const Contact = () => {
    const [data, setData] = useState(defaultContact);

    const [userData, setUserData] = useState(true)

    const { user } = useAuth()
    // console.log("FrontEnd User", user.email);


    if (userData && user) {
        setData({
            username: user.username,
            email: user.email,
            message: "",
        })
        setUserData(false)
    }

    const handleContactInput = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value });
    }

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        console.log(data);

        try {
            const response = await fetch("http://localhost:5000/api/form/contact", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                setData({
                    message: "",
                })
                const data = await response.json()
                console.log(data);
                toast.success("Message Sent Successfully")
            }
        } catch (error) {
            toast.error("Message Not Sent", error)
            console.log(error);
        }
    };

    return (
        <>
            <div style={{ marginTop: '0.5cm' }} className="container row align-items-center">
                <div className='col image'>
                    <img style={{ width: '12cm' }} src="/images/support.png" alt="Registeration_Image" />
                </div>
                <div className="col">
                    <h3>Get In <span className='custom-shadow' style={{ color: '#5479f7' }}> Touch </span> :</h3>
                    <div className="input-group mt-3">
                        <label htmlFor='username' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Recipient's Username :</label>
                        <input value={data.username} onChange={handleContactInput} name="username" id='username' type="text" className="form-control" style={{ backgroundColor: 'transparent', color: 'white' }} aria-label="Recipient's Username" required />
                    </div>
                    <div className="input-group mt-3">
                        <label htmlFor='email' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Recipient's E-Mail Address :</label>
                        <input value={data.email} onChange={handleContactInput} name="email" type="email" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required />
                    </div>
                    <div className="input-group mt-3">
                        <span style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Comments</span>
                        <textarea value={data.message} onChange={handleContactInput} name="message" type="message" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <button onClick={handleContactSubmit} style={{ border: '2px solid #5479f7', backgroundColor: '#5479f7' }} className="btn btn-outline-light mt-3">Submit Now</button>
                </div>
                <div style={{ marginTop: '1cm' }} className="d-flex justify-content-center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d740.8203272830458!2d72.58773027885609!3d23.01578110540225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85b4f305cc89%3A0x348227b1c8d90035!2sPanch%20Pipli%20Police%20Station!5e0!3m2!1sen!2sin!4v1727268898423!5m2!1sen!2sin" width="800" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <style>{`
                /* Responsive Styles */
                @media (max-width: 1024px) {
                h3 {
                    font-size: 1.5rem;
                }
                    label {
                    font-size: 0.8rem !important;
                    }
                    img{
                    width: 10cm !important
                    }
                }
            `}</style>
        </>
    )
}

export default Contact
