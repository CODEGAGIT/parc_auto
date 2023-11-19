
import React, { useEffect, useState } from 'react'
import GeneralLayout from '../Layout/GeneralLayout'
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css';
//importer 
import { useAuth } from '../../Context/authentifier';

import { format } from 'date-fns';


//import mongoose from 'mongoose'

function Dashboard() {
    //declarer et affecter
    const {authData} = useAuth()
    const id = authData.Id
    const rol = authData.Role
    console.log(rol, id);


    const [visiteTech, setVisiteTech] = useState([]);
     useEffect( () =>{
      axios.get('http://localhost:2000/api/visites/getAllvisiteTech')
          .then(visiteTech => setVisiteTech(visiteTech.data))
          .catch(err => console.log(err))
        },[])
        
        
    const [role, setRole] = useState([]);
    useEffect( () =>{
     axios.get('http://localhost:2000/api/roles/getAllRole')
         .then(role => setRole(role.data))
         .catch(err => console.log(err))
       },[])

    const [users, setUsers] = useState([])
        
    const fetchUsers = async () => {
        try {
           await axios.get('http://localhost:2000/api/users/getAllUser')
        .then((res) => {
            console.log(res.data);
            setUsers(res.data);

        })
        } catch (error) {
            
        }
      }
    
        useEffect( () =>{fetchUsers() },[]) 

        const [entretiens, setEntretien] = useState([]);
      const [longEntretien, setlongEntretien] = useState(0)
      useEffect( () =>{
       axios.get('http://localhost:2000/api/entretiens/getAllEntretien')
           .then(entretien => {
            setlongEntretien(entretien.data.length)
            setEntretien(entretien.data)
           }
            
           
           )
           
           
           .catch(err => console.log(err))
         },[])


    const [vehicules, setVehicules] = useState([])
    const [longVehicule, setLongVehicule] = useState(0)

    const fetchVehicules = async () => {
        try {
           await axios.get('http://localhost:2000/api/vehicules/getAllVehicule')
        .then((res) => {
            console.log(res.data);
            setLongVehicule(res.data.length)
            setVehicules(res.data);
            
        })
        } catch (error) {
            
        }
      }
        
        useEffect( () =>{fetchVehicules() },[]) 
        console.log(vehicules);

    const [departements, setDepartements] = useState([])
    const [longDepartement, setLongDepartement] = useState(0)
    useEffect( () =>{
    axios.get('http://localhost:2000/api/departements/getAllDepartement')
      .then(departements => {
        setLongDepartement(departements.data.length)
        setDepartements(departements.data)
    })
      .catch(err =>console.log(err))
    }, [])
  
    
       const [Garage, setGarage] = useState([])
       const [longGarage, setLongGarage] = useState(0)
            const fetchGarage = async () => {
                try {
                   await axios.get('http://localhost:2000/api/garages/getallgarage')
                .then((res) => {
                    console.log(res.data);
                    setLongGarage(res.data.length)
                    setGarage(res.data);
                    
                })
                } catch (error) {
                    
                }
              }
                
                useEffect( () =>{fetchGarage() },[])


       const [Reparation, setReparation] = useState([]);
       useEffect(() => {
        axios.get('http://localhost:2000/api/reparations/getAllReparation')
          .then(reparation => {
            // Affiche les données dans la console
            /* console.log('reponse-------------------du reparateur',reparation.data); */
            // Met à jour le state Reparation
            setReparation(reparation.data);
          })
          .catch(err => console.log(err));
      }, []);

          const [longReparation, setLongReparation] = useState(0)
          const fetchReparation = async () => {
              try {
                 await axios.get('http://localhost:2000/api/reparations/getAllReparation')
              .then((res) => {
                  console.log(res.data);
                  setLongReparation(res.data.length)
                  setReparation(res.data);
                  
              })
              } catch (error) {
                  
              }
            }
              
              useEffect( () =>{fetchReparation() },[])

    const [Conducteurs, setConducteurs] = useState([])
    const [longConducteur, setLongConducteur] = useState(0)
    
    const fetchConducteurs = async () => {
        try {
           await axios.get('http://localhost:2000/api/conducteurs/getAllConducteur')
        .then((res) => {
            console.log(res.data);
            setLongConducteur(res.data.length)
            console.log(res.data.length);
            setConducteurs(res.data);
            
        })
        } catch (error) {
            
        }
      }
        
        useEffect( () =>{fetchConducteurs() },[]) 


        const [Carburant, setCarburant] = useState([])
    
        const fetchCarburant = async () => {
            try {
               await axios.get('http://localhost:2000/api/carburants/getAllCarburant')
            .then((res) => {
                console.log(res.data);
                setCarburant(res.data);
                
            })
            } catch (error) {
                
            }
          }
            
            useEffect( () =>{fetchCarburant() },[])

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

    const handleDelete2= async (conducteurId) => {
        console.log(conducteurId)
        try {
            await axios.delete(`http://localhost:2000/api/conducteurs/delete/${conducteurId}`)
            fetchConducteurs()
        } catch (error) {
            console.log(error)
        }
       
    } */

    // La date à formater
  //const date = new Date();

  // Formatez la date et l'heure au format souhaité
  //const dateFormatee = format(date, "HH:mm");


  return (
    <>
    <GeneralLayout>
    {rol === "Responsable_Parc" && (

    <div className='pagecontent'>
        <div className="container-fluid" >

        <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Tableau de Bord</h1>
             <a href="/Afliste" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-list fa-sm text-white-50"></i>Liste</a> 
        </div>
        <div className="row">

            <div className="col-xl-2 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                   <h5>VEHICULES<p>(TOTALS)</p> </h5></div>
                                   
                               
                            </div>
                            <div className="col-auto">
                            <h3>{longVehicule}</h3>
                                {/* <i className="fas fa-car fa-2x text-gray-300"></i> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
            <div className="col-xl-2 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    <h5>DEPARTEMENTS
                                    <p>(TOTALS)</p></h5></div>
                                    
                            </div>
                            <div className="col-auto">
                            <h3>{longDepartement}</h3>
                                {/* <i className="fas fa-users fa-2x text-gray-300"></i> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
            <div className="col-xl-2 col-md-6 mb-4">
                <div className="card border-left-dark shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-dark text-uppercase mb-1">
                                   <h5> CONDUCTEURS<p>(TOTALS)</p>  </h5></div>
                                
                            </div>
                            <div className="col-auto">
                            <h3>{longConducteur}</h3>
                                {/* <i className="fas fa-user fa-2x text-gray-300"></i> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="col-xl-2 col-md-6 mb-4">
                <div className="card border-left-danger shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                   <h5>VEHICULES<p>(REPARATION)</p></h5> </div>
                                    
                            </div>
                            <div className="col-auto">
                            <h3>{longReparation}</h3>
                                {/* <i className="fas fa-car fa-2x text-gray-300"></i> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-xl-2 col-md-6 mb-4">
                <div className="card border-left-danger shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                    <h5>VEHICULES<p>(ENTRETIEN)</p></h5></div>
                                    
                            </div>
                            <div className="col-auto">
                            <h3>{longEntretien}</h3>
                                {/* <i className="fas fa-car fa-2x text-gray-300"></i> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-xl-2 col-md-6 mb-4">
                <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    <h5>AFFECTATIONS<p>(TOTALS)</p></h5></div>
                                    
                            </div>
                            <div className="col-auto">
                            <h3>{LongAffect}</h3>
                                {/* <i className="fas fa-car-side fa-2x text-gray-300"></i> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
       {/*  <div class="modal-content">
        <div class="modal-header">
        <button type="button"  data-target="/liste">listes des utilisateurs</button>
        </div>
        </div> */}
        <div className="row">

            <div className="col-xl-8 col-lg-7">
                
                <div className="card shadow mb-4"> 
                
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Listes des Utilisateurs</h6>
                    <div className="dropdown no-arrow">
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink">
                            <div className="dropdown-header">Action:</div>
                            <a className="dropdown-item" href="/Create">creer un utilisateur</a>
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
                                                <th>Name</th>
                                                <th>Email</th> 
                                                <th>Role</th>   
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                            users.map(User => {
                                                return <tr>
                                                <td>{User.nom}</td>
                                                <td>{User.email}</td>
                                                <td>{User.roleId.libelle}</td>
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
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">listes des roles</h6>
                        <div className="dropdown no-arrow">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                aria-labelledby="dropdownMenuLink">
                                <div className="dropdown-header">Actions:</div>
                                <a className="dropdown-item" href="#">Ajouter un role</a>
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
                                                <th>libelle</th>
                                                <th>Date creation</th>
                                                <th>heure</th> 
                                               {/*  <th>Action</th>  */}
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            role.map(role => {
                                            return <tr>
                                                <td>{role.libelle}</td>
                                                <td>{format(
                                                    new Date(role.createdAt),'dd /MM/ yyyy'
                                                )}</td>
                                                <td>{format(
                                                    new Date(role.createdAt),'HH:mm:ss'
                                                )}</td>
                                               {/*  <td>
                                                 <i class="edit icon"  onClick={() => handleEdit(role._id)}  ></i>
                                                <i class="trash alternate icon" onClick={() => handleDelete(role._id)}></i>
                                                </td> */} 
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
                                                    {/* <th>Actions</th> */}
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
                                                    <td>{format(
                                                    new Date(Vehicule.dateacquisition),'dd /MM/ yyyy'
                                                         )}</td>
                                                    <td>{format(
                                                    new Date(Vehicule.datemisecirc),'dd /MM/ yyyy'
                                                         )}</td>
                                                    <td>{Vehicule.kilometrerev}</td>
                                                    <td>{Vehicule.kilometrepneu}</td>
                                                    <td>{Vehicule.departementId.nom}</td>
                                                    {/* <td>
                                                        <i class="edit icon"  onClick={() => handleEdit(Vehicule._id)} ></i>
                                                        <i class="trash alternate icon" onClick={() => handleDelete(Vehicule._id)}></i>
                                                        { console.log(Vehicule._id) }
                                                    </td> */}
                                                    
                                                </tr>
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                </div>
                   
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
                                                    <th>Nom</th>
                                                    <th>Categorie</th>
                                                    <th>Addresse</th>   
                                                    <th>Contact</th>
                                                    <th>vehicule</th>
                                                    {/* <th>Actions</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                Conducteurs.map(conducteur => {
                                                return <tr>
                                                    <td>{conducteur.nom}</td>
                                                    <td>{conducteur.categorie}</td>
                                                    <td>{conducteur.addresse}</td>
                                                    <td>{conducteur.contact}</td>
                                                    <td>{conducteur.vehiculeId.immatriculation}</td> 
                                                    {/* <td>
                                                        <i class="edit icon"  onClick={() => handleEdit(conducteur._id)} ></i>
                                                        <i class="trash alternate icon" onClick={() => handleDelete2(conducteur._id)}></i>
                                                        { console.log(conducteur._id) }
                                                    </td> */}
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
                    
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">listes des departements</h6>
                        <div className="dropdown no-arrow">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                aria-labelledby="dropdownMenuLink">
                                <div className="dropdown-header">Action:</div>
                                <a className="dropdown-item" href="CDepartement">Ajouter un departement</a>
                                {/* <a className="dropdown-item" href="#">Another action</a>
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
                                                        <th>Nom</th>
                                                        <th>Service</th>
                                                        {/* <th>Actions</th> */}    
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        departements.map(departement => {
                                                        return <tr>
                                                        <td>{departement.nom}</td>
                                                        <td>{departement.service}</td> 
                                                       {/*  <td>
                                                            <i class="edit icon"  onClick={() => handleEdit(departement._id)}  ></i>
                                                            <i class="trash alternate icon" onClick={() => handleDelete(departement._id)}></i>
                                                        </td> */}
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
            <div className="row">

            <div className="col-xl-6 col-lg-7">
                
                <div className="card shadow mb-4"> 
                
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Listes des Reparations</h6>
                    <div className="dropdown no-arrow">
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink">
                            <div className="dropdown-header">Action:</div>
                            <a className="dropdown-item" href="/CReparation">Ajouter une reparation</a>
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
                                         <th>TypeREP</th>
                                         <th>MotifRep</th>
                                         <th>Montant</th>
                                         <th>Vehicule</th>   
                                        {/*  <td>Actions</td>  */}
                                     </tr>
                                 </thead>
                                 <tbody>
                                   {
                                      Reparation.map(reparation => {
                                       return <tr>
                                         <td>{reparation.typeREP}</td>
                                         <td>{reparation.motifREP}</td>
                                         <td>{reparation.montant}</td>
                                         <td>{reparation.vehiculeId.immatriculation}</td>
                                         {/* <td>
                                          <i class="edit icon"  onClick={() => handleEdit(reparation._id)}  ></i>
                                          <i class="trash alternate icon" onClick={() => handleDelete(reparation._id)}></i>
                                                        </td> */}
                                       </tr>
                                       })
                                   }
                                 </tbody>
                                    </table>
                                </div>
                            </div>
                
                </div>
                 
                </div>
    
            <div className="col-xl-6 col-lg-5">
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
                                                    <th>vehicule</th>
                                                    {/* <th>Actions</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                entretiens.map(entretien => {
                                                return <tr>
                                                    <td>{entretien.typeENT}</td>
                                                    <td>{entretien.motifENT}</td>
                                                    <td>{entretien.montant}</td>
                                                    <td>{format(
                                                    new Date(entretien.date),'dd /MM/ yyyy'
                                                         )}</td>
                                                    <td>{entretien.vehiculeId.immatriculation}</td> 
                                                    {/* <td>
                                                            <i class="edit icon"  onClick={() => handleEdit(entretien._id)}  ></i>
                                                            <i class="trash alternate icon" onClick={() => handleDelete(entretien._id)}></i>
                                                        </td> */}
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
        {/* <div className="row">

<div className="col-xl-7 col-lg-7">
    
     <div className="card shadow mb-4"> 
                    
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                    <h6 className="m-0 font-weight-bold text-primary">Liste des carburants</h6> 
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTableSimple" width="100%" cellspacing="0">
                                        <thead>
                                     <tr>
                                         <th>TypeCAR</th>
                                         <th>Quantite</th> 
                                         <th>Actions</th>   
                                     </tr>
                                 </thead>
                                 <tbody>
                                   {
                                      Carburant.map(carburant => {
                                       return <tr>
                                         <td>{carburant.typeCAR}</td>
                                         <td>{carburant.qte}</td>
                                        <td>
                                                            <i class="edit icon"  onClick={() => handleEdit(carburant._id)}  ></i>
                                                            <i class="trash alternate icon" onClick={() => handleDelete(carburant._id)}></i>
                                                        </td>
                                                </tr>
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div> 
                                </div>*/}
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
                         <a className="dropdown-item" href="VAffecte">Faire une Affectations</a>
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
                                         <th>departement</th>
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
                                            <i class="edit icon"  onClick={() => handleEdit(affect._id)} ></i>
                                            <i class="trash alternate icon" onClick={() => handleDelete2(affect._id)}></i>
                                            { console.log(affect._id) }
                                         </td> */} 
                                       </tr>
                                       })
                                   }
                                 </tbody>
                             </table>
                         </div>
                     </div>
                 </div>
                        
         <div className="row">

        <div className="col-xl-6 col-lg-7">
    
         <div className="card shadow mb-4"> 
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">listes des Visites Techniques</h6>
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
                                         <th>Validite en Mois</th>
                                         <th>Date Debut</th>   
                                         {/* <th>Actions</th> */} 
                                     </tr>
                                 </thead>
                                 <tbody>
                                   {
                                      visiteTech.map(VisiteTech => {
                                       return <tr>
                                         <td>{VisiteTech.validite}</td>
                                         <td>{format(
                                                    new Date(VisiteTech.datedebut),'dd /MM/ yyyy'
                                                         )}</td>
                                        {/*  <td>
                                         <i class="edit icon"  onClick={() => handleEdit(VisiteTech._id)}  ></i>
                                         <i class="trash alternate icon" onClick={() => handleDelete(VisiteTech._id)}></i>
                                         </td> */}
                                           </tr>
                                            })
                                        }
                                        </tbody>
                                    </table>
                                </div>
            </div>
                    </div>
                 </div>

                   
                   
                    <div className="col-xl-6 col-lg-5">
                <div className="card shadow mb-4">
                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">listes des Carburants</h6>
                        <div className="dropdown no-arrow">
                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                aria-labelledby="dropdownMenuLink">
                                <div className="dropdown-header">Dropdown Header:</div>
                                <a className="dropdown-item" href="#">Action</a>
                                {/* <a className="dropdown-item" href="#">Another action</a>
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
                                         <th>TypeCAR</th>
                                         <th>Quantite</th>   
                                          
                                     </tr>
                                 </thead>
                                 <tbody>
                                   {
                                      Carburant.map(carburant => {
                                       return <tr>
                                         <td>{carburant.typeCAR}</td>
                                         <td>{carburant.qte}</td>
                                        
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
                <div id="layoutSidenav_content">
                        <div className="container-fluid px-4">
                                <div className="card shadow mb-4">
                                <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Liste des garages</h6> 
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTableSimple" width="100%" cellspacing="0">
                                            <thead>
                                                <tr>
                                                    <th>Nom</th>
                                                    <th>TypeGAR</th>
                                                    <th>addresse</th>
                                                    <th>Contact</th>  
                                                    {/* <th>Actions</th>  */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                Garage.map(garage => {
                                                return <tr>
                                                    <td>{garage.nom}</td>
                                                    <td>{garage.typeGAR}</td>
                                                    <td>{garage.addresse}</td>
                                                    <td>{garage.contact} </td>
                                                    {/* <td>
                                                    <i class="edit icon"  onClick={() => handleEdit(garage._id)}  ></i>
                                                    <i class="trash alternate icon" onClick={() => handleDelete(garage._id)}></i>
                                                    </td> */}
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
              
                
                )}

      <> 
     {rol === "Section_Dispatching" && (
 
     <div className="row">
        <div id="layoutSidenav_content">
        <div className="container-fluid px-4">
             
        
         <div className='row'> 
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    DEPARTEMENTS(TOTALS)</div>
                                    {longDepartement}
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-users fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    VEHICULES(TOTALS)</div>
                                    {longVehicule}
                               
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-car fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                    CONDUCTEURS(TOTALS)</div>
                                    {longConducteur}
                               
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-user fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    AFFECTATIONS(TOTALS)</div>
                                    {LongAffect}
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-car-side fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
             
         </div>                
         <div className="row"> 
     <div className="col-xl-6 col-lg-7">   
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
                         <div className="dropdown-header">Actions:</div>
                         <a className="dropdown-item" href="CDepartement">Ajouter un Departement</a>
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
                                                <th>Nom</th>
                                                <th>Service</th>
                                                {/* <th>Actions</th>  */}   
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                departements.map(departement => {
                                                return <tr>
                                                <td>{departement.nom}</td>
                                                <td>{departement.service}</td> 
                                               {/*  <td>
                                                    <i class="edit icon"  onClick={() => handleEdit(departement._id)}  ></i>
                                                    <i class="trash alternate icon" onClick={() => handleDelete(departement._id)}></i>
                                                </td> */}
                                                </tr>
                                                })
                                                
                                            }
                                        </tbody>
                                    </table>
                                </div>
            </div> 
     </div> 
     </div>
     <div className="col-xl-5 col-lg-5">
    <div className="card shadow mb-4"> 
     
                       
            <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
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
                         {/* <a className="dropdown-item" href="#">Another action</a>
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
                                         <th>Nom</th>
                                         <th>Categorie</th>
                                         <th>Addresse</th>   
                                         <th>Contact</th>
                                         <th>vehicule</th>
                                         {/* <th>Actions</th> */}
                                     </tr>
                                 </thead>
                                 <tbody>
                                   {
                                      Conducteurs.map(conducteur => {
                                       return <tr>
                                         <td>{conducteur.nom}</td>
                                         <td>{conducteur.categorie}</td>
                                         <td>{conducteur.addresse}</td>
                                         <td>{conducteur.contact}</td>
                                         <td>{conducteur.vehiculeId.immatriculation}</td> 
                                        {/*  <td>
                                            <i class="edit icon"  onClick={() => handleEdit(conducteur._id)} ></i>
                                            <i class="trash alternate icon" onClick={() => handleDelete2(conducteur._id)}></i>
                                            { console.log(conducteur._id) }
                                         </td> */}
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
                         <a className="dropdown-item" href="VAffecte">Faire une Affectations</a>
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
                                         <th>departement</th>
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
                                            <i class="edit icon"  onClick={() => handleEdit(affect._id)} ></i>
                                            <i class="trash alternate icon" onClick={() => handleDelete2(affect._id)}></i>
                                            { console.log(affect._id) }
                                         </td> */} 
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
      </>

      <>
      {rol === "Section_Controle" && (
 
 <div className='pagecontent'>
 <div className="container-fluid" >
 <div className='row'>
 <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    VEHICULES(TOTALS)</div>
                                    {longVehicule}
                               
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-car fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
            {/* <div className="col-xl-2 col-md-6 mb-4">
                <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    DEPARTEMENTS(TOTALS)</div>
                                    {longDepartement}
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-users fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">CONDUCTEURS(TOTALS)
                                </div>
                                {longConducteur}
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-user fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-danger shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                    VEHICULES(REPARATION)</div>
                                    {longReparation}
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-car fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        <div className="col-xl-3 col-md-6 mb-4">
                <div className="card border-left-danger shadow h-100 py-2">
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                                    VEHICULES(ENTRETIEN)</div>
                                    {longEntretien}
                            </div>
                            <div className="col-auto">
                                <i className="fas fa-car fa-2x text-gray-300"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
   <div className="row">
      <div className="col-xl-8 col-lg-7">
     
     <div className="card shadow mb-4"> 
         
         <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
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
                     {/* <a className="dropdown-item" href="#">Another action</a>
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
                                     <th>Nom</th>
                                     <th>Categorie</th>
                                     <th>Adresse</th>
                                     <th>Contact</th>
                                     <th>vehicule</th>
                                     {/* <th>Actions</th> */}
                                 </tr>
                             </thead>
                             <tbody>
                                 {
                                     Conducteurs.map(conducteur => {
                                     return <tr>
                                     <td>{conducteur.nom}</td>
                                     <td>{conducteur.categorie}</td>
                                     <td>{conducteur.addresse}</td>
                                     <td>{conducteur.contact}</td>
                                     <td>{conducteur.vehiculeId.immatriculation}</td> 
                                     
                                    {/*  <td>
                                         <i class="edit icon"  onClick={() => handleEdit(conducteur._id)}  ></i>
                                         <i class="trash alternate icon" onClick={() => handleDelete(conducteur._id)}></i>
                                     </td> */}
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
                                     {/* <th>Actions</th>  */}   
                                 </tr>
                             </thead>
                             <tbody>
                                 {
                                     departements.map(departement => {
                                     return <tr>
                                     <td>{departement.nom}</td>
                                     <td>{departement.service}</td> 
                                    {/*  <td>
                                         <i class="edit icon"  onClick={() => handleEdit(departement._id)}  ></i>
                                         <i class="trash alternate icon" onClick={() => handleDelete(departement._id)}></i>
                                     </td> */}
                                     </tr>
                                     })
                                     
                                 }
                             </tbody>
                         </table>
                     </div>
        </div>
        </div>
     </div>
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
                                                    {/* <th>Actions</th> */}
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
                                                    {/* <td>
                                                        <i class="edit icon"  onClick={() => handleEdit(Vehicule._id)} ></i>
                                                        <i class="trash alternate icon" onClick={() => handleDelete(Vehicule._id)}></i>
                                                        { console.log(Vehicule._id) }
                                                    </td> */}
                                                    
                                                </tr>
                                                })
                                            }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                </div>
                                </div>
                                
                     <div className="card shadow mb-4">
                     <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Listes des Reparations</h6>
                    <div className="dropdown no-arrow">
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink">
                            <div className="dropdown-header">Action:</div>
                            <a className="dropdown-item" href="/CReparation">creer une reparation</a>
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
                                         <th>TypeREP</th>
                                         <th>MotifRep</th>
                                         <th>Montant</th>  
                                         {/* <th>Actions</th>  */} 
                                     </tr>
                                 </thead>
                                 <tbody>
                                   {
                                      Reparation.map(reparation => {
                                       return <tr>
                                         <td>{reparation.typeREP}</td>
                                         <td>{reparation.motifREP}</td>
                                         <td>{reparation.montant}</td>
                                         {/* <td>
                                         <i class="edit icon"  onClick={() => handleEdit(reparation._id)}  ></i>
                                         <i class="trash alternate icon" onClick={() => handleDelete(reparation._id)}></i>
                                         </td> */}
                                       </tr>
                                       })
                                   }
                                 </tbody>
                             </table>
                         </div>
                     </div>
                 </div> 

                 <div className="col-xl-12 col-lg-5">
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
                                <a className="dropdown-item" href="#">Ajouter un Entretien</a>
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
                                                    {/* <th>Actions</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                entretiens.map(entretien => {
                                                return <tr>
                                                    <td>{entretien.typeENT}</td>
                                                    <td>{entretien.motifENT}</td>
                                                    <td>{entretien.montant}</td>
                                                    {/* <td>
                                                            <i class="edit icon"  onClick={() => handleEdit(entretien._id)}  ></i>
                                                            <i class="trash alternate icon" onClick={() => handleDelete(entretien._id)}></i>
                                                        </td> */}
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
    </div>
    </div> 
     )}
      </>

      <>
      {rol === "Conducteur" &&(
        
          <div className="row">
            <div className="container-fluid px-4">
          {/*<div className="col-xl-8 col-lg-7"> */}
              
               <div className="card shadow mb-4"> 
                  
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">Listes des Conducteurs</h6>
                     {/*  <div className="dropdown no-arrow">
                          <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                          </a>
                          <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                              aria-labelledby="dropdownMenuLink">
                              <div className="dropdown-header">Action:</div>
                              <a className="dropdown-item" href="/Conducteur">Ajouter un conducteur</a>
                             {/*  <a className="dropdown-item" href="#">Another action</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">Something else here</a> 
                          </div>
                      </div> */}
                  </div>
              
                  <div className="card-body">
                                  <div className="table-responsive">
                                      <table className="table table-bordered" id="dataTableSimple" width="100%" cellspacing="0">
                                      <thead>
                                              <tr>
                                                  <th>Nom</th>
                                                  {/* <th>Categorie</th> 
                                                  <th>Addresse</th>  */}  
                                                  <th>Contact</th>
                                                  <th>vehicule</th>
                                                  {/* <th>Actions</th> */}
                                              </tr>
                                          </thead>
                                          <tbody>
                                          {
                                              Conducteurs.map(conducteur => {
                                              return <tr>
                                                  <td>{conducteur.nom}</td>
                                                  {/* <td>{conducteur.categorie}</td> 
                                                  <td>{conducteur.addresse}</td>*/}
                                                  <td>{conducteur.contact}</td>
                                                 <td>{conducteur.vehiculeId.immatriculation}</td>
                                                  {/* <td>
                                                       <i class="edit icon"  onClick={() => handleEdit(conducteur._id)} ></i> 
                                                      <i class="trash alternate icon" onClick={() => handleDelete2(conducteur._id)}></i>
                                                      { console.log(conducteur._id) }
                                                  </td> */}
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
      </>

    </GeneralLayout>
  
     </>

  
  )
}

export default Dashboard