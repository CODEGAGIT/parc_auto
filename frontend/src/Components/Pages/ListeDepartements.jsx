import React, { useEffect, useState } from 'react'
import GeneralLayout from '../Layout/GeneralLayout';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function ListeDepartements() {

    const [Departement, setDepartement] = useState([]);
     useEffect( () =>{
      axios.get('http://localhost:2000/api/Departements/getAllDepartement')
          .then(departement => setDepartement(departement.data))
          .catch(err => console.log(err))
        },[])
        
        const [departements, setDepartements] = useState([])
        //const [openModal, setOpenModal] = useState(false)
    

        const fetchdepartements = async () => {
            try {
               await axios.get('http://localhost:2000/api/departements/getAlldepartement')
            .then((res) => {
                console.log(res.data);
                setDepartements(res.data);
                
            })
            } catch (error) {
                
            }
          }
            
            useEffect( () =>{fetchdepartements() },[]) 
            console.log(departements);
    
        const handleDelete= async (departementId) => {
            console.log(departementId);
            try {
                await axios.delete(`http://localhost:2000/api/departements/delete/${departementId}`)
                fetchdepartements()
            } catch (error) {
                console.log(error)
            }
          }
          const [editedDepartemet, setEditedDepartememt] = useState({})
          const handleEdit= async (departementId) => {
            const selectedDepartememt = departements.find((depart)=>depart._id === departementId)
            if(selectedDepartememt){
                setEditedDepartememt(selectedDepartememt)}
                try {
                    await axios.put(`http://localhost:2000/api/departements/update/${departementId}`)
                    .then((res) => {
                        console.log(res.data);
                        setEditedDepartememt(res.data);
                        
                    })
                } catch (error) {
                    
                }
             
            console.log(departementId);

          }

          const handleChange = (e) => {
            const {name, value} = e.target
            setDepartement({...Departement,[name]:value})
    
        }
    
        const handleUpdate = (e) => {
            e.preventDefault()
           const res = axios.put(`http://localhost:2000/api/departements/update`)
            .then((res) =>{
                console.log(res.data);
          
            })
            .catch( (error) => {
                console.log(error);
            })
        }
  return (
    
    <GeneralLayout>
    <div id="layoutSidenav_content">
             <div className="container-fluid px-4">
           

                     <div className="card shadow mb-4">
                     <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                 <h6 className="m-0 font-weight-bold text-primary">listes des departements</h6>
                 <div className="dropdown no-arrow">
                     <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                     </a>
                     <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                         aria-labelledby="dropdownMenuLink">
                         <div className="dropdown-header">Actions:</div>
                         <a className="dropdown-item" href="CDepartement">Ajouter un Departement</a>
                        {/*  <a className="dropdown-item" href="#">Another action</a>
                         <div className="dropdown-divider"></div>
                         <a className="dropdown-item" href="#">Something else here</a> */}
                     </div>
                 </div>  
             </div>

                         <div>
                          

<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

   
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        
      </div>
      <div class="modal-body">
      <form onSubmit={handleUpdate} >
                    <div className="row mb-3">
                      <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <input className='form-control' type="text" value={editedDepartemet.nom} placeholder="nom" name="nom" required='true' onChange={handleChange} />
                              <label for="inputnom">Nom</label>
                              </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-floating">
                              <input className='form-control' type="text" value={editedDepartemet.service} placeholder="Service" name="service" required='true' onChange={handleChange} />
                              <label for="inputService">Service</label>
                              </div>
                              </div>
                        </div>
                        <div className="mt-4 mb-0">
                                 <button className="btn btn-primary btn-block" type="submit">Enregistrer</button>
                           </div>
                    </form> 
                
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
                         </div>

                     <div className="card-body">
                         <div className="table-responsive">
                             <table className="table table-bordered" id="dataTableSimple" width="100%" cellspacing="0">
                                 <thead>
                                     <tr>
                                         <th>nom</th>
                                         <th>service</th>  
                                         <th>Actions</th>  
                                     </tr>
                                 </thead>
                                 <tbody>
                                   {
                                      Departement.map(departement => {
                                       return <tr>
                                         <td>{departement.nom}</td>
                                         <td>{departement.service}</td>
                                         <td>
                                         
                                             <i class="edit icon"  data-target="#myModal" data-toggle="modal" onClick={() => handleEdit(departement._id)}></i>
                                             <i class="trash alternate icon" onClick={() => handleDelete(departement._id)}></i>  
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

export default ListeDepartements