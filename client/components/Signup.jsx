import React, { useState } from 'react';
//import { useNavigate } from 'react-router-dom';

export default function Signup(props) {
  //const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
 
  function validateForm(){
    return email.length > 0 && password.length > 0;
  } 

  //TODO: Make a post request to DB to store the user 
  function handleSubmit(e){
    e.preventDefault();
    console.log(email, password, confirmPassword)
   
  }
  
  return (
    <div id='signup-body'>
        <form id='signup-box' onSubmit={handleSubmit}>
            <span className='primary-text'>SIGN UP</span>
            <div id='signup-boxes'>
                <div>
                    <input type='email'
                    placeholder="Email"
                    name="email"
                    className="signup-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input type="password"
                    placeholder="Password"
                    name="password"
                    className="signup-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="password"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    className="signup-input"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
            </div>
            <div id='signup-button'>
                <button type='submit' id='login-btn' disabled={!validateForm()}>Sign Up</button>
            </div>
        </form>
        </div>
  )
} 