import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

//firebase configration
const firebaseConfig = {
    apiKey: "AIzaSyB3jzUvJfY5HADXW1Uh6k7CscHp823twWI",
    authDomain: "discord-clone-15794.firebaseapp.com",
    projectId: "discord-clone-15794",
    storageBucket: "discord-clone-15794.appspot.com",
    messagingSenderId: "374084316470",
    appId: "1:374084316470:web:fd071e0335a65a166ed797"
};
//firebasse auth
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

//signIn function popup
const signIn = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log(user);
    } catch (error) {
        console.error(error.message);
    }
};

export { auth, provider, signIn };
export default firebaseApp;
