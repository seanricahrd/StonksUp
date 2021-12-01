import { useState } from "react";
import { db } from "./firebase-config";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

const User = ({ currentUser, balanceID, balance, setBalance }) => {
  const [newBalance, setNewBalance] = useState(0);

  console.log("HERS tHER ID");
  console.log(balanceID);

  const handleSubmit = async (balanceID, newBalance) => {
    // const userDoc = doc(db, "Stockies", balanceID);
    // const newFields = { balance :  newBalance };
    // await updateDoc();
    await updateDoc(doc(db, "Stockies", balanceID), {
      balance: newBalance
    });
  };

  return (
    <div>
      <br />
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(balanceID, newBalance);
        }}
      >
        <div>
          <input
            type="number"
            placeholder="Add funds"
            onChange={(e) => setNewBalance(balance + Number(e.target.value))}
          />
        </div>
        <button>Add to balance</button>
      </form>
    </div>
  );
};

export default User;
