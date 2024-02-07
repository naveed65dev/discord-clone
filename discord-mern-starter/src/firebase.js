import firebase from 'firebase'

const firebaseConfig = {
    
        apiKey: "AIzaSyBaW3h3wzihtyvxX6OPIEpqOq-ivQwogmg",
        authDomain: "discord-clone-live-937e9.firebaseapp.com",
        projectId: "discord-clone-live-937e9",
        storageBucket: "discord-clone-live-937e9.appspot.com",
        messagingSenderId: "519597402004",
        appId: "1:519597402004:web:3f3498a4a1d6683af21181"
     
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db