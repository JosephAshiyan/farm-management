import { initializeApp } from "firebase/app";

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_TORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
// const app = initializeApp(config);

firebase.initializeApp(config);

export const auth = firebase.auth();
export const db = firebase.firestore();
// export const remoteConfig = firebase.remoteConfig();



// import React from 'react'

// function FirebaseUtil() {
//   return (
//     <div>F</div>
//   )
// }

// export default FirebaseUtil