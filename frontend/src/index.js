import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Rooter} from 'react-router-dom';
import { AuthProvider } from './Context/authentifier';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Rooter>
     <React.StrictMode>
     <AuthProvider>
      <App />
    </AuthProvider>
     </React.StrictMode>
  </Rooter>
  
);

reportWebVitals();
