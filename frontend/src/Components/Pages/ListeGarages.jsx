import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GeneralLayout from '../Layout/GeneralLayout';

function ListeGarages() {

    const [Garage, setGarage] = useState([])

   /*  const [valeur, setValeur] = useState('');

    const handleEdit = (e) => {
        const { name, value } = e.target.value;
        setGarage({ ...Garage, [name]: value });
    }
    const fetchData = async () => {
        // Implement your data fetching logic here
        try {
            const response = await axios.get('http://localhost:2000/api/garages/getallgarage');
            const data = response.data;
            setGarage(data);
        } catch (error) {
            // Handle errors
        }
    }

    useEffect(() => {
        // Call fetchData when the component mounts (empty dependency array)
        fetchData();
    }, []);

    // If you want to set valeur when Garage changes, include Garage in the dependency array
    useEffect(() => {
        setValeur(JSON.stringify(Garage)); // Example: Convert Garage object to a string
    }, [Garage]); 
   
     const [valeur, setValeur] = useState("")

    useEffect(() => {
        const donneesRecuperees = fetchData()
        return () => {
            setValeur(donneesRecuperees)
        }
    })*/

     const fetchGarage = async () => {
        try {
           await axios.get('http://localhost:2000/api/garages/getallgarage')
        .then((res) => {
            console.log(res.data);
            setGarage(res.data);
            
        })
        } catch (error) {
            
        }
      }
        
        useEffect( () =>{fetchGarage() },[]) 

        const handleEdit= async (garageId) => {
            console.log(garageId)
           
        } 
       
    
        const handleDelete= async (garageId) => {
            console.log(garageId)
            try {
                await axios.delete(`http://localhost:2000/api/garages/delete/${garageId}`)
                fetchGarage()
            } catch (error) {
                console.log(error)
            }
           
        }

  return (
    <GeneralLayout>
    <div id="layoutSidenav_content">
             <div className="container-fluid px-4">
                     <div className="card shadow mb-4">
                     <div className="card-header py-3">
                         <h6 className="m-0 font-weight-bold text-primary">Liste des garages</h6> 
                     </div>
                     <div className="card-body">
                         <div className="table-responsive">
                             <table className="table table-bordered" id="dataTableSimple" width="100%" cellspacing="0">
                             <thead>
                                                <tr>
                                                    <th>Nom</th>
                                                    <th>TypeGAR</th>
                                                    <th>addresse</th>
                                                    <th>Contact</th>  
                                                    <th>Actions</th> 
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                Garage.map(garage => {
                                                return <tr>
                                                    <td>{garage.nom}</td>
                                                    <td>{garage.typeGAR}</td>
                                                    <td>{garage.addresse}</td>
                                                    <td>{garage.contact} </td>
                                                    <td>
                                                    <i class="edit icon"  onClick={() => handleEdit(garage._id)} name="garageId" ></i>
                                                    <i class="trash alternate icon" onClick={() => handleDelete(garage._id)}></i>
                                                    </td>
                                                </tr>
                                                })
                                            }
                                            </tbody>
                             </table>
                         </div>
                     </div>
                 </div>
             </div>
     </div>
 </GeneralLayout>
  )
}

export default ListeGarages