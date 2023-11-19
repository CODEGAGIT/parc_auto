import React, { useEffect, useState } from 'react'
import GeneralLayout from '../Layout/GeneralLayout';
import axios from 'axios';

function ListeCarburants() {

    const [Carburant, setCarburant] = useState([]);
     useEffect( () =>{
      axios.get('http://localhost:2000/api/carburants/getAllCarburant')
          .then(carburant => setCarburant(carburant.data))
          .catch(err => console.log(err))
        },[])
        
       


  // Créez un objet Date à partir de la chaîne de date
  //const date = new Date(`${carburant}`);

  // Options de formatage
  //const options = {
    //year: 'numeric',
    //month: '2-digit',
    //day: '2-digit',
   // hour: '2-digit',
   // minute: '2-digit',
   // second: '2-digit',
    //fractionalSecondDigits: 3, // Pour les millisecondes
   // timeZoneName: 'short',
 // };

  // Formatez la date en utilisant toLocaleString avec les options
  //const dateFormatee = date.toLocaleString(undefined, options);






  return (
    
    <GeneralLayout>
    <div id="layoutSidenav_content">
             <div className="container-fluid px-4">
                     <div className="card shadow mb-4">
                     <div className="card-header py-3">
                         <h6 className="m-0 font-weight-bold text-primary">Liste des carburants</h6> 
                     </div>
                     <div className="card-body">
                         <div className="table-responsive">
                             <table className="table table-bordered" id="dataTableSimple" width="100%" cellspacing="0">
                                 <thead>
                                     <tr>
                                         <th>TypeCAR</th>
                                         <th>Quantite</th>   
                                         <th>Date</th> 
                                     </tr>
                                 </thead>
                                 <tbody>
                                   {
                                      Carburant.map(carburant => {
                                       return <tr>
                                         <td>{carburant.typeCAR}</td>
                                         <td>{carburant.qte}</td>
                                         <td>{}</td>
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

export default ListeCarburants