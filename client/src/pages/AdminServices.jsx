import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useAuth } from '../store/auth'

const defaultService = {
    id: "",
    title: "",
    description: "",
    skills: [],
    image: "",
}

const AdminServices = () => {
    const [serviceData, setServiceData] = useState(defaultService);
    const [newSkill, setNewSkill] = useState("");
    const { authorizationToken } = useAuth();

    const handleInput = (e) => {
        const { name, value } = e.target
        setServiceData({ ...serviceData, [name]: value });
    }

    const handleSkillInput = (e) => {
        setNewSkill(e.target.value);
    }

    const addSkill = (e) => {
        e.preventDefault();
        if (!newSkill.trim()) {
            toast.error("Skill cannot be empty!");
            return;
        }
        setServiceData({ ...serviceData, skills: [...serviceData.skills, newSkill.trim()] });
        setNewSkill("");
    }

    const removeSkill = (index) => {
        const updatedSkills = serviceData.skills.filter((_, i) => i !== index);
        setServiceData({ ...serviceData, skills: updatedSkills });
    }

    const handleServiceSubmit = async (e) => {
        e.preventDefault();

        const newServiceId = new Date().getTime().toString();
        const serviceToSubmit = { ...serviceData, id: newServiceId };

        console.log("Submitting Service :", serviceToSubmit);

        try {
            const response = await fetch("http://localhost:5000/api/admin/addservice", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authorizationToken
                },
                body: JSON.stringify(serviceToSubmit),
            })

            if (response.ok) {
                setServiceData(defaultService);
                setNewSkill("");
                const serviceData = await response.json()
                console.log(serviceData);
                toast.success("Service Added Successfully")
            } else {
                throw new Error('Network Response Was Not Ok.');
            }
        } catch (error) {
            console.log("Service Not Added,", error.message);
            toast.error("Failed To Add Service, Please Try Again")
        }

    };

    return (
        <>
            <div className="container">
                <h3>Add <span className='custom-text' style={{ color: '#5479f7' }}> Service :</span></h3>
                <div style={{ maxHeight: '58vh', overflowY: 'auto' }} className="row d-flex justify-content-center">
                    <form>
                        <div className="col mt-1">
                            <div className="input-group mt-2">
                                <label htmlFor='title' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Service Title :</label>
                                <input value={serviceData.title} onChange={handleInput} name="title" id='title' type="text" className="form-control" style={{ backgroundColor: 'transparent', color: 'white' }} aria-label="Experience Title" required />
                            </div>
                            <div className="input-group mt-2">
                                <span style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Description :</span>
                                <textarea value={serviceData.description} onChange={handleInput} name="description" type="description" style={{ backgroundColor: 'transparent', color: 'white', height: '3.5cm' }} className="form-control" aria-label="With textarea"></textarea>
                            </div>
                            <div className="input-group mt-2">
                                <label htmlFor='skills' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Technology Used :</label>
                                <input value={newSkill} onChange={handleSkillInput} onKeyDown={(e) => e.key === 'Enter' && addSkill(e)} name="skills" type="text" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" id="skillInput" />
                                <button onClick={addSkill} className="btn btn-outline-light">Add Skill</button>
                            </div>
                            <div className="mt-3">
                                {serviceData.skills.length > 0 && (
                                    <div>
                                        <strong>Your Added Skills: </strong>
                                        {serviceData.skills.map((skill, index) => (
                                            <span style={{ border: '1px solid white' }} key={index} className="badge bg-dark mx-1">
                                                {skill} <button type="button" className="btn-close btn-close-white ms-1" aria-label="Close" onClick={() => removeSkill(index)}></button>
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="input-group mt-2">
                                <label htmlFor='image' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Image Path :</label>
                                <input value={serviceData.image} onChange={handleInput} name="image" id='image' type="text" className="form-control" style={{ backgroundColor: 'transparent', color: 'white' }} aria-label="Image" required />
                            </div>
                            <button onClick={handleServiceSubmit} style={{ border: '2px solid #5479f7', backgroundColor: '#5479f7' }} className="btn btn-outline-light mt-3">Submit Service</button>
                        </div>
                    </form>
                </div>
            </div>
            <style>{`
                .custom-text {
                    transition: text-shadow 0.4s ease;
                }
                .custom-text:hover {
                    text-shadow: 3px 3px 5px grey;
                }
                .badge {
                    padding: 0.5em 1em;
                    font-size: 0.9em;
                }
            `}</style>
        </>
    )
}

export default AdminServices
