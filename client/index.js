import React from 'react';
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom'
import App from './App.jsx';
import Login from './components/Login.jsx'
import Signup from './components/Signup.jsx'
import { BrowserRouter, RouteProps, Routes, Route} from 'react-router-dom';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App /> }/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);

