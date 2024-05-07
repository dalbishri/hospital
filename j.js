import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";

const db = getFirestore();
const dataRef = collection(db, "your-collection-name");

const q = query(dataRef, where("field-name", "==", "value"));

onSnapshot(q, (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
});