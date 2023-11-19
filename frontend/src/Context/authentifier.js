import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(() => {
    const storedAuthData = JSON.parse(sessionStorage.getItem('authData'))
    return storedAuthData || null
  })

  // Fonction pour mettre à jour les informations d'authentification après une connexion réussie
  const handleLogin = async (nom, password) => {
    try {
      const response = await axios.post('http://localhost:2000/api/users/Login', {
        nom: nom,
        password: password,
      })
console.log(response)
      const {  id, role } = response.data

      // Mise à jour de l'authData avec les informations d'authentification
      setAuthData({
        //token: token,
        Id: id,
        Role: role,
      })
      // Stocker les informations d'authentification dans le sessionStorage
      sessionStorage.setItem(
        'authData',
        JSON.stringify({
          //token: token,
          Id: id,
          Role: role,
        })
      )
    } catch (error) {
      throw error.response ? error.response.data : error.message
    }
  }

  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  }

  return (
    <AuthContext.Provider value={{ authData, setAuthData, handleLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)