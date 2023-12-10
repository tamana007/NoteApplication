import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from './firebase'
import { createUserWithEmailAndPassword } from "firebase/auth"



function Register({setHaveAccount,setShowRegister}) {

  const[name,setName]=useState([]);
  const[email,setEmail]=useState([]);
  const[password,setPassword]=useState([]);


  // function handleRegister(){
  //   // setHaveAccount(false)
  //   setShowRegister(false)
  //   console.log('Signed up',name);
  // }

  const handleRegister = async () => {
    setShowRegister(false)
    try {
      // Create a new user account with email and password
      await createUserWithEmailAndPassword(auth, email, password);
      

      // Registration successful, you can add further actions here
      console.log('User registered successfully!');
    } catch (error) {
      // Handle registration errors
      console.error('Error registering user:', error.message);
    }
  };



  return (
    <div className="registration-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e)=>setName(e.target.value)}

          // value={name}
          // onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" >
     Sign up
      </button>
      </form>
    </div>
  );
  
}

export default Register