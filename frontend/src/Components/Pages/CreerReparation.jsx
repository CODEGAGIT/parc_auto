import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GeneralLayout from '../Layout/GeneralLayout';
import { Navigate, useNavigate } from 'react-router-dom';



function CreerReparation() {
  
    const [reparation, setReparation] = useState({});
    
  let Navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target
        setReparation({...reparation,[name]:value})

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
          ...reparation,
          vehiculeId: vehiculeSelectionne
      }
        axios.post('http://localhost:2000/api/reparations/create',formData)
        .then((res) =>{
            console.log(res.data);
            Navigate('/home')
           
        })
        .catch( (error) => {
            console.log(error);
        })
    }

    const [vehicules, setVehicules] = useState([]);
    const [vehiculeSelectionne, setVehiculeSelectionne] = useState('');
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
  return(
    <GeneralLayout>
       <div id="layoutAuthentication_content">
                
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Ajouter une Reparation</h3></div>
                                    <div className="card-body">
                <form onSubmit={handleSubmit} >
                    <div className="row mb-3">
                      <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <input className='form-control' type="text" placeholder="Type de la reparation" name="typeREP" required='true' onChange={handleChange} />
                              <label htmlFor="inputTypeREP">Type de reparation</label>
                              </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-floating">
                              <input className='form-control' type="text" placeholder="Motif de la reparation" name="motifREP" required='true' onChange={handleChange} />
                              <label htmlFor="inputmotif">Motif de la Reparation</label>
                              </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-floating">
                              <input className='form-control' type="number" placeholder="Montant de la reparation" name="montant" required='true'  onChange={handleChange} />
                              <label htmlFor="inputmotif">Montant de la Reparation</label>
                              </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-floating">
                              <input className='form-control' type="Date" placeholder="Date" name="date" required='true' onChange={handleChange} />
                              <label htmlFor="inputService">Date</label>
                              </div>
                              </div>
                           {/*   <div className="row mb-3">  
                                    <div className="col-md-6">*/}
                                         <div className="form-floating ">
                                                    <select  className='form-control' name='vehicule' value={vehiculeSelectionne} onChange={(e) => setVehiculeSelectionne(e.target.value)}>
                                                        <option value="">Selectionner un vehicule</option>
                                                        {vehicules.map((vehicule) => (
                                                            <option key={vehicule._id} value={vehicule._id}>
                                                            {vehicule.immatriculation}
                                                            </option>
                                                        ))}
                                                        </select>
                                          </div>
                                  {/*  </div>
                                </div>  */}
                              <div className="mt-4 mb-0">
                                    <button className="btn btn-primary btn-block" type="submit">Envoyer</button>
                              </div>
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

export default CreerReparation