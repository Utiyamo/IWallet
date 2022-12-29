import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID 
}

console.log(firebaseConfig);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const firebaseApp = {
    signIn: function(email, password){
        console.log("Firebase");
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredencial) => {
                const message = {
                    error: '',
                    isValid: true,
                    user: userCredencial.user
                }
                return message;
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;

                const message = {
                    error: `${errorCode} / ${errorMessage}`,
                    isValid: false,
                    user: null
                };
                return message;
            });
    },
    signUp: function(email, password) {
        console.log("Firebase");
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then( userCredencial => {
                const message = {
                    error: '',
                    isValid: true,
                    user: userCredencial.user
                };

                return message;
            })
            .catch(error => {
                const errorCode = error.code;
                const errorMessage = error.message;

                const message = {
                    error: `${errorCode} / ${errorMessage}`,
                    isValid: false,
                    user: null
                };

                return message;
            })
    },
    getUsers: async function(){
        const users = collection(db, 'users');
        const userSnapshot = await getDocs(users);
        const usersList = userSnapshot.docs.map(doc => doc.data());

        return usersList;
    }
}

export default firebaseApp;