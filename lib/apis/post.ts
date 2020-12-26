import { fireStore } from '../common/firebase';
import { convertToDate } from '../utils/date';
import { PostForm, Post } from '../types';

const postCollection = fireStore.collection('posts');

export async function GetPosts() {

  const response = await postCollection
    .orderBy("regDate", "desc")
    // .limit(3)
    .get()
    .then((snapshot) => {
      return snapshot.docs.map((doc) => {
        console.log('doc',doc)
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

    // var first = newPostCollection.limit(5);

    // first.get().then(async function (documentSnapshots) {
    // // Get the last visible document
    // var lastVisible = documentSnapshots.docs[documentSnapshots.docs.length-1];
    // console.log("last", lastVisible.data());

    // // Construct a new query starting at this document,
    // // get the next 25 cities.
    // var next = await newPostCollection
    //       .startAfter(lastVisible)
    //       .limit(3)
    //       .get()
    //       .then(sh => {
    //         sh.docs.map((doc) => {
    //           console.log(doc.data())
    //           return doc.data()
    //         })
    //       })
    //     console.log('next', next)
    // });

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