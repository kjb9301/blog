import { fireStore } from '../common/firebase';
import { convertToDate } from '../utils/date';
import { PostForm } from '../types';

const postCollection = fireStore.collection('posts');

export async function GetPosts(category?: string) {
  const newPostCollection = category
    ? postCollection.where('category', "==", category)
    : postCollection;

  const response = await newPostCollection
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

export function GetPostIds() {
  const response = postCollection
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => doc.id)
    })
  
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
  console.log('result',response)
  return response;
}

export function AddPost(formData: PostForm) {
  const response = postCollection
    .add(formData)
    .then(() => {
      return 'success';
    })

  return response;
}

export function DeletePost(id: string) {
  const response = postCollection
    .doc(id)
    .delete()
    .then(() => {
      return 'success';
    })

  return response;
}