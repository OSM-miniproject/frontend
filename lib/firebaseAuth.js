// lib/firebaseAuth.js
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { auth } from './firebaseconfig'; // Import the initialized auth

// Set up Google Sign-In
const provider = new GoogleAuthProvider();

// Function to handle sign-in
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user;
  } catch (error) {
    console.error('Error during sign-in', error);
    throw error;
  }
};

// Function to handle sign-out
export const logout = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error) {
    console.error('Error during sign-out', error);
    throw error;
  }
};
