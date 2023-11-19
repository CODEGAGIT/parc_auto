import axios from 'axios';
import React, { useState, useEffect } from 'react'
import GeneralLayout from '../Layout/GeneralLayout';
import { useNavigate } from 'react-router-dom'
//import Vehicule from '../../../../backend/Models/Vehicule';

function CreerConducteur() {

    const [conducteur, setConducteur] = useState({});

    const [vehicules, setVehicules] = useState([]);
   // const [selectVehicules, setSelectVehicules] = useState([])

    const [vehiculeSelectionne, setVehiculeSelectionne] = useState('');

    let navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target
        setConducteur({...conducteur,[name]:value})

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            ...conducteur,
            vehiculeId: vehiculeSelectionne
        }
        axios.post('http://localhost:2000/api/conducteurs/create',formData)
        .then((res) =>{
            console.log(res.data);
            navigate('/home')
        })
        .catch( (error) => {
            console.log(error);
        })
    }

   //pour faire le getAll
    const fetchVehicules = async () => {
        try {
           await axios.get('http://localhost:2000/api/vehicules/getAllVehicule')
        .then((res) => {
            console.log(res.data);
            setVehicules(res.data);
            
       // setSelectVehicules('')/
        })
        } catch (error) {
            
        }
      }
        
        useEffect( () =>{fetchVehicules() },[]) 
        console.log(vehicules);
           


  return (
    <>   
    
    <GeneralLayout>
    <div id="layoutAuthentication_content">
             
             <div className="container">
                 <div className="row justify-content-center">
                     <div className="col-lg-7">
                     <div className="card shadow-lg border-0 rounded-lg mt-5">
                                 <div className="card-header"><h3 className="text-center font-weight-light my-4">Ajouter un Conducteur</h3></div>
                                 <div className="card-body">
             <form onSubmit={handleSubmit} >
                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" type="text" placeholder="nom" required ='true' name='nom' onChange={handleChange} />
                                                        <label htmlFor="inputnom">Nom</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" type="text" placeholder="categorie" required ='true' name='categorie'  onChange={handleChange} />
                                                        <label htmlFor="inputcategorie">Categorie</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control" type="text" placeholder="Adresse" required ='true' name='addresse'  onChange={handleChange} />
                                                        <label htmlFor="inputAdresse">Adresse</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating">
                                                        <input className="form-control" type="tel" placeholder="Contact" required ='true' name='contact' onChange={handleChange} />
                                                        <label htmlFor="inputcontact">Contact</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input className='form-control' type="Date" placeholder="Date" name="date" required='true' onChange={handleChange} />
                                                    <label htmlFor="inputService">Date</label>
                                                </div>
                                            </div>
                                           
                                               {/*   <div className="mt-4 mb-0"> */}
                                               <div className="col-md-6">
                                               <div className="form-floating">
                                                    <select  className='form-control' name='vehicule' value={vehiculeSelectionne} onChange={(e) => setVehiculeSelectionne(e.target.value)}  required = 'true'>
                                                        <option value="">Selectionner un vehicule</option>
                                                        {vehicules.map((vehicule) => (
                                                            <option key={vehicule._id} value={vehicule._id}>
                                                            {vehicule.immatriculation}
                                                            </option>
                                                           
                                                        ))}
                                                        
                                                        </select>
                                                    </div>        
                                                </div>
                                            </div>  
                                            
                           <div className="mt-4 mb-0">
                                 <button className="btn btn-primary btn-block" type="submit">Envoyer</button>
                           </div>
                         
                      
               </form>
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

export default CreerConducteur