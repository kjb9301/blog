import { fireStore } from '../common/firebase';
import { convertToDate } from '../utils/date';
import { PostForm, Post } from '../types';

const postCollection = fireStore.collection('posts');

export async function GetPosts() {

  const response =  await postCollection
    .orderBy("regDate", "desc")
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
    
    return response;

    // const lastDoc = await postCollection
    //   .doc(index)
    //   .get()
    //   .then((docSnapshot) => {
    //     return docSnapshot
    //   })

    //   console.log('lastdoc', lastDoc)

    // const list = postCollection
    //   // .orderBy("regDate", "desc")
    //   .startAfter(lastDoc)
    //   .limit(3)
    //   .get()
    //   .then(sh => {
    //     return sh.docs.map((doc) => {
    //       if(doc.exists) {
    //         const docData = doc.data();
    //         const data = {
    //           ...docData,
    //           id: doc.id,
    //           regDate: convertToDate(docData.regDate),
    //         };
    //         console.log('data', data)
    //         return data;
    //       }
    //     });
    //   })
    //   .then((result) => {
    //     return result;
    //   })

    // return list;

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

export function UpdatePost(formData: Post) {
  const {id, title, description, mdContent, htmlContent, regDate } = formData;
  const response = postCollection
    .doc(id)
    .set(
      {
        title,
        description,
        mdContent,
        htmlContent,
        regDate,
      },
      { merge: true }
    )
    .then(() => {
      return {
        status: 'success',
        id
      };
    })

  return response;
}