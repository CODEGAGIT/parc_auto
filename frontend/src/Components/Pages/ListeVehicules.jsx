import axios from 'axios'
import  { React,useEffect,useState } from 'react'
import GeneralLayout from '../Layout/GeneralLayout'

function ListeVehicules() {

  const [vehicules, setVehicules] = useState([])
 
    const fetchVehicules = async () => {
        try {
           await axios.get('http://localhost:2000/api/vehicules/getAllVehicule')
        .then((res) => {
           // console.log(res.data);
            setVehicules(res.data);
            
        })
        } catch (error) {
            
        }
      }
        
        useEffect( () =>{fetchVehicules() },[]) 
        console.log(vehicules);

    const handleEdit= async (VehiculeId) => {
    console.log(VehiculeId)
   
    }

    const handleDelete= async (vehiculeId) => {     
    console.log(vehiculeId)
    try {
        await axios.delete(`http://localhost:2000/api/vehicules/delete/${vehiculeId}`)
        fetchVehicules()
    } catch (error) {
        console.log(error)
    }
   
    }

  return (
    <>
    <GeneralLayout>
      <div className="container-fluid" >
      <div className="row">
    <div className="col-xl-12 col-lg-7">
     <div className="card shadow mb-4">
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Listes des Vehicules</h6>
                    <div className="dropdown no-arrow">
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink">
                            <div className="dropdown-header">Action:</div>
                            <a className="dropdown-item" href="/Cvehicule">creer un vehicule</a>
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
                                                    <th>Immatriculation</th>
                                                    <th>Marque</th> 
                                                    <th>Model</th>  
                                                    <th>Chassis</th>   
                                                    <th>TypeVEH</th>  
                                                    <th>Puissance</th> 
                                                    <th>Moteur</th>  
                                                    <th>TypeCAR</th>  
                                                    <th>DateAcquis</th>  
                                                    <th>DatemiseCirc</th>   
                                                    <th>KmREV</th>   
                                                    <th>KmPneu</th>
                                                    <th>Departement</th>  
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                vehicules.map(Vehicule => {
                                                return <tr>
                                                    <td>{Vehicule.immatriculation}</td>
                                                    <td>{Vehicule.marqueId.nom}</td>
                                                    <td>{Vehicule.model}</td>
                                                    <td>{Vehicule.chassis}</td>
                                                    <td>{Vehicule.typeVEH}</td>
                                                    <td>{Vehicule.puissance}</td>
                                                    <td>{Vehicule.moteur}</td>
                                                    <td>{Vehicule.carburantId.typeCAR}</td>
                                                    <td>{Vehicule.dateacquisition}</td>
                                                    <td>{Vehicule.datemisecirc}</td>
                                                    <td>{Vehicule.kilometrerev}</td>
                                                    <td>{Vehicule.kilometrepneu}</td>
                                                    <td>{Vehicule.departementId.nom}</td>
                                                    <td>
                                                        <i class="edit icon"  onClick={() => handleEdit(Vehicule._id)} ></i>
                                                        <i class="trash alternate icon" onClick={() => handleDelete(Vehicule._id)}></i>
                                                        { console.log(Vehicule._id) }
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
     </div>
 </GeneralLayout>
 </>
  )
}

export default ListeVehicules