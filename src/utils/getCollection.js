import { ref, watchEffect } from 'vue';
import { db } from '../firebase/config';
import { collection, onSnapshot } from '@firebase/firestore';

const getCollection = (collectionName) => {
  const documents = ref(null)

  let colRef = collection(db,collectionName)

  const unsub = onSnapshot(colRef, (snapshot) => {
    const docs = []
    snapshot.forEach(doc => {
      docs.push({
        id: doc.id,
        ...doc.data()
      })
    })
    documents.value = docs
  })

  watchEffect((onInvalidate) => {
    onInvalidate(() => {
      unsub()
    })
  })

  return { documents }
}

export default getCollection