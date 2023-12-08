// // TestAuth.js
// import React from 'react';
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// // import { auth } from './firebase';
// // import { auth } from 'firebase/auth';
// // import {auth} from './firebase'
// import {auth} from './firebase'

// // Use getAuth directly
// const appAuth = getAuth(auth);

// function TestAuth() {
//   const handleSignUp = async () => {
//     try {
//       // Replace with your testing email and password
//       const email = 'tamana.efatwira2@gmail.com';
//       const password = 'Tam123';

//       // Create a new user account
//       await createUserWithEmailAndPassword(appAuth, email, password);
//       console.log('User created successfully!');
//     } catch (error) {
//       console.error('Error creating user:', error.message);
//     }
//   };

//   const handleSignIn = async () => {
//     try {
//       // Replace with your testing email and password
//       const email = 'tamana.efatwira2@gmail.com';
//       const password = 'Tam123';

//       // Sign in with the created user
//       await signInWithEmailAndPassword(appAuth, email, password);
//       console.log('User signed in successfully!');
//     } catch (error) {
//       console.error('Error signing in:', error.message);
//     }
//   };

//   const handleSignOut = async () => {
//     try {
//       // Sign out the current user
//       await signOut(appAuth);
//       console.log('User signed out successfully!');
//     } catch (error) {
//       console.error('Error signing out:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Test Authentication</h2>
//       <button onClick={handleSignUp}>Sign Up</button>
//       <button onClick={handleSignIn}>Sign In</button>
//       <button onClick={handleSignOut}>Sign Out</button>
//     </div>
//   );
// }

// export default TestAuth;