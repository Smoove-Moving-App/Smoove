import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar.jsx';



function Login(){
  const[email, setEmail] = useState(""); 
  const[password, setPassword] = useState("");

  function validateForm(){
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(e){
    e.preventDefault();
    fetch(`user/login/${email}/${password}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        if(!data) {
          alert('Invalid login');
          setEmail('');
          setPassword('');
        } else { 
            // Get data to app
            props.setUser(data);
            navigate(`/upload`);
        }
      })
      .catch(err => alert('please try again'));
  }

return (
  <div id='login-body'>
  <Navbar />
  <div id='main-login-comp'>
  <h1 className='primary-text' id='site-title'>SMOOVE</h1>
    <form id='login-box' onSubmit={handleSubmit}>
        <span id='login-title' className='primary-text'>LOG IN</span>
        <div id='login-boxes'>
            <div>
                <input type='email'
                placeholder="Email"
                name="email"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <input type="password"
                placeholder="Password"
                name="password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
        </div>
        <div id='login-button'>
            <button type='submit' id='login-btn' disabled={!validateForm()}>Login</button>
        </div>
    </form>
  </div>
  </div>
)

}

export default Login;