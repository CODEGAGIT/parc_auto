import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import GeneralLayout from '../Layout/GeneralLayout';

function CreerVehicule() {
    const [vehicule, setVehicule] = useState({})
    const [Departements, setDepartement] = useState([])
    const [Marques, setMarque] = useState([]);
    const [Carburants, setCarburant] = useState([]);


    const handleChange = (e) => {
        const {name, value} = e.target
        setVehicule({...vehicule,[name]:value})
    } 
   /* const [immatriculation, setImmatriculation] = useState('');
    const [marque, setMarque] = useState('');
    const [model, setModel] = useState('');
    const [chassis, setChassis] = useState('');
    const [typeVEH, setTypeVEH] = useState('');
    const [puissance, setPuissance] = useState('');
    const [moteur, setMoteur] = useState('');
    const [typeCAR, setTypeCAR] = useState('');
    const [dateacquisition, setDateacquisition] = useState('');
    const [datemisecirc, setDatemisecirc] = useState('');
    const [kilometrerev, setKilometrerev] = useState('');  
    const [kilometrepneu, setKilometrepneu] = useState('');
    const [Departements, setDepartement] = useState([]);
    
    const handleChangeImmatriculation = (e) => {
        setImmatriculation(e.target.value)
    }
    const handleChangeMarque = (e) => {
        setMarque(e.target.value)
    }
    const handleChangeModel = (e) => {
        setModel(e.target.value)
    }
    const handleChangeChassis = (e) => {
        setChassis(e.target.value)
    }
    const handleChangeTypeVEH = (e) => {
        setTypeVEH(e.target.value)
    }
    const handleChangePuissance = (e) => {
        setPuissance(e.target.value)
    }
    const handleChangeMoteur = (e) => {
        setMoteur(e.target.value)
    }
    const handleChangeTypeCAR = (e) => {
        setTypeCAR(e.target.value)
    }
    const handleChangeDateAcqui = (e) => {
        setDateacquisition(e.target.value)
    }
    const handleChangeDateMC = (e) => {
        setDatemisecirc(e.target.value)
    }
    const handleChangeKiloR = (e) => {
        setKilometrerev(e.target.value)
    }
    const handleChangeKiloP = (e) => {
        setKilometrepneu(e.target.value)
    }*/
   

    const [departementSelectionne, setDepartementSelectionne] = useState('');
    const [marqueSelectionne, setMarqueSelectionne] = useState('');
    const [carburantSelectionne, setCarburantSelectionne] = useState('');
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {/* immatriculation,marque,model,
            chassis,typeVEH,puissance,moteur,typeCAR,
            dateacquisition,datemisecirc,kilometrerev,
            kilometrepneu, */
            ...vehicule,
            marqueId: marqueSelectionne,
            carburantId: carburantSelectionne,
            departementId: departementSelectionne,
            

        }
            
            axios.post('http://localhost:2000/api/vehicules/Create',data)
            .then((res) =>{
                console.log(res.data);
                navigate('/home')
            })
            .catch( (error) => {
                console.log(error);
            })
    }

    const fetchMarques = async () => {
        try {
           await axios.get('http://localhost:2000/api/marques/getAllMarque')
        .then((res) => {
            console.log(res.data);
            setMarque(res.data);
        })
        } catch (error) {
            
        }
      }
        
        useEffect( () =>{fetchMarques() },[]) 
        console.log(Marques);

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
            console.log(Carburants);

    const fetchDepartements = async () => {
        try {
           await axios.get('http://localhost:2000/api/departements/getAllDepartement')
        .then((res) => {
            console.log(res.data);
            setDepartement(res.data);
        })
        } catch (error) {
            
        }
      }
        
        useEffect( () =>{fetchDepartements() },[]) 
        console.log(Departements);

  return (
        <GeneralLayout>
            <div id="layoutAuthentication_content">
                
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7">
                                <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Ajouter un Vehicule</h3></div>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit} >
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputFirstName" type="text" placeholder="Entrer l'immatriculation"
                                                        required ='true' name='immatriculation' onChange={handleChange} />
                                                        <label htmlFor="inputFirstName">Immatriculation</label>
                                                    </div>
                                                </div>
                                                {/* <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name"
                                                        required ='true' name='marque' onChange={handleChange} />
                                                        <label htmlFor="inputLastName">Marque</label>
                                                    </div>
                                                </div> */}
                                                <div className="col-md-6">    
                                                    <div className="form-floating">
                                                    <select  className='form-control' name='marque' required= 'true' value={marqueSelectionne} onChange={(e) => setMarqueSelectionne(e.target.value)}>
                                                        <option value="">Selectionner une marque</option>
                                                        {Marques.map((marque) => (
                                                            <option key={marque._id} value={marque._id}>
                                                            {marque.nom}
                                                            </option>
                                                        ))}
                                                        </select>
                                                      </div>
                                                      </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputPassword" type="text" placeholder="Create a password"
                                                        required ='true' name='model' onChange={handleChange} />
                                                        <label htmlFor="inputPassword">Model</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputPasswordConfirm" type="number" placeholder="Confirm password"
                                                        required ='true' name='chassis' onChange={handleChange} />
                                                        <label htmlFor="inputPasswordConfirm">Chassis</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputFirstName" type="text" placeholder="Enter your first name"
                                                        required ='true' name='typeVEH' onChange={handleChange} />
                                                        <label htmlFor="inputFirstName">TypeVEH</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input className="form-control" id="inputLastName" type="number" placeholder="Enter your last name"
                                                        required ='true' name='puissance' onChange={handleChange} />
                                                        <label htmlFor="inputLastName">Puissance</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputFirstName" type="number" placeholder="Enter your first name"
                                                        required ='true' name='moteur' onChange={handleChange} />
                                                        <label htmlFor="inputFirstName">Moteur</label>
                                                    </div>
                                                </div>
                                               {/*  <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input className="form-control" id="inputLastName" type="text" placeholder="Enter your last name" 
                                                        required ='true' name='typeCAR' onChange={handleChange}/>
                                                        <label htmlFor="inputLastName">TypeCarburant</label>
                                                    </div>
                                                </div> */}
                                                 <div className="col-md-6">    
                                                    <div className="form-floating">
                                                    <select  className='form-control' name='carburant' value={carburantSelectionne} onChange={(e) => setCarburantSelectionne(e.target.value)}>
                                                        <option value="">Selectionner un carburant</option>
                                                        {Carburants.map((carburant) => (
                                                            <option key={carburant._id} value={carburant._id}>
                                                            {carburant.typeCAR}
                                                            </option>
                                                        ))}
                                                        </select>
                                                      </div>
                                                      </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputFirstName" type="date" placeholder="Enter your first name" 
                                                        required ='true' name='dateacquisition' onChange={handleChange}/>
                                                        <label htmlFor="inputFirstName">Date d'Acquisition</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input className="form-control" id="inputdate" type="date" placeholder="Enter your date"
                                                        required ='true' name='datemisecirc' onChange={handleChange} />
                                                        <label htmlFor="inputdate">Date de Mise Circulation</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" id="inputFirstName" type="number" placeholder="Enter your first name"
                                                        required ='true' name='kilometrerev' onChange={handleChange} />
                                                        <label htmlFor="inputFirstName">Kilometre revision</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input className="form-control" id="inputLastName" type="number" placeholder="Enter your last name"
                                                        required ='true' name='kilometrepneu' onChange={handleChange} />
                                                        <label htmlFor="inputLastName">Kilometre Pneu</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                            
                                            <div className="mt-4 mb-0">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                    <select  className='form-control' name='departement'required = 'true' value={departementSelectionne} onChange={(e) => setDepartementSelectionne(e.target.value)}>
                                                        <option value="">Selectionner un departement</option>
                                                        {Departements.map((departement) => (
                                                            <option key={departement._id} value={departement._id}>
                                                            {departement.nom}
                                                            </option>
                                                        ))}
                                                        </select>
                                                      </div>
                                                      
                                                      </div>

                                               {/*  <div className="col-md-6">
                                                    <div className="form-floating ">
                                                    <select  className='form-control' name='departement' value={departementSelectionne} onChange={(e) => setDepartementSelectionne(e.target.value)}>
                                                        <option value="">Selectionner un departement</option>
                                                        {Departements.map((departement) => (
                                                            <option key={departement._id} value={departement._id}>
                                                            {departement.nom}
                                                            </option>
                                                        ))}
                                                        </select>
                                                      </div> 
                                                        </div>*/}
                                                      </div>
                                                      
                                                
                                            

                                            <div className="mt-4 mb-0">
                                                <button className="btn btn-primary btn-block" type="submit">Creer</button>
                                            </div>
                                        </form>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
            
            </div>
        </div>
        </GeneralLayout>
    
  )
}

export default CreerVehicule