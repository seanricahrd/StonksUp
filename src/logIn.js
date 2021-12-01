import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import React, { useState } from "react";
import firebaseApp from "./firebase-config";
import app from "./App";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase-config";

const setBalance = async (user) => {
  //  e.preventDefault();
  await addDoc(collection(db, "Stockies"), {
    balance: 0,
    userID: user
  });
};

const signUp = (auth, email, password, setTheAuthUser) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in

      const user = userCredential.user;
      console.log("HELLO");
      console.log(user);
      console.log("ID?????");
      console.log(user.uid);
      setTheAuthUser(user);
      setBalance(user.uid);

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

const signIn = (auth, email, password, setTheAuthUser) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in

      const user = userCredential.user;
      console.log("HERE SIGNED IN USER");
      console.log(user);
      console.log(user);
      setTheAuthUser(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export default function ({ setTheAuthUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(firebaseApp);

  return (
    <div>
      {console.log}
      <h1>Log In</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signIn(auth, email, password, setTheAuthUser);
        }}
      >
        <label>
          email
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </label>
        <button type="submit">SUBMIT</button>
      </form>
      <h1>Sign Up</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signUp(auth, email, password, setTheAuthUser);
        }}
      >
        <label>
          email
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </label>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
