import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { Link } from 'react-router-dom'

const AdminUsers = () => {
  const [users, setUsers] = useState([])

  const { authorizationToken } = useAuth()

  const getAllUsersData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/allusers', {
        method: 'GET',
        headers: {
          Authorization: authorizationToken
        }
      })
      const data = await response.json()
      // console.log(`Users : ${data}`);
      setUsers(data)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/allusers/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: authorizationToken
        }
      })
      const data = await response.json()
      console.log(`Users After Delete : ${data}`);

      if (response.ok) {
        getAllUsersData()
      }
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getAllUsersData()
  }, []);

  return (
    <>
      <div style={{ maxHeight: '78vh', overflowY: 'auto' }} className="container">
        <div className="row">
          <h3>All <span className='custom-text' style={{ color: '#5479f7' }}> Users :</span></h3>
          {users && users.length > 0 && users.map((item, index) => (
            <div key={index} className="col-6 p-2">
              <div className="card m-1" style={{ border: '2px solid #5479f7', background: 'transparent', color: 'white' }}>
                <div className="card-body">
                  <h6><span style={{ color: '#5479f7' }}>First Name : </span>{item.firstname}</h6>
                  <h6><span style={{ color: '#5479f7' }}>Last Name : </span>{item.lastname}</h6>
                  <h6><span style={{ color: '#5479f7' }}>User Name : </span>{item.username}</h6>
                  <h6><span style={{ color: '#5479f7' }}>Mobile Number : </span>{item.mnumber}</h6>
                  <h6><span style={{ color: '#5479f7' }}>E-Mail : </span>{item.email}</h6>
                  <h6><span style={{ color: '#5479f7' }}>City : </span>{item.city}</h6>
                  <h6><span style={{ color: '#5479f7' }}>State : </span>{item.state}</h6>
                  <h6><span style={{ color: '#5479f7' }}>Admin : </span>{item.isAdmin ? 'Yes' : 'No'}</h6>
                  <div style={{ marginTop: '-1cm' }} className="justify-content-end d-flex">
                    <Link onClick={() => { editProject() }} to={`/admin/allproject/${item._id}/edit`} className="btn btn-outline-success mx-3">Edit</Link>
                    <button onClick={() => { deleteUser(item._id) }} className="btn btn-outline-danger">Delete</button>
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
                    img{
                    width: 10cm !important
                    }
            `}</style>
    </>
  )
}

export default AdminUsers
