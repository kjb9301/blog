import { fireStore } from '../common/firebase';
import {convertToDate} from '../utils/date'

const postCollection = fireStore.collection('posts');

export async function GetPosts() {
  console.log('start')
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