import { fireStore } from '../common/firebase';

const postCollection = fireStore.collection('posts');

export function GetPosts() {
  console.log('start')
  const response = postCollection
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const docData = doc.data();
        const data = {
          ...docData,
          id: doc.id,
        };

        return data;
      });
    })
    .catch((err) => {
      return err;
    });

  return response;
}