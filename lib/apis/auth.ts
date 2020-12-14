import cookie from 'js-cookie';

import { fbAuth } from '../common/firebase';
import { Login } from '../types';

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