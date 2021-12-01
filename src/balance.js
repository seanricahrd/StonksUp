import { useState } from "react";
import { db } from "./firebase-config";
import { collection, addDoc } from "firebase/firestore";

const AddBalance = ({ currentUser, setBalance, balance }) => {
  //const [newBalance, setNewBalance] = useState(0);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   await addDoc(collection(db, "Stockies"), {
  //     balance: newBalance
  //     // userID:
  //   });
  // };

  return (
    <div>
      {currentUser.email}
      {currentUser.ID}
      <br />

      <br />
      {/* <form onSubmit={handleSubmit}>
        <div>
          <input
            type="number"
            placeholder="Add funds"
            value={newBalance}
            onChange={(e) => setNewBalance(e.target.value)}
          />
        </div>
        <button>Add to balance</button>
      </form> */}
    </div>
  );
};

export default AddBalance;
