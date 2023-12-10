import React from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react';
// import {firebase}
import {auth} from './firebase'
import Register from './Register';

function Login({onLoginSuccess,setShowRegister}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const[registerClick,setRegisterClick]=useState(false);


  function handleRegister(){
    setRegisterClick(true)
    // setHaveAccount(false)
    setShowRegister(true)
    console.log('registered');

  }

  const handleLogin = async (e) => {
    e.preventDefault();
    // setShowRegister(true);

    const auth = getAuth(); // Get the authentication object

    try {
      // Attempt to sign in with the provided email and password
      await signInWithEmailAndPassword(auth, email, password);

      // If successful, notify the parent component (App) of the successful login
      onLoginSuccess();
    } catch (error) {
      console.error('Error signing in:', error.message);
      setError('Invalid email or password. Please try again.'); // Set an error message
    }
  };
   return (
    // <div className='login-container'>
    //   <h2 className='login-title'>Login</h2>
    //   <form onSubmit={handleLogin}>
    //     <label className='input-label'>
    //      <span className='input-label'>Email:</span> 
    //       <input className='inpt-login' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    //     </label>
    //     <br />
    //     <label>
    //       <span className='input-label'>Password:</span>
    //       <input className='inpt-login-2' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    //     </label>
    //     <br />
    //     <button type="submit">Login</button>
    //   </form>
    //   {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if there is one */}
    // </div>




<div className='login-wrapper'>
<div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
      <button type="submit"
      >
        Login
      </button>
      <button className="register-btn" type="button" onClick={handleRegister}>
        Register
      </button>
      </form>
      {/* <Register/> */}
    </div>
</div>
  );
};

export default Login