// Import necessary functions from Firebase SDKs
import { initializeApp ,getApp,getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0L8Mxw9nj7a_z7GJVeLWTPMX_uBC1uuM",
    authDomain: "otp-verification-d06f5.firebaseapp.com",
    projectId: "otp-verification-d06f5",
    storageBucket: "otp-verification-d06f5.appspot.com",
    messagingSenderId: "194876578115",
    appId: "1:194876578115:web:696f960d237155fc0637f6",
    measurementId: "G-4KC0NQ8Z6D"
};


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);


