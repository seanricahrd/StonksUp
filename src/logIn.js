import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import React, { useRef, useState } from "react";
import app from "./App";

const signUp = (auth, email, password, setLoggedIn) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      console.log("HELLO");

      const user = userCredential.user;
      console.log(user);
      setLoggedIn(true);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

const signIn = (auth, email, password, setLoggedIn) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in

      const user = userCredential.user;
      console.log("HERE SIGNED IN USER");
      console.log(user);
      console.log(user);
      setLoggedIn(true);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};

export default function ({ setLoggedIn }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const auth = getAuth();

  return (
    <div>
      {console.log}
      <h1>Log In</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          signIn(auth, email, password, setLoggedIn);
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
        onSubmit={(auth, email, password, setLoggedIn) =>
          signUp(auth, email, password)
        }
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
