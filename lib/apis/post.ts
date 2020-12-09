import { fireStore } from '../common/firebase';
import {convertToDate} from '../utils/date'

const postCollection = fireStore.collection('posts');

export async function GetPosts() {
  const response = await postCollection
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        const docData = doc.data();
        const data = {
          ...docData,
          id: doc.id,
          regDate: convertToDate(docData.regDate),
        };

        return data;
      });
    })
    .catch((err) => {
      return err;
    });

  return response;
}

export async function GetPost(id: string) {
  const response = await postCollection
    .doc(id)
    .get()
    .then((docSnapshot) => {
      const docData = docSnapshot.data();
      if (docData) {
        const data = {
          ...docData,
          id: id,
          regDate: convertToDate(docData.regDate),
        };

        return data;
      }
    })
    .catch((err) => {
      return err;
    });
  console.log(response)
  return response;
}