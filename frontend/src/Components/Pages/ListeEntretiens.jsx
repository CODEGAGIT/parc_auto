import React, { useEffect, useState } from 'react'
import GeneralLayout from '../Layout/GeneralLayout';
import axios from 'axios';


function ListeEntretiens() {
    const [entretien, setEntretien] = useState([]);
    useEffect( () =>{
     axios.get('http://localhost:2000/api/entretiens/getAllEntretien')
         .then(entretien => setEntretien(entretien.data))
         .catch(err => console.log(err))
       },[])

  return (
    <GeneralLayout>
    <div id="layoutSidenav_content">
             <div className="container-fluid px-4">
                     <div className="card shadow mb-4">
                     <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">listes des Entretiens </h6>
                        <div className="dropdown no-arrow">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                aria-labelledby="dropdownMenuLink">
                                <div className="dropdown-header">Action:</div>
                                <a className="dropdown-item" href="/CEntretien">Ajouter un Entretien</a>
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
                                         <th>TypeENTRETIEN</th>
                                         <th>MotifENTRETIEN</th>
                                         <th>Montant</th>  
                                         <th>Date</th>
                                         <th>Vehicule</th> 
                                     </tr>
                                 </thead>
                                 <tbody>
                                   {
                                      entretien.map(entretien => {
                                       return <tr>
                                         <td>{entretien.typeENT}</td>
                                         <td>{entretien.motifENT}</td>
                                         <td>{entretien.montant}</td>
                                         <td>{entretien.date}</td>
                                         <td>{entretien.vehiculeId.immatriculation}</td> 
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

export default ListeEntretiens



  
    

    
