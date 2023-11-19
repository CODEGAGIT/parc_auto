import React, { useState } from 'react'
import GeneralLayout from '../Layout/GeneralLayout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function CreerDepartement() {

    const [departement, setDepartement] = useState({});

    let navigate = useNavigate()
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setDepartement({...departement,[name]:value})

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:2000/api/departements/create',departement)
        .then((res) =>{
            console.log(res.data);
            navigate('/home')
        })
        .catch( (error) => {
            console.log(error);
        })
    }

  return (
    <>
    <GeneralLayout>
    <div id="layoutAuthentication_content">
                
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Ajouter un Departement</h3></div>
                            <div className="card-body">
                <form onSubmit={handleSubmit} >
                    <div className="row mb-3">
                      <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                              <input className='form-control' type="text" placeholder="nom" name="nom" required='true' onChange={handleChange} />
                              <label htmlFor="inputnom">Nom</label>
                              </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-floating">
                              <input className='form-control' type="text" placeholder="Service" name="service" required='true' onChange={handleChange} />
                              <label htmlFor="inputService">Service</label>
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

export default CreerDepartement