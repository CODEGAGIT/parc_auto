import React, { useEffect, useState } from 'react'
import GeneralLayout from '../Layout/GeneralLayout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AffectVehicule() {

   
    const [numero, setNumero] = useState({})
    const [vehicules, setVehicules] = useState([]);
    const [Departements, setDepartement] = useState([]);
    const [departementSelectionne, setDepartementSelectionne] = useState('')


    const [vehiculeSelectionne, setVehiculeSelectionne] = useState('');
    let navigate = useNavigate()
    const handleChange = (e) => {
        const {name, value} = e.target
        setNumero({...numero,[name]:value})

    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            ...numero,
            vehiculeimmatriculation: vehiculeSelectionne,
            departementnom: departementSelectionne
        }
        axios.post('http://localhost:2000/api/affects/create',formData)
        .then((res) =>{
            console.log(res.data);
            navigate('/Afliste')
        })
        .catch( (error) => {
            console.log(error);
        })
    }

    //
    const fetchVehicules = async () => {
        try {
           await axios.get('http://localhost:2000/api/vehicules/getAllVehicule')
        .then((res) => {
            console.log(res.data);
            setVehicules(res.data);
            
        })
        } catch (error) {
            console.log(error)
        }
      }
        
        useEffect( () =>{fetchVehicules() },[]) 
        console.log(vehicules);


        const fetchDepartements = async () => {
            try {
               await axios.get('http://localhost:2000/api/departements/getAllDepartement')
            .then((res) => {
                console.log(res.data);
                setDepartement(res.data);
                
          
            })
            } catch (error) {
                console.log(error)
            }
          }
            
            useEffect( () =>{fetchDepartements() },[]) 
            console.log(Departements);

        
  return (
    <>
    <GeneralLayout>
    <div id="layoutAuthentication_content">
             
             <div className="container">
                 <div className="row justify-content-center">
                     <div className="col-lg-7">
                     <div className="card shadow-lg border-0 rounded-lg mt-5">
                                 <div className="card-header"><h3 className="text-center font-weight-light my-4">Affectation Vehicule/Departement</h3></div>
                                 <div className="card-body">
             <form onSubmit={handleSubmit} >
                            <div className="row mb-3">
                            <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                        <input className="form-control"  placeholder="Numero" required ='true' name='numero'  type='number' onChange={handleChange} />
                                                        <label htmlFor="inputnumero">Numero</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                    <select  className='form-control' name='vehicule' value={vehiculeSelectionne} onChange={(e) => setVehiculeSelectionne(e.target.value)}>
                                                        <option value="">Choisir un Vehicule</option>
                                                        {vehicules.map((vehicule) => (
                                                            <option key={vehicule._id} value={vehicule._id}>
                                                            {vehicule.immatriculation}
                                                            </option>
                                                        ))}
                                                        </select> 
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-floating mb-3 mb-md-0">
                                                    <select  className='form-control' name='departement' value={departementSelectionne} onChange={(e) => setDepartementSelectionne(e.target.value)}>
                                                        <option value="">Selectionner un departement</option>
                                                        {Departements.map((departement) => (
                                                            <option key={departement._id} value={departement._id}>
                                                            {departement.nom}
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

export default AffectVehicule