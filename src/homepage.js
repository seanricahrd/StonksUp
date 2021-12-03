import background from "./images/stocksgoup.png";
import money from "./images/money-money-money-make-it-rain.gif";

export default function () {
  return (
    <div>
      <img
        className="background"
        src={money}
        alt="stonks only go up"
        width="75%"
        height=""
      />
      <p>Welcome to Stocks Up the pecfect place to manage your stock </p>
      <div className="infopar">
        <p className="par">
          <b>portfolio</b>
          <br />
          keep track of your stocks
        </p>
        <p className="par">
          <b>stonks</b>
          <br />
          buy stocks to add to your portfolio
        </p>
        <p className="par">
          <b>user</b>
          <br />
          manage your balance
        </p>
      </div>
      <h1>STONKS ONLY GO UP</h1>
    </div>
  );
}
