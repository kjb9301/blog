import firebase from 'firebase';

import { fbConfig } from './config';

const firebaseConfig = { ...fbConfig };

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const fireStore = firebase.firestore();
export const fbAuth = firebase.auth();
