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

  async function sellStock(id) {
    //console.log("DELETING STOCK");
    //console.log(id);
    await deleteDoc(doc(db, "Stockies", id));
  }

  return (
    <div>
      <h1>PORTFOLIO</h1>
      <div className="container">
        <div className="orders">
          <h2>BUYING:</h2>
          Total cost:{" "}
          {/* {this.state.buying.reduce((total, item) => {
              return total + item.rates.buy;
            }, 0)} */}
          <br />
          <button className="empbtn" onClick={this.addPortfolio}>
            ADD TO PORTFOLIO
          </button>
          {/* TASK 3：Add a button to REMOVE the Portfolio */}
          <ol>
            {/* {this.state.buying.map((s, key) => (
                <li key={key}>
                  {s.stock.symbol} {s.stock.name} ${s.rates.buy}
                </li>
              ))} */}
          </ol>
        </div>
        <pre> </pre>
        <div className="orders">
          <h2>SELLING:</h2>
          Total cost:{" "}
          {/* {this.state.selling.reduce((total, item) => {
              return total + item.rates.sell;
            }, 0)} */}
          <br />
          <button className="empbtn" onClick={this.empty2}>
            REMOVE FROM PORTFOLIO
          </button>
          <ol>
            {/* {this.state.selling.map((s, key) => (
                <li key={key}>
                  {s.stock.symbol} {s.stock.name} ${s.rates.sell}
                </li>
              ))} */}
          </ol>
        </div>
      </div>
      <br />

      {stockies.map((s, key) => (
        <div className="li" key={s.id}>
          <div className="buttons" onMouseOver={this.boxMouseOverHandler}>
            {console.log(s)}
            {s.symbol}
            {s.name}
            {s.sector}
            {s.buy}
            {/* TASK 1: Add a reduce function to caculate the total buy */}
            {s.sell}
            <button onClick={() => sellStock(s.id)}>SELL</button>
          </div>
        </div>
      ))}

      <p>add stocks to add to your portfolio and keep track of them here!!</p>
    </div>
  );
}
