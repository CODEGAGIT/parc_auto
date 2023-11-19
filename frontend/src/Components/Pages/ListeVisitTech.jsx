import React, { useEffect, useState } from 'react'
import GeneralLayout from '../Layout/GeneralLayout';
import axios from 'axios';

function ListevisiteTechs() {

    const [visiteTech, setVisiteTech] = useState([]);
     useEffect( () =>{
      axios.get('http://localhost:2000/api/visites/getAllvisiteTech')
          .then(visiteTech => setVisiteTech(visiteTech.data))
          .catch(err => console.log(err))
        },[])
        
        
  return (
    
    <GeneralLayout>
    <div id="layoutSidenav_content">
             <div className="container-fluid px-4">
                     <div className="card shadow mb-4">
                     <div className="card-header py-3">
                         <h6 className="m-0 font-weight-bold text-primary">Liste des Visites Techniques</h6> 
                     </div>
                     <div className="card-body">
                         <div className="table-responsive">
                             <table className="table table-bordered" id="dataTableSimple" width="100%" cellspacing="0">
                                 <thead>
                                     <tr>
                                         <th>Validite en Mois</th>
                                         <th>Date Debut</th>    
                                     </tr>
                                 </thead>
                                 <tbody>
                                   {
                                      visiteTech.map(VisiteTech => {
                                       return <tr>
                                         <td>{VisiteTech.validite}</td>
                                         <td>{VisiteTech.datedebut}</td>
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

export default ListevisiteTechs