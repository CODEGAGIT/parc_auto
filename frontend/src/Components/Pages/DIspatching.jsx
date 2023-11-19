import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GeneralLayout from '../Layout/GeneralLayout'
import 'semantic-ui-css/semantic.min.css';
import { useAuth } from '../../Context/authentifier'

function DIspatching() {

    
    const { authData} = useAuth()
    const id = authData.Id
    const rol = authData.Role
    console.log(rol, id);

   const [departements, setDepartements] = useState([])
  useEffect( () =>{
  axios.get('http://localhost:2000/api/departements/getAllDepartement')
    .then(departements => setDepartements(departements.data))
    .catch(err =>console.log(err))
  }, [])

  const [Conducteurs, setConducteurs] = useState([])
  useEffect( () =>{
  axios.get('http://localhost:2000/api/conducteurs/getAllConducteur')
    .then(conducteurs => setConducteurs(conducteurs.data))
    .catch(err =>console.log(err))
  }, [])

  
  const handleEdit= async (VehiculeId) => {
    console.log(VehiculeId)
   
}

const handleDelete= async (VehiculeId) => {
    console.log(VehiculeId)
   
}

  return (
     <>
   <GeneralLayout>
  {rol === "Section_Dispatching" && (

 <div className="row">

    <div className="col-xl-8 col-lg-7">
        
        <div className="card shadow mb-4"> 
          
          <div
              className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
              <h6 className="m-0 font-weight-bold text-primary">Listes des Conducteurs</h6>
              <div className="dropdown no-arrow">
                  <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                      aria-labelledby="dropdownMenuLink">
                      <div className="dropdown-header">Action:</div>
                      <a className="dropdown-item" href="/Conducteur">Ajouter un conducteur</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">Something else here</a>
                  </div>
              </div>
          </div>
        
          <div className="card-body">
                          <div className="table-responsive">
                              <table className="table table-bordered" id="dataTableSimple" width="100%" cellspacing="0">
                              <thead>
                                     <tr>
                                         <th>Nom</th>
                                         <th>Categorie</th>
                                         <th>Adresse</th>
                                         <th>Contact</th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                   {
                                      Conducteurs.map(conducteur => {
                                       return <tr>
                                         <td>{conducteur.nom}</td>
                                         <td>{conducteur.categorie}</td>
                                         <td>{conducteur.adresse}</td>
                                         <td>{conducteur.contact}</td>
                                         <td>
                                            <i class="edit icon"  onClick={() => handleEdit(conducteur._id)}  ></i>
                                            <i class="trash alternate icon" onClick={() => handleDelete(conducteur._id)}></i>
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
    

  
    <div className="col-xl-4 col-lg-5">
        <div className="card shadow mb-4">
           
            <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">listes des departements</h6>
                <div className="dropdown no-arrow">
                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                        aria-labelledby="dropdownMenuLink">
                        <div className="dropdown-header">Dropdown Header:</div>
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>  
            </div>
          
    <div className="card-body">
                         <div className="table-responsive">
                             <table className="table table-bordered" id="dataTableSimple" width="100%" cellspacing="0">
                             <thead>
                                     <tr>
                                         <th>Nom</th>
                                         <th>Service</th>
                                          
                                     </tr>
                                 </thead>
                                 <tbody>
                                   {
                                      departements.map(departement => {
                                       return <tr>
                                         <td>{departement.nom}</td>
                                         <td>{departement.service}</td> 
                                         <td>
                                            <i class="edit icon"  onClick={() => handleEdit(departement._id)}  ></i>
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
   
)}
</GeneralLayout>
</>
  )
}

export default DIspatching