import { fireStore } from '../common/firebase';

const ctgCollection = fireStore.collection('categories');

export function GetCategories() {
  const response = ctgCollection.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => doc.data().id);
    return data;
  });

  return response;
}