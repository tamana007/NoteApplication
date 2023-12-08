import React from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react';
// import {firebase}
import {auth} from './firebase'

function Login({onLoginSuccess}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message if there is one */}
    </div>
  );
};

export default Login