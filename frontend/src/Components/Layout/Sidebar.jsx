import React from 'react'
import { useAuth } from '../../Context/authentifier';

function Sidebar() {

    const {authData} = useAuth()
    const id = authData.Id
    const rol = authData.Role
    console.log(rol, id);
    
  return (
    
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            
    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/home">
        <div className="sidebar-brand-icon rotate-n-15">
            <i className=""></i>
            
        </div>
        <div className="sidebar-brand-text mx-3"><h5>Parc Auto</h5>{/* <sup>1</sup> */}</div>
        
    </a>
    <hr className="sidebar-divider my-0"/>

     <> 
     {rol === "Responsable_Parc" &&( 
        <li className="nav-item active">
        <a className="nav-link" href='/home'>
        <i className="fas fa-fw fa-user-alt"></i>
            <span ><h6>Espace {rol}</h6></span>
        </a>
        <hr className="sidebar-divider my-0"/>
        <div className="sidebar-heading">
     ACTIONS
   </div>

    </li>
     )}
    </> 

    <> 
     {rol === "Section_Dispatching" &&(
    <li className="nav-item active">
        <a className="nav-link" href='/home'>
        <i className="fas fa-fw fa-user-alt"></i>
            <span>Espace {rol}</span>
        </a>
        <hr className="sidebar-divider my-0"/>
        <div className="sidebar-heading">
     ACTIONS
   </div>  
    </li>
     )}
    </>
    
    <> 
     {rol === "Section_Controle" &&(
        <li className="nav-item active">
        <a className="nav-link" href='/home'>
        <i className="fas fa-fw fa-user-alt"></i>
            <span >Espace {rol}</span>
        </a>
        <hr className="sidebar-divider my-0"/>
        <div className="sidebar-heading">
     ACTIONS
   </div>  
    </li>
     )}
    </>

    <>
      {rol === "Conducteur" &&(
         <li className="nav-item active">
         <a className="nav-link" href='/home'>
         <i className="fas fa-fw fa-user-alt"></i>
             <span >Espace {rol}</span>
         </a>
         </li>
              
      )}
     </>
   
    {/* <hr className="sidebar-divider my-0"/>

    <div className="sidebar-heading">
     ACTIONS
   </div> */}
    

    {/* <li className="nav-item active">
        <a className="nav-link" href='/home'>
            <i className="fas fa-fw fa-table"></i>
            <span >Tableau de bord</span></a>
    </li> */}
  
    
   {/* 
    <div className="sidebar-heading">
        ACTIONS
    </div> */}
    <hr className="sidebar-divider my-0"/>
    <> 
    {rol === "Responsable_Parc" &&(
     <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-folder"></i>
            <span>Taches</span>
        </a>
        <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Listes:</h6>
                <a className="collapse-item" href="/liste">listes des utilisateurs</a> 
                <a className="collapse-item" href="/RoleListe">listes des Roles</a>
                <a className="collapse-item" href="/show">listes des vehicules</a>
                <a className="collapse-item" href="/Departement">listes des departements</a>
                <a className="collapse-item" href="/Rliste">listes des reparations</a>
                <a className="collapse-item" href="/Eliste">listes des entretiens</a> 
                <a className="collapse-item" href="/Cliste">listes des Conducteurs</a> 
                <a className="collapse-item" href="/Gliste">listes des Garages</a>  
                <a className="collapse-item" href="/Carliste">listes des Carburants</a> 
                <a className="collapse-item" href="/Vliste">listes des Visite Techniques</a>
                <a className="collapse-item" href="/VAffecte">Affecter Vehicule</a> 
                <a className="collapse-item" href="/Afliste">Affectation liste</a>
                
            </div>
        </div>
    </li>
    
    )}
    </>

    <> 
     {rol === "Section_Dispatching" &&(

    <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-fw fa-folder"></i>
            <span>Dispatching</span>
        </a>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
            <h6 className="collapse-header">AJOUTER:</h6>
                <a className="collapse-item" href="/Cvehicule">vehicules</a>
                <a className="collapse-item" href="/VAffecte">Affecter Vehicule</a> 
                <div className="collapse-divider"></div>
                <h6 className="collapse-header">Listes:</h6>
                <a className="collapse-item" href="/show">listes des vehicules</a>
                <a className="collapse-item" href="/Departement">listes des departements</a>
                <a className="collapse-item" href="/Cliste">listes des Conducteurs</a>
                <a className="collapse-item" href="/Afliste">Affectation liste</a>
            </div>
        </div>
    </li>
    
    )}
    </>
    <hr className="sidebar-divider my-0"/>
    <>
    {rol === "Section_Controle" && (
       
        <li className="nav-item">
        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseThree"
            aria-expanded="true" aria-controls="collapseThree">
            <i className="fas fa-fw fa-folder"></i>
            <span>Controle</span>
        </a>
        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">AJOUTER:</h6>
                <a className="collapse-item" href="/Cvehicule">vehicules</a>
                <a className="collapse-item" href="/CReparation">reparations</a>
                <a className="collapse-item" href="/CMarque">Marque</a>
                <div className="collapse-divider"></div>
                <h6 className="collapse-header">Listes:</h6>
                <a className="collapse-item" href="/show">listes des vehicules</a>
                <a className="collapse-item" href="/Rliste">listes des reparations</a>
                <a className="collapse-item" href="/Eliste">listes des entretiens</a>
                <a className="collapse-item" href="/Gliste">listes des Garages</a>  
                <a className="collapse-item" href="/Carliste">listes des Carburants</a>
                <a className="collapse-item" href="/Vliste">listes des Visite Techniques</a>
            </div>
        </div>
       
    </li>
    
    )}
    </>
    
    </ul>
  )
}

export default Sidebar