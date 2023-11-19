import axios from 'axios'
import { React,useEffect,useState } from 'react'
import GeneralLayout from '../Layout/GeneralLayout';

function ListeVehicule() {
 
  const [users, setUsers] = useState([])
  useEffect( () =>{
  axios.get('http://localhost:2000/api/users/getAllUser')
    .then(users => setUsers(users.data))
    .catch(err =>console.log(err))
  }, [])

  const handleDelete= async (UserId) => {
    console.log(UserId);
  }
  const handleEdit= async (VehiculeId) => {
    console.log(VehiculeId);
  }
  
  return (
    <GeneralLayout>
       <div id="layoutSidenav_content">
                <div className="container-fluid px-4">
                        <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Liste des utilisateurs</h6> 
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-bordered" id="dataTableSimple" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th> 
                                            <th>Role</th>   
                                            <th>Actions</th>   
                                        </tr>
                                    </thead>
                                    <tbody>
                                      {
                                         users.map(User => {
                                          return <tr>
                                            <td>{User.nom}</td>
                                            <td>{User.email}</td>
                                            <td>{User.role.libelle}</td>

                                            <td>
                                             
                                              <i class="edit icon" onClick={() => handleEdit(User._id)}></i>
                                              <i class="trash alternate icon" onClick={() => handleDelete(User._id)}></i>  
                                            </td>
                                          </tr>
                                          })
                                      }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </GeneralLayout>
  )
}

export default ListeVehicule