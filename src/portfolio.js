import { useEffect, useState } from "react";
import {
  collection,
  query,
  onSnapshot,
  doc,
  where,
  updateDoc,
  deleteDoc
} from "firebase/firestore";
import { db } from "./firebase-config";

export default function ({ currentUser }) {
  const [stockies, setStockies] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "Stockies"),
      where("userID", "==", currentUser.uid)
    );
    const unsub = onSnapshot(q, (querySnapshot) => {
      let stockiesArrayFromFirebase = [];
      querySnapshot.forEach((doc) => {
        stockiesArrayFromFirebase.push({ ...doc.data(), id: doc.id });
      });
      // using the useState from above
      setStockies(stockiesArrayFromFirebase);
    });
    return () => unsub();
  }, [currentUser]);

  return (
    <div>
      <h1>PORTFOLIO</h1>
      {currentUser.email}
      {stockies.map((s, key) => (
        <div key={s.id}>
          {console.log(s)}
          {s.symbol}
          {s.name}
          {s.sector}
          {s.buy}
          {/* reduce */}
          {s.sell}
        </div>
      ))}

      <p>add stocks to add to your portfolio and keep track of them here!!</p>
    </div>
  );
}
