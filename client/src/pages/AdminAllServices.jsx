import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'

const AdminAllServices = () => {
  const [allServices, setAllServices] = useState([])
  const { authorizationToken } = useAuth();

  const getAllServicesData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/allservice', {
        method: 'GET',
        headers: {
          Authorization: authorizationToken
        }
      })
      const data = await response.json()
      // console.log(`Services : ${data}`);
      setAllServices(data)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteService = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/allservice/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: authorizationToken
        }
      })
      const data = await response.json()
      // console.log(`Service After Delete : ${data}`);

      if (response.ok) {
        getAllServicesData()
        toast.success(allServices.title, "Service Deleted Successfully")
      }
    } catch (error) {
      console.log(error);
      toast.error(allServices.title, "Service Not Deleted")
    }
  }

  useEffect(() => {
    getAllServicesData()
  }, []);

  return (
    <>
      <div style={{ maxHeight: '64vh', overflowY: 'auto' }} className="container">
        <div className="row">
          <h3>All <span className='custom-text' style={{ color: '#5479f7' }}> Services :</span></h3>
          {allServices && allServices.length > 0 && allServices.map((item, index) => (
            <div key={index} className="col-12 p-2">
              <div className="card m-1" style={{ border: '2px solid #5479f7', background: 'transparent', color: 'white' }}>
                <div className="card-body">
                  <div className="row">
                    <h6 className='col'><span style={{ color: '#5479f7' }}>Title : </span>{item.title}</h6>
                    <h6 className='col d-flex justify-content-end'><span className='mx-1' style={{ color: '#5479f7' }}>ID :</span> {item.id}</h6>
                  </div>
                  <h6><span style={{ color: '#5479f7' }}>Description : </span>{item.description}</h6>
                  <h6><span style={{ color: '#5479f7' }}>Skills : </span>{item.skills.join(", ")}</h6>
                  <h6><span style={{ color: '#5479f7' }}>Image Path : </span>{item.image}</h6>
                  <div style={{ marginTop: '-0.5cm' }} className="justify-content-end d-flex">
                    <Link onClick={() => { editUser() }} to={`/admin/allservices/${item._id}/edit`} className="btn btn-outline-success mx-3">Edit</Link>
                    <button onClick={() => { deleteService(item._id) }} className="btn btn-outline-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className='row'>
            {allServices && allServices.length > 0 && allServices.map((item, index) => (
              <div key={index} className='col mt-3 p-0'>
                <div className="card d-flex align-items-center" style={{ background: 'transparent', color: 'white' }}>
                  <div style={{ width: '5cm', border: '2px solid #5479f7', borderRadius: '10px' }} className="card-body">
                    <h6 className='d-flex justify-content-start'><span className='mx-1' style={{ color: '#5479f7' }}>ID :</span>{item.id}</h6><hr />
                    <img src={item.image} className="card-img-top" alt={item.title}></img>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

export default AdminAllServices
