import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useAuth } from '../store/auth'

const defaultExperience = {
    id: "",
    title: "",
    company: "",
    duration: "Month 0000 - Month 0000",
    description: "",
    skills: [],
    location: "City, State, Country",
}

const AdminExperiences = () => {
    const [experienceData, setExperienceData] = useState(defaultExperience);
    const [newSkill, setNewSkill] = useState("");
    const { authorizationToken } = useAuth();

    const handleInput = (e) => {
        const { name, value } = e.target
        setExperienceData({ ...experienceData, [name]: value });
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
        setExperienceData({ ...experienceData, skills: [...experienceData.skills, newSkill.trim()] });
        setNewSkill("");
    }

    const removeSkill = (index) => {
        const updatedSkills = experienceData.skills.filter((_, i) => i !== index);
        setExperienceData({ ...experienceData, skills: updatedSkills });
    }

    const handleExperienceSubmit = async (e) => {
        e.preventDefault();

        const newExperienceId = new Date().getTime().toString();
        const experienceToSubmit = { ...experienceData, id: newExperienceId };

        console.log("Submitting Experience :", experienceToSubmit);

        try {
            const response = await fetch("http://localhost:5000/api/admin/addexperience", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authorizationToken
                },
                body: JSON.stringify(experienceToSubmit),
            })

            if (response.ok) {
                setExperienceData(defaultExperience);
                setNewSkill("");
                const experienceData = await response.json()
                console.log(experienceData);
                toast.success("Experience Added Successfully")
            } else {
                throw new Error('Network Response Was Not Ok.');
            }
        } catch (error) {
            console.log("Experience Not Added,", error.message);
            toast.error("Failed To Add Experience, Please Try Again")
        }

    };

    return (
        <>
            <div className="container">
                <h3>Add <span className='custom-text' style={{ color: '#5479f7' }}> Experience :</span></h3>
                <div style={{ maxHeight: '58vh', overflowY: 'auto' }} className="row d-flex justify-content-center">
                    <form>
                        <div className="col mt-1">
                            <div className="row">
                                <div className="input-group col">
                                    <label htmlFor='title' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Experience Title :</label>
                                    <input value={experienceData.title} onChange={handleInput} name="title" id='title' type="text" className="form-control" style={{ backgroundColor: 'transparent', color: 'white' }} aria-label="Experience Title" required />
                                </div>
                                <div className="input-group col">
                                    <label htmlFor='company' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Company Name :</label>
                                    <input value={experienceData.company} onChange={handleInput} name="company" id='company' type="text" className="form-control" style={{ backgroundColor: 'transparent', color: 'white' }} aria-label="Company Name" required />
                                </div>
                            </div>
                            <div className="input-group mt-2">
                                <label htmlFor='duration' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Duration :</label>
                                <input value={experienceData.duration} onChange={handleInput} name="duration" id='duration' type="text" className="form-control" style={{ backgroundColor: 'transparent', color: 'white' }} aria-label="Duration" required />
                            </div>
                            <div className="input-group mt-2">
                                <span style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Description :</span>
                                <textarea value={experienceData.description} onChange={handleInput} name="description" type="description" style={{ backgroundColor: 'transparent', color: 'white', height: '3.5cm' }} className="form-control" aria-label="With textarea"></textarea>
                            </div>
                            <div className="input-group mt-2">
                                <label htmlFor='skills' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Technology Used :</label>
                                <input value={newSkill} onChange={handleSkillInput} onKeyDown={(e) => e.key === 'Enter' && addSkill(e)} name="skills" type="text" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" id="skillInput" />
                                <button onClick={addSkill} className="btn btn-outline-light">Add Skill</button>
                            </div>
                            <div className="mt-3">
                                {experienceData.skills.length > 0 && (
                                    <div>
                                        <strong>Your Added Skills: </strong>
                                        {experienceData.skills.map((skill, index) => (
                                            <span style={{ border: '1px solid white' }} key={index} className="badge bg-dark mx-1">
                                                {skill} <button type="button" className="btn-close btn-close-white ms-1" aria-label="Close" onClick={() => removeSkill(index)}></button>
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="input-group mt-2">
                                <label htmlFor='location' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Location :</label>
                                <input value={experienceData.location} onChange={handleInput} name="location" id='location' type="text" className="form-control" style={{ backgroundColor: 'transparent', color: 'white' }} aria-label="Location" required />
                            </div>
                            <button onClick={handleExperienceSubmit} style={{ border: '2px solid #5479f7', backgroundColor: '#5479f7' }} className="btn btn-outline-light mt-3">Submit Experience</button>
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

export default AdminExperiences