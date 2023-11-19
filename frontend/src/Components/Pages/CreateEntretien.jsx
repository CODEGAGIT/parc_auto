import React, { useEffect, useState } from 'react'
import GeneralLayout from '../Layout/GeneralLayout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CreateEntretien() {
    const [entretien, setEntretien] = useState({});

    let navigate = useNavigate()
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setEntretien({...entretien,[name]:value})

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const forData = {
            ...entretien,
            vehiculeId: vehiculeSelectionne
        }
        axios.post('http://localhost:2000/api/entretiens/create',forData)
        .then((res) =>{
            console.log(res.data);
            navigate('/home')
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


  return (
   
    <>
    <GeneralLayout>
    <div id="layoutAuthentication_content">
                
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Ajouter un Entretien</h3></div>
                            <div className="card-body">
                <form onSubmit={handleSubmit} >
                    <div className="row mb-3">
                      <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <input className='form-control' type="text" placeholder="type d'entretien" name="typeENT" required='true' onChange={handleChange} />
                              <label htmlFor="inputnom">Type d'entretien</label>
                              </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-floating">
                              <input className='form-control' type="text" placeholder="motif" name="motifENT" required='true' onChange={handleChange} />
                              <label htmlFor="inputService">motif de l'entretien</label>
                              </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-floating">
                              <input className='form-control' type="number" placeholder="montant" name="montant" required='true' onChange={handleChange} />
                              <label htmlFor="inputService">montant</label>
                              </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-floating">
                              <input className='form-control' type="Date" placeholder="Date" name="date" required='true' onChange={handleChange} />
                              <label htmlFor="inputService">Date</label>
                              </div>
                              </div>
                              
                                    <div className="mt-4 mb-0">
                            
                                         <div className="form-floating">
                                                    <select  className='form-control' name='vehicule' value={vehiculeSelectionne} onChange={(e) => setVehiculeSelectionne(e.target.value)}>
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
                                 <button className="btn btn-primary btn-block" type="submit">Enregistrer</button>
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

export default CreateEntretien