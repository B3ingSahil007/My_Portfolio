import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'

const AdminContacts = () => {
  const [contacts, setContacts] = useState([])
  const { authorizationToken } = useAuth()

  const getAllContactsData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/allcontacts', {
        method: 'GET',
        headers: {
          Authorization: authorizationToken
        }
      })
      const data = await response.json()
      // console.log(data);
      setContacts(data)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteContact = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/allcontacts/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: authorizationToken
        }
      })
      const data = await response.json()
      console.log(`Users After Delete : ${data}`);

      if (response.ok) {
        getAllContactsData()
      }
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getAllContactsData()
  }, []);

  return (
    <>
      <div style={{ maxHeight: '78vh', overflowY: 'auto' }} className="container">
        <div className="row">
          {contacts && contacts.length > 0 && contacts.map((item, index) => (
            <div key={index} className="col p-2">
              <div className="card m-1" style={{ border: '2px solid #5479f7', background: 'transparent', color: 'white' }}>
                <div className="card-body">
                  <h6><span style={{ color: '#5479f7' }}>User Name : </span>{item.username}</h6>
                  <h6><span style={{ color: '#5479f7' }}>E-Mail : </span>{item.email}</h6>
                  <h6><span style={{ color: '#5479f7' }}>Message : </span>{item.message}</h6>
                  <h6><span style={{ color: '#5479f7' }}>Admin : </span>{item.isAdmin ? 'Yes' : 'No'}</h6>
                  <div className="mt-3 justify-content-end d-flex">
                    <button onClick={() => { deleteContact(item._id) }} className="btn btn-outline-danger">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AdminContacts
