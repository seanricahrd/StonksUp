import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  collection,
  query,
  onSnapshot,
  doc,
  where,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

const ShowBalance = ({ currentUser }) => {
  const [balance, setNewBalance] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "Stockies"),
      where("userID", "==", currentUser.uid)
    );
    const unsub = onSnapshot(q, (querySnapshot) => {
      let balanceFromFirebase = [];
      querySnapshot.forEach((doc) => {
        balanceFromFirebase.push({ ...doc.data(), id: doc.id });
      });
      // using the useState from above
      setNewBalance(balanceFromFirebase);
    });
    return () => unsub();
  }, [currentUser]);

  return (
    <div>
      {console.log("HERE HERE HERE!!!")}
      {console.log(balance)}
      {currentUser.email}
      {balance.map((s) => (
        <p> Balance ${s.balance} </p>
      ))}

      {currentUser.ID}
      <br />

      <br />
    </div>
  );
};

export default ShowBalance;
