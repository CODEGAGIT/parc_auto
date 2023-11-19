import './App.css'
import {Route,Routes } from 'react-router-dom'
import Dashboard from './Components/Pages/Dashboard'
import CreateUser from './Components/Pages/CreateUser'
import Login from './Components/Pages/Login'
import Pages from './Components/Layout/404'
import User from './Components/Pages/ListeUsers'
import Vehicule from './Components/Pages/ListeVehicules'
import CreateV from './Components/Pages/CreerVehicule';
import CreateR from './Components/Pages/CreerReparation'
import Reparation from './Components/Pages/ListeReparations'
import Entretien from './Components/Pages/ListeEntretiens';
import Conducteur from './Components/Pages/ListeConducteurs'
import Garage from './Components/Pages/ListeGarages'
import Carburant from './Components/Pages/ListeCarburants'
import Role from './Components/Pages/ListeRoles'
import DIspatching from './Components/Pages/DIspatching'
import CreerC from './Components/Pages/CreerConducteur'
import Departement from './Components/Pages/ListeDepartements'
import CDepartement from './Components/Pages/CreerDepartement'
import Visite from './Components/Pages/ListeVisitTech'
import AffectVehicule from './Components/Pages/AffectVehicule'
import ListeAffect from './Components/Pages/ListeAffect'
import CreerMarque from './Components/Pages/CreerMarque'
import CreateEntretien from './Components/Pages/CreateEntretien'




function App() {
  return (
      <Routes>
              
           <Route path='/' element={<Login/>}  /> 
           <Route path='/home' element={<Dashboard/>}  />
           <Route path='/liste' element={<User/>} />
           <Route path='/Page' element={<Pages/>}/> 
           <Route path='/show' element={<Vehicule/> } />  
           <Route path='/Cvehicule' element={<CreateV/>} />
           <Route path='/CReparation' element={<CreateR/>}/>
           <Route path='/Rliste' element={<Reparation/>} />
           <Route path='/Eliste' element={<Entretien/>} />
           <Route path='/Cliste' element={<Conducteur/>} />
           <Route path='/Gliste' element={<Garage/>} />
           <Route path='/Carliste' element={<Carburant/>} />
           <Route path='/RoleListe' element={<Role/>} />
           <Route path='/Dispatching' element={<DIspatching/>}/>
           <Route path='/Conducteur' element={<CreerC/>}/>
           <Route path='/Departement' element={<Departement/>}/>
           <Route path='/Create' element={<CreateUser/>}  /> 
           <Route path='/Vliste' element={<Visite/>}/>
           <Route path='/CDepartement' element={<CDepartement/>}/>
           <Route path='/VAffecte' element={<AffectVehicule/>}/>
           <Route path='/Afliste' element={<ListeAffect/>}/>
           <Route path='/CMarque' element= {<CreerMarque/>}/>
           <Route path='/CEntretien' element={<CreateEntretien/>}/>
           

      </Routes>
  )
}

export default App