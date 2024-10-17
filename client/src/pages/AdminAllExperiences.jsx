import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'

const AdminAllExperiences = () => {
  const [allExperience, setAllExperience] = useState([])
  const { authorizationToken } = useAuth();

  const getAllExperienceData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/allexperience', {
        method: 'GET',
        headers: {
          Authorization: authorizationToken
        }
      })
      const data = await response.json()
      // console.log(`Experiences : ${data}`);
      setAllExperience(data)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteExperience = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/allexperience/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: authorizationToken
        }
      })
      const data = await response.json()
      // console.log(`Experience After Delete : ${data}`);

      if (response.ok) {
        getAllExperienceData()
        toast.success(allExperience.title, " Experience Deleted Successfully")
      }
    } catch (error) {
      console.log(error);
      toast.error(allExperience.title, " Experience Not Deleted")
    }
  }

  useEffect(() => {
    getAllExperienceData()
  }, []);

  return (
    <>
      <div style={{ maxHeight: '64vh', overflowY: 'auto' }} className="container">
        <div className="row">
          <h3>All <span className='custom-text' style={{ color: '#5479f7' }}> Experiences :</span></h3>
          {allExperience && allExperience.length > 0 && allExperience.map((item, index) => (
            <div key={index} className="col-12 p-2">
              <div className="card m-1" style={{ border: '2px solid #5479f7', background: 'transparent', color: 'white' }}>
                <div className="card-body">
                  <div className="row">
                    <h6 className='col'><span style={{ color: '#5479f7' }}>Title : </span>{item.title}</h6>
                    <h6 className='col d-flex justify-content-end'><span className='mx-1' style={{ color: '#5479f7' }}>ID :</span> {item.id}</h6>
                  </div>
                  <h6><span style={{ color: '#5479f7' }}>Company : </span>{item.company}</h6>
                  <h6><span style={{ color: '#5479f7' }}>Duration : </span>{item.duration}</h6>
                  <h6><span style={{ color: '#5479f7' }}>Description : </span>{item.description}</h6>
                  <h6><span style={{ color: '#5479f7' }}>Skills : </span>{item.skills.join(", ")}</h6>
                  <h6><span style={{ color: '#5479f7' }}>Location : </span>{item.location}</h6>
                  <div style={{ marginTop: '-0.5cm' }} className="justify-content-end d-flex">
                    <Link onClick={() => { editUser() }} to={`/admin/allexperiences/${item._id}/edit`} className="btn btn-outline-success mx-3">Edit</Link>
                    <button onClick={() => { deleteExperience(item._id) }} className="btn btn-outline-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
                .custom-text {
                    transition: text-shadow 0.4s ease;
                }
                .custom-text:hover {
                    text-shadow: 3px 3px 5px grey;
                }
            `}</style>
    </>
  )
}

export default AdminAllExperiences
