import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { useAuth } from '../store/auth'

const defaultContact = {
    id: "",
    title: "",
    overview: "",
    skills: [],
    link: "",
}

const AdminProjects = () => {
    const [projectData, setProjectData] = useState(defaultContact);
    const [newSkill, setNewSkill] = useState("");
    const { authorizationToken } = useAuth();

    const handleInput = (e) => {
        const { name, value } = e.target
        setProjectData({ ...projectData, [name]: value });
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
        setProjectData({ ...projectData, skills: [...projectData.skills, newSkill.trim()] });
        setNewSkill("");
    }

    const removeSkill = (index) => {
        const updatedSkills = projectData.skills.filter((_, i) => i !== index);
        setProjectData({ ...projectData, skills: updatedSkills });
    }

    const handleProjectSubmit = async (e) => {
        e.preventDefault();

        const newProjectId = new Date().getTime().toString();
        const projectToSubmit = { ...projectData, id: newProjectId };

        console.log("Submitting Project:", projectToSubmit);

        try {
            const response = await fetch("http://localhost:5000/api/admin/allprojects", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: authorizationToken
                },
                body: JSON.stringify(projectToSubmit),
            })

            if (response.ok) {
                setProjectData(defaultContact);
                setNewSkill("");
                const projectData = await response.json()
                console.log(projectData);
                toast.success("Project Added Successfully")
            } else {
                throw new Error('Network Response Was Not Ok.');
            }
        } catch (error) {
            console.log("Project Not Added,", error.message);
            toast.error("Failed To Add Project, Please Try Again")
        }

    };


    return (
        <>
            <div className='container'>
                <h3>Add <span className='custom-text' style={{ color: '#5479f7' }}> Projects :</span></h3>
                <div style={{ maxHeight: '58vh', overflowY: 'auto' }} className="row d-flex justify-content-center">
                    <form>
                        <div className="col">
                            <div className="input-group mt-2">
                                <label htmlFor='title' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Project Title :</label>
                                <input value={projectData.title} onChange={handleInput} name="title" id='title' type="text" className="form-control" style={{ backgroundColor: 'transparent', color: 'white' }} aria-label="Project Title" required />
                            </div>
                            <div className="input-group mt-3">
                                <span style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Project Overview :</span>
                                <textarea value={projectData.overview} onChange={handleInput} name="overview" type="overview" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" aria-label="With textarea"></textarea>
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor='skill' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Technology Used :</label>
                                <input value={newSkill} onChange={handleSkillInput} onKeyDown={(e) => e.key === 'Enter' && addSkill(e)} name="skill" type="text" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" id="skillInput" />
                                <button onClick={addSkill} className="btn btn-outline-light">Add Skill</button>
                            </div>
                            <div className="mt-3">
                                {projectData.skills.length > 0 && (
                                    <div>
                                        <strong>Your Added Skills: </strong>
                                        {projectData.skills.map((skill, index) => (
                                            <span style={{ border: '1px solid white' }} key={index} className="badge bg-dark mx-1">
                                                {skill} <button type="button" className="btn-close btn-close-white ms-1" aria-label="Close" onClick={() => removeSkill(index)}></button>
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="input-group mt-3">
                                <label htmlFor='link' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Project Link :</label>
                                <input value={projectData.link} onChange={handleInput} name="link" type="text" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" required />
                            </div>
                            <button onClick={handleProjectSubmit} style={{ border: '2px solid #5479f7', backgroundColor: '#5479f7' }} className="btn btn-outline-light mt-3">Submit Project</button>
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

export default AdminProjects;