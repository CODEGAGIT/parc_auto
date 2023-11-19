import {React,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../Context/authentifier';


function Login() {
  const [nom, setNom] = useState('');
  const [password, setPassword] = useState('');
  const [ error, setError] = useState('')
  const [ LoggedIn, setLoggedIn] = useState(false)

  const { handleLogin }  = useAuth()
  let navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
     /*  await handleLogin(nom, password)
      navigate('/')
      setLoggedIn(true) */
    
    
      await handleLogin(nom, password)
      navigate('/home')
      setLoggedIn(true)

    }catch (error) {
      navigate('/Page')
      setError(error.response ? error.response.data.message : error.message)
    }

   
  }
  const handleChangeName = (e) => {
    setNom(e.target.value)
    //console.log(nom);
  }
  const handleChangePwd =(e) => {
    setPassword(e.target.value)
    //console.log(password);
  }

  return (
    <div id="layoutAuthentication_content">
                
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-lg-7">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header"><h3 className="text-center font-weight-light my-4">CONNEXION</h3></div>
                        <div className="card-body">
                  <form onSubmit={handleSubmit} >
                    <div className="row mb-3">
                      <div className="col-md-6">
                            <div className="form-floating mb-3 mb-md-0">
                            <input className='form-control' type="text" placeholder="Nom d'Utilisateur" name="uname" required='true'
                             value={nom} onChange={handleChangeName} />
                              <label htmlFor="inputuname">Nom d'Utilisateur</label>
                              </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="form-floating">
                              <input className='form-control' type="password" placeholder="Mot de Passe" name="psw" required='true' 
                              value={password} onChange={handleChangePwd} />
                              <label htmlFor="inputmotif">Mot de Passe</label>
                              </div>
                              </div>
          
                              <div className="mt-4 mb-0">
                                    <button className="btn btn-primary btn-block" type="submit">Se Connecter</button>
                              </div>
                    <p className="message">Pas de Compte? <a href="/Create">Creer un Compte</a></p> 
                    </div>
               
              </form>
              </div>
              </div>
    </div>
    </div>
     </div>
     </div>
      
  )
}

export default Login