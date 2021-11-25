import "./styles.css";
import React, { useState } from "react";
import Homepage from "./homepage";
import Portfolio from "./portfolio";
import Stonks from "./stonks";
import Logout from "./logout";
import LogIn from "./logIn";
import app from "./firebase-config";

export default function App() {
  const [page, setPage] = useState("home");
  const [theAuthUser, setTheAuthUser] = useState(null);

  if (theAuthUser)
    return (
      <div className="App">
        <div className="navbar">
          <button className="navButton" onClick={() => setPage("home")}>
            HOME
          </button>
          <button className="navButton" onClick={() => setPage("portfolio")}>
            PORTFOLIO
          </button>
          <button className="navButton" onClick={() => setPage("stonks")}>
            STONKS
          </button>
          <button className="navButton" onClick={() => setPage("logout")}>
            LOGOUT
          </button>
        </div>
        {console.log(page)}
        {page === "home" && <Homepage currentUser={theAuthUser} />}
        {page === "portfolio" && <Portfolio currentUser={theAuthUser} />}
        {page === "stonks" && <Stonks currentUser={theAuthUser} />}
        {page === "logout" && <Logout setTheAuthUser={setTheAuthUser} />}
      </div>
    );
  else return <LogIn setTheAuthUser={setTheAuthUser} />;
}
