import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GeneralLayout from '../Layout/GeneralLayout'
import { useNavigate } from 'react-router-dom'

function ListeConducteurs() {

    let navigate = useNavigate()

    const [Conducteur, setConducteurs] = useState([])
 

    const fetchConducteurs = async () => {
        try {
           await axios.get('http://localhost:2000/api/conducteurs/getAllConducteur')
        .then((res) => {
            console.log(res.data);
           
            setConducteurs(res.data);
            
        })
        } catch (error) {
            
        }
      }
        
        useEffect( () =>{fetchConducteurs() },[]) 

    const handleEdit= async (VehiculeId) => {
        console.log(VehiculeId)
       
    }

    const handleDelete2= async (conducteurId) => {
        console.log(conducteurId)
        try {
            await axios.delete(`http://localhost:2000/api/conducteurs/delete/${conducteurId}`)
            navigate('/home')
        } catch (error) {
            console.log(error)
        }
       
    }

  return (
    <GeneralLayout>
    <div id="layoutSidenav_content">
             <div className="container-fluid px-4">
                     <div className="card shadow mb-4">
                     <div className="card-header py-3">
                         <h6 className="m-0 font-weight-bold text-primary">Liste des conducteurs</h6> 
                     </div>
                     <div className="card-body">
                         <div className="table-responsive">
                             <table className="table table-bordered" id="dataTableSimple" width="100%" cellspacing="0">
                                 <thead>
                                     <tr>
                                         <th>Nom</th>
                                        {/*  <th>Categorie</th>
                                         <th>Addresse</th> */}  
                                         <th>Contact</th> 
                                         <th>vehicule</th>
                                         <th>Actions</th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                   {
                                      Conducteur.map(conducteur => {
                                       return <tr>
                                         <td>{conducteur.nom}</td>
                                        {/*  <td>{conducteur.categorie}</td>
                                         <td>{conducteur.addresse}</td>*/}
                                         <td>{conducteur.contact}</td> 
                                         <td>{conducteur.vehiculeId.immatriculation}</td>
                                         <td>
                                            <i class="edit icon"  onClick={() => handleEdit(conducteur._id)} ></i>
                                            <i class="trash alternate icon" onClick={() => handleDelete2(conducteur._id)}></i>
                                            { console.log(conducteur._id) }
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

export default ListeConducteurs