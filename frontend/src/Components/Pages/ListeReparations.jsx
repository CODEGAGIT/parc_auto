import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GeneralLayout from '../Layout/GeneralLayout';
import { format } from 'date-fns';


function ListeReparations() {

  const [Reparation, setReparation] = useState([]);
     useEffect( () =>{
      axios.get('http://localhost:2000/api/reparations/getAllReparation')
          .then(reparations => setReparation(reparations.data))
          .catch(err => console.log(err))
        },[])
        
    
  return (
    <GeneralLayout>
    <div id="layoutSidenav_content">
             <div className="container-fluid px-4">
                     <div className="card shadow mb-4">
                     <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">listes des Reparations </h6>
                        <div className="dropdown no-arrow">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                aria-labelledby="dropdownMenuLink">
                                <div className="dropdown-header">Action:</div>
                                <a className="dropdown-item" href="/CReparation">Ajouter une reparation</a>
{/*                                 <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a> */}
                            </div>
                        </div>  
                    </div> 
                     <div className="card-body">
                         <div className="table-responsive">
                             <table className="table table-bordered" id="dataTableSimple" width="100%" cellspacing="0">
                                 <thead>
                                     <tr>
                                         <th>TypeREP</th>
                                         <th>MotifRep</th>
                                         <th>Montant</th>
                                         <th>Date</th>
                                         <th>vehicule</th>    
                                     </tr>
                                 </thead>
                                 <tbody>
                                   {
                                      Reparation.map(reparation => {
                                       return <tr>
                                         <td>{reparation.typeREP}</td>
                                         <td>{reparation.motifREP}</td>
                                         <td>{reparation.montant}</td>
                                         <td>{format(
                                            new Date(reparation.createdAt),'dd /MM/ yyyy')}
                                        </td>
                                         <td>{reparation.vehiculeId.immatriculation}</td>
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

export default ListeReparations