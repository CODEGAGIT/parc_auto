import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GeneralLayout from '../Layout/GeneralLayout';

function ListeAffect() {

   /*  const [departement, setDepartement] = useState([]);
     useEffect( () =>{
      axios.get('http://localhost:2000/api/Departements/getAllDepartement')
          .then(departement => setDepartement(departement.data))
          .catch(err => console.log(err))
        },[])  */

     const [affects, setAffects] = useState([]);
     useEffect( () =>{
      axios.get('http://localhost:2000/api/affects/getAllAffect')
          .then(affects => setAffects(affects.data))
          .catch(err => console.log(err))
        },[])

    const [LongAffect, setLongAffect] = useState(0);

    const fetchAffect = async () => {
        try {
           await axios.get('http://localhost:2000/api/affects/getAllAffect')
        .then((res) => {
            console.log(res.data);
            setLongAffect(res.data.length)
            setAffects(res.data);
            
        })
        } catch (error) {
            console.log(error)
        }
      }
        
        useEffect( () =>{fetchAffect() },[]) 
        console.log(affects)
        
       /*  
        const handleEditA= async (affectId) => {
            console.log(affectId)
           
        }
       
        const handleDeleteA= async (affectId) => {
            console.log(affectId)
            try {
                await axios.delete(`http://localhost:2000/api/affects/delete/${affectId}`)
                fetchAffect()
            } catch (error) {
                console.log(error)
            }
           
        }
 */
  return (
    <GeneralLayout>
    <div id="layoutSidenav_content">
             <div className="container-fluid px-4">
             <div className="row">

                <div className="col-xl-4 col-md-6 mb-4">
                    <div className="card border-left-primary shadow h-100 py-2">
                        <div className="card-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col mr-2">
                                    <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                        AFFECTATIONS(TOTALS)</div>
                                        {LongAffect}
                                
                                </div>
                                <div className="col-auto">
                                    <i className="fas fa-car fa-2x text-gray-300"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                     <div className="card shadow mb-4">
                     <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                 <h6 className="m-0 font-weight-bold text-primary">listes des Affectations</h6>
                 <div className="dropdown no-arrow">
                     <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                         <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                     </a>
                     <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                         aria-labelledby="dropdownMenuLink">
                         <div className="dropdown-header">Actions:</div>
                         <a className="dropdown-item" href="VAffecte">Faire une Affectation</a>
                        {/*  <a className="dropdown-item" href="#">Another action</a>
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
                                        <th>Numero</th>
                                         <th>Vehicule</th>
                                         <th>Departement</th>
                                         {/* <th>Actions</th> */}
                                     </tr>
                                 </thead>
                                 <tbody>
                                   {
                                      affects.map(affect => {
                                       return <tr>
                                         <td>{affect.numero}</td>
                                         <td>{affect.vehiculeimmatriculation.immatriculation}</td>
                                         <td>{affect.departementnom.nom}</td>
                                         { console.log(affect.vehicule)}
                                         { console.log(affect.departement)}
                                         {console.log(affect.numero)}
                                          {/* <td>
                                            <i class="edit icon"  onClick={() => handleEditA(affect._id)} ></i>
                                            <i class="trash alternate icon" onClick={() => handleDeleteA(affect._id)}></i>
                                            { console.log(affect._id) }
                                         </td>  */}
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

export default ListeAffect