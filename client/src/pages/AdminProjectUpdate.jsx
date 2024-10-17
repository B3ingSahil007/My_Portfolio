import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const AdminProjectUpdate = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        id: "",
        title: "",
        overview: "",
        skills: [],
        link: "",
    })
    const [newSkill, setNewSkill] = useState("");

    const handleInput = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value });
    }

    const params = useParams();
    // console.log("Params Single User: ", params);
    const { authorizationToken } = useAuth();

    const handleSkillInput = (e) => {
        setNewSkill(e.target.value);
    }

    const addSkill = (e) => {
        e.preventDefault();
        if (!newSkill.trim()) {
            toast.error("Skill cannot be empty!");
            return;
        }
        setData({ ...data, skills: [...data.skills, newSkill.trim()] });
        setNewSkill("");
    }

    const removeSkill = (index) => {
        const updatedSkills = data.skills.filter((_, i) => i !== index);
        setData({ ...data, skills: updatedSkills });
    }

    const getSingleProjectData = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/admin/allprojects/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });
            const data = await response.json();
            // console.log(`Users Project Data:  ${data}`);
            setData(data);

            if (response.ok) {
                AdminAllProjects();
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getSingleProjectData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                `http://localhost:5000/api/admin/allprojects/update/${params.id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: authorizationToken,
                    },
                    body: JSON.stringify(data),
                }
            );

            if (response.ok) {
                toast.success("Project Data Updated Successfully");
                navigate('/admin/allprojects')
            } else {
                toast.error("Data Not Updated");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className="container">
                <div className='col form'>
                    <h3>Update <span className='custom-text' style={{ color: '#5479f7' }}> Project </span> :</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-3">
                            <div className="row">
                                <div className="input-group col">
                                    <label htmlFor='id' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Project ID :</label>
                                    <input name="id" value={data.id} onChange={handleInput} id='id' type="text" className="form-control" style={{ backgroundColor: 'transparent', color: 'white' }} aria-label="Project Title" required />
                                </div>
                                <div className="input-group col">
                                    <label htmlFor='title' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Project Title :</label>
                                    <input name="title" value={data.title} onChange={handleInput} id='title' type="text" className="form-control" style={{ backgroundColor: 'transparent', color: 'white' }} aria-label="Project Title" required />
                                </div>
                            </div>
                            <div className="input-group mt-2">
                                <span style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Project Overview :</span>
                                <textarea value={data.overview} onChange={handleInput} name="overview" type="overview" style={{ backgroundColor: 'transparent', color: 'white', height:'3.5cm' }} className="form-control" aria-label="With textarea"></textarea>
                            </div>
                            <div className="input-group mt-2">
                                <label htmlFor='skills' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Technology Used :</label>
                                <input value={newSkill} onChange={handleSkillInput} onKeyDown={(e) => e.key === 'Enter' && addSkill(e)} name="skills" type="text" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" id="skillInput" />
                                <button onClick={addSkill} className="btn btn-outline-light">Add Skill</button>
                            </div>
                            <div className="mt-2">
                                {data.skills.length > 0 && (
                                    <div>
                                        <strong>Your Added Skills: </strong>
                                        {data.skills.map((skill, index) => (
                                            <span style={{ border: '1px solid white' }} key={index} className="badge bg-dark mx-1">
                                                {skill} <button type="button" className="btn-close btn-close-white ms-1" aria-label="Close" onClick={() => removeSkill(index)}></button>
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="input-group mt-3">
                                <label htmlFor='link' style={{ backgroundColor: 'transparent', color: 'white' }} className="input-group-text">Project Link :</label>
                                <input name="link" value={data.link} onChange={handleInput} id='link' type="text" style={{ backgroundColor: 'transparent', color: 'white' }} className="form-control" required />
                            </div>
                            <div className="mt-3">
                                <button style={{ border: '2px solid #5479f7', backgroundColor: '#5479f7' }} type="submit" className="btn btn-outline-light">Update Project Now</button>
                            </div>
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

export default AdminProjectUpdate
