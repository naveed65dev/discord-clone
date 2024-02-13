import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB3jzUvJfY5HADXW1Uh6k7CscHp823twWI",
    authDomain: "discord-clone-15794.firebaseapp.com",
    projectId: "discord-clone-15794",
    storageBucket: "discord-clone-15794.appspot.com",
    messagingSenderId: "374084316470",
    appId: "1:374084316470:web:fd071e0335a65a166ed797"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;