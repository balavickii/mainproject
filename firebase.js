
import { initializeApp,getApp,getApps } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDLcZ9FY2eBf0rnYgI6o_hvih5OU-bZew8",
  authDomain: "lawfriend-1fb04.firebaseapp.com",
  projectId: "lawfriend-1fb04",
  storageBucket: "lawfriend-1fb04.appspot.com",
  messagingSenderId: "658724140721",
  appId: "1:658724140721:web:4aa06a3bfc1e75dfec1490"
};

// Initialize Firebase
const app=getApps.length>0?getApp():initializeApp(firebaseConfig)

const auth=getAuth(app)
const db=getFirestore(app)

export {app,auth,db}
