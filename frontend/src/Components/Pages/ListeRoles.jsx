import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GeneralLayout from '../Layout/GeneralLayout';
import { format } from 'date-fns';


function ListeRoles() {

  const [role, setRole] = useState([]);
     useEffect( () =>{
      axios.get('http://localhost:2000/api/roles/getAllRole')
          .then(role => setRole(role.data))
          .catch(err => console.log(err))
        },[])
        
        //const currentDate = new Date();

       /* 
          // Convertir la chaîne de caractères en objet Date
          const date = new Date(props.dateTime);
        
          // Obtenir l'heure, les minutes et les secondes
          const heures = date.getUTCHours();
          const minutes = date.getUTCMinutes();
          //const secondes = date.getUTCSeconds();
        
          // Créer une chaîne de caractères pour afficher l'heure
          const [heureAffichee, setheureAffichee] = useState([]);
     useEffect( () =>{
      axios.get(`http://localhost:2000/api/roles/getAllRole/`)
          .then(heureAffichee =>
             setheureAffichee(heureAffichee.createdAt)
              `${heures.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`)
          .catch(err => console.log(err))
        },[]) */
          
        //  const dateTimeString = `role`yyyy-MM-dd'T'

       

  // La date à formater
  //const date = new Date();

  // Formatez la date et l'heure au format souhaité
  //const dateFormatee = format(role.createdAt, "HH:mm");

  return (
    <GeneralLayout>
    <div id="layoutSidenav_content">
             <div className="container-fluid px-4">
                     <div className="card shadow mb-4">
                     <div className="card-header py-3">
                         <h6 className="m-0 font-weight-bold text-primary">Liste des roles</h6> 
                     </div>
                     <div className="card-body">
                         <div className="table-responsive">
                             <table className="table table-bordered" id="dataTableSimple" width="100%" cellspacing="0">
                                 <thead>
                                     <tr>
                                         {/* <th>DATE</th> */}
                                         <th>libelle</th>
                                          <th>Date creation</th>
                                          <th>heure</th> 
                                     </tr>
                                 </thead>
                                 <tbody>
                                   {
                                      role.map(role => {
                                       return <tr>
                                        {/* <td>{currentDate.toDateString()}</td> */}
                                         <td>{role.libelle}</td>
                                         <td>{format(
                                            new Date(role.createdAt),'dd /MM/ yyyy'
                                         )}</td>
                                         <td>{format(
                                            new Date(role.createdAt),'HH:mm:ss'
                                         )}</td>
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

export default ListeRoles