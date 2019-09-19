import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCc3roR_dvLn3_8ErbBrT57IGA36vHjU88',
  authDomain: 'crwn-db-5779d.firebaseapp.com',
  databaseURL: 'https://crwn-db-5779d.firebaseio.com',
  projectId: 'crwn-db-5779d',
  storageBucket: '',
  messagingSenderId: '761873549221',
  appId: '1:761873549221:web:f9a188ddb7a15843a20a4c'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
