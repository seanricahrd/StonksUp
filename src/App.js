import "./styles.css";
import React, { useState } from "react";
import Homepage from "./homepage";
import Portfolio from "./portfolio";
import Stonks from "./stonks";
import Logout from "./logout";
import LogIn from "./logIn";
import Balance from "./balance";
import app from "./firebase-config";
import bull from "./images/pngfind.com-bulls-png-6600169.png";

export default function App() {
  const [page, setPage] = useState("home");
  const [theAuthUser, setTheAuthUser] = useState(null);
  const [balance, setBalance] = useState(0);

  if (theAuthUser)
    return (
      <div className="App">
        <div className="navbar">
          {/* <img className="navButton" src={bull} /> */}
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
          <button
            style={{ wordWrap: "" }}
            className="navButton"
            onClick={() => setPage("balance")}
          >
            {/* {theAuthUser.email} */}
            BALANCE
            <br /> {balance}
          </button>
        </div>
        {console.log(page)}
        {page === "home" && <Homepage currentUser={theAuthUser} />}
        {page === "portfolio" && <Portfolio currentUser={theAuthUser} />}
        {page === "stonks" && <Stonks currentUser={theAuthUser} />}
        {page === "logout" && <Logout setTheAuthUser={setTheAuthUser} />}
        {page === "balance" && (
          <Balance
            currentUser={theAuthUser}
            balance={balance}
            setBalance={setBalance}
          />
        )}
      </div>
    );
  else return <LogIn setTheAuthUser={setTheAuthUser} />;
}
