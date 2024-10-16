import React, { useEffect, useState } from 'react'
import { useAuth } from '../store/auth'
import { toast } from 'react-toastify';

const AdminContacts = () => {
  const [contacts, setContacts] = useState([])
  const { authorizationToken, user } = useAuth()

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
        toast.success(contacts.username," Message Deleted Successfully")
      }
    } catch (error) {
      console.log(error);
      toast.error(contacts.username," Message Not Deleted")
    }

  }

  useEffect(() => {
    getAllContactsData()
  }, []);

  return (
    <>
      <div style={{ maxHeight: '78vh', overflowY: 'auto' }} className="container">
        <div className="row">
        <h3>Users <span className='custom-text m-0' style={{ color: '#5479f7' }}> Messages :</span></h3>
          {contacts && contacts.length > 0 && contacts.map((item, index) => (
            <div key={index} className="col-6 pb-0 p-2">
              <div className="card m-1" style={{ border: '2px solid #5479f7', background: 'transparent', color: 'white' }}>
                <div className="card-body">
                  <h6><span style={{ color: '#5479f7' }}>User Name : </span>{item.username}</h6>
                  <h6><span style={{ color: '#5479f7' }}>E-Mail : </span>{item.email}</h6>
                  <h6><span style={{ color: '#5479f7' }}>Mobile Number : </span>{user.mnumber}</h6>
                  <h6><span style={{ color: '#5479f7' }}>Location : </span>{user.city}, {user.state}</h6>
                  <h6><span style={{ color: '#5479f7' }}>Message : </span>{item.message}</h6>
                  <h6><span style={{ color: '#5479f7' }}>Admin : </span>{user.isAdmin ? 'Yes' : 'No'}</h6>
                  <div className="justify-content-end d-flex">
                    <button style={{marginTop:'-1cm'}} onClick={() => { deleteContact(item._id) }} className="btn btn-outline-danger">Delete</button>
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

export default AdminContacts
