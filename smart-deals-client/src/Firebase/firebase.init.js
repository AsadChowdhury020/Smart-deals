// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ-pK8IplI3MTzxKGeevqnMSmm5meirdI",
  authDomain: "smart-deals-bcdf1.firebaseapp.com",
  projectId: "smart-deals-bcdf1",
  storageBucket: "smart-deals-bcdf1.firebasestorage.app",
  messagingSenderId: "536028768317",
  appId: "1:536028768317:web:049edff95f6759a946a254"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

