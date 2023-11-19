import {React,useEffect,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import GeneralLayout from '../Layout/GeneralLayout'
import { useAuth } from '../../Context/authentifier'


function CreateUser() {

  const {authData} = useAuth()
    const id = authData ? authData.Id : null
    const rol = authData ? authData.Role : null

    console.log(rol, id);
  
  const [user, setUser] = useState({})
  const [roles, setRoles] = useState([])
  //const [roleSelectionne, setRoleSelectionne] = useState('');

  
  let navigate = useNavigate()

  const handleChange = (e) => {
    const {name, value} = e.target
    setUser({...user,[name]:value})
  }

    // Handling the form submission
    	const handleSubmit = (e) => {
		e.preventDefault()
    const formData = {
      ...user
      //roleId: roleSelectionne
      }
    axios.post('http://localhost:2000/api/users/create',formData)
    .then( (res)=>{
      console.log(res.data)
      navigate('/home')}
      )
    .catch( (error) => {
      console.log(error)
    })
	    } 

      const fetchRoles = async () => {
        try {
           await axios.get('http://localhost:2000/api/roles/getAllRole')
        .then((res) => {
            console.log(res.data);
            setRoles(res.data);
        })
        } catch (error) {
            
        }
      }
        
        useEffect( () =>{fetchRoles() },[]) 
        console.log(roles);

/* 
  const [options, setOptions] = useState([]);


  useEffect(() => {
     Remplacez l'URL par l'URL de votre API MongoDB
    axios.get('http://localhost:2000/api/users/getAllRole')
      .then((response) => {
         Assurez-vous que votre API renvoie les données sous forme d'un tableau d'objets
        const data = response.data

         Mappez les données en éléments <option>
        const optionElements = data.map((item) => (
          <option key={item._id} value={item._id}>
            {item.libelle} {/* Remplacez "nom" par le champ que vous souhaitez afficher dans le select 
          </option>
        ));

         Mettez à jour le state avec les options
        setOptions(optionElements);
      })
      .catch((error) => {
        console.error('Erreur lors de la récupération des données MongoDB :', error);
      });
  }, []);
    <div>
              <select name='role'  onChange={handleChange}>
                <option value="">Sélectionnez une option</option>
                {options}
              </select>
            </div><br/>

  
  */

  return (

    
    <GeneralLayout>
    
    <div id="layoutAuthentication_content">
                
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-7">
                <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header"><h3 className="text-center font-weight-light my-4"> CREER UN COMPTE </h3></div>
                    <div className="card-body">  
                    <form onSubmit={handleSubmit} >
                      <div className="row mb-3">
                           <div className="col-md-6">
                                 <div className="form-floating mb-3 mb-md-0">
                                 <input className='form-control' type="text"  placeholder="Nom" name='nom' required ={true}
                                   onChange={handleChange}/>
                                 <label htmlFor="inputName">Nom</label>
                                     </div>
                                    </div>
                                               
                                   <div className="col-md-6">
                                   <div className="form-floating">
                             <input className='form-control' type="email" placeholder="Adresse Email" name='email' required ={true}  onChange={handleChange}/>
                             <label htmlFor="inputemail">Adresse Email</label>
                                     </div>
                                    </div>
                      </div>              
                          <div className="row mb-3">   
                                   <div className="col-md-6">
                                   <div className="form-floating mb-3 mb-md-0">
                              <input className='form-control' type="password"  placeholder="Mot de Passe" name='password' required ={true} onChange={handleChange}/>
                              <label htmlFor="inputpwd">Mot de Passe</label>
                                     </div>
                                    </div>
                                               
                                   <div className="col-md-6">
                                   <div className="form-floating">
                              <input className='form-control' type="password"  placeholder="Repeter mot de passe" name='rpwd' required ={true}/>  
                              <label htmlFor="inputrepwd">Repeter le mot de Passe</label>
                                     </div>
                                    </div>
                                    </div>

                             <div className="row mb-3">
                                    <div className="mt-4 mb-0">
                                     <select className='form-control' name='role' onChange={handleChange}>
                                      <option value="">Selectionner une option</option>
                                      <option value="Responsable_Parc">Responsable Parc</option>
                                      <option value="Section_Dispatching">Section Dispatching</option>
                                      <option value="Section_Controle">Section Controle</option>
                                      <option value="Conducteur">Conducteur</option>
                                    </select> 
                                    {/*<select  className='form-control' name='role' value={roleSelectionne} onChange={(e) => setRoleSelectionne(e.target.value)}  required = {true}>
                                                        <option value="">Selectionner un role</option>
                                                        {roles.map((role) => (
                                                            <option key={role._id} value={role._id}>
                                                            {role.libelle}
                                                            </option>
                                                           
                                                        ))}
                                                        
                                                        </select>   */}                                
                                    </div>
                                      <div className="mt-4 mb-0">
                                          <button className="btn btn-primary btn-block" type="submit">Enregistrer</button>
                                      </div>
                                    <p className="message">Deja Enregistrer? <a href="/">Se Connecter</a></p>
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

export default CreateUser