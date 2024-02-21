import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import axios from './axios';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3jzUvJfY5HADXW1Uh6k7CscHp823twWI",
  authDomain: "discord-clone-15794.firebaseapp.com",
  projectId: "discord-clone-15794",
  storageBucket: "discord-clone-15794.appspot.com",
  messagingSenderId: "374084316470",
  appId: "1:374084316470:web:fd071e0335a65a166ed797"
};

// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

// Function to handle authentication result
const handleAuthResult = async (user) => {
  try {
          
        const uid = user.uid
        
    const response = await axios.post('/api/login',{uid});
    const token = response.data.token;

    // Log the token or perform other actions
    console.log('Generated Token:', token);
  } catch (error) {
    console.error('Error handling auth result:', error);
  }
};

// Function to sign in with Google popup
const signIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    
    // Handle the authentication result
    handleAuthResult(user);

    console.log('User:123', user);
  } catch (error) {
    console.error('Error during sign-in:', error.message);
  }
};

export { auth, provider, signIn };
export default firebaseApp;
