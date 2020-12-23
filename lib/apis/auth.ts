import cookie from 'js-cookie';

import { fbAuth, fireStore } from '../common/firebase';
import { Login } from '../types';

const userCollection = fireStore.collection('user');

export function login(data: Login) {
  const { email, password } = data;
  const response = fbAuth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      if (res.user) {
        const token = res.user.getIdToken();
        cookie.set('token', token);
        return 'success';
      }
    });

  return response;
}

export function logout() {
  const response = fbAuth.signOut().then(() => {
    cookie.remove('token');
    return 'success';
  });

  return response;
}

export async function GetUserInfo() {
  const response = await userCollection
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const data = doc.data();
        return data
      })
    })

  return response[0];
}