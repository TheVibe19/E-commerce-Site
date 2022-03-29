import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const config = {
    apiKey: "AIzaSyDjzmCOe3d9E6v773A_b7oQKc_qHNXKi-U",
    authDomain: "store-f97a9.firebaseapp.com",
    projectId: "store-f97a9",
    storageBucket: "store-f97a9.appspot.com",
    messagingSenderId: "123596117180",
    appId: "1:123596117180:web:fc34f6043f943cb7992cb9",
    measurementId: "G-3M3FHRZN16"
  };

  export const createUserProfileDocument = async(userAuth , additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot=userRef.get();
    
    if(!snapShot.exists){
      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error){
        console.log('error creating user',error.message);

      }
    }
    return userRef;

  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;