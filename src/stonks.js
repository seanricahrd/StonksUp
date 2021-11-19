import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: "",
      apiData: [],
      errorMsg: null,
      isFetched: false,
      buying: [],
      selling: []
    };

    this.sellStock = this.sellStock.bind(this);
    this.buyStock = this.buyStock.bind(this);
    this.empty = this.empty.bind(this);
    this.empty2 = this.empty2.bind(this);
  } // end constructor

  // componentDidMount() is invoked immediately after a
  // component is mounted (inserted into the tree)

  async componentDidMount() {
    try {
      const API_URL =
        "https://raw.githubusercontent.com/petermooney/cs385/main/stockapi/stocks40.json";
      // Fetch or access the service at the API_URL address
      const response = await fetch(API_URL);

      // wait for the response. When it arrives, store the JSON version
      // of the response in this variable.
      const jsonResult = await response.json();
      console.log("response");
      console.log(jsonResult.stockData);
      // update the state variables correctly.
      this.setState({ apiData: jsonResult.stockData });
      console.log("BELOW");
      console.log(this.state.apiData);
      this.setState({ isFetched: true });
    } catch (error) {
      // In the case of an error ...
      this.setState({ isFetched: false });
      // This will be used to display error message.
      this.setState({ errorMsg: error });
    } // end of try catch
  } // end of componentDidMount()

  buyStock(index) {
    //console.log("STOCK: " + symbol);
    let foundItem = this.state.apiData.filter(this.findItemByIndex(index));

    this.setState({ buying: this.state.buying.concat(foundItem) });
  }
  sellStock(index) {
    let foundItem = this.state.apiData.filter(this.findItemByIndex(index));

    this.setState({ selling: this.state.selling.concat(foundItem) });
    console.log(this.state.selling);
  }

  findItemByIndex(index) {
    console.log("HERE");
    return function (sObject) {
      return sObject.stock.index === index;
    };
  }

  empty() {
    this.setState({ buying: [] });
  }
  empty2() {
    this.setState({ selling: [] });
  }
  boxMouseOverHandler(e) {
    console.log(e.target);
  }

  render() {
    return (
      <div className="App">
        <h1>Stocks and Shares</h1>
        <hr />

        <div className="container">
          <div className="orders">
            <h2>BUYING:</h2>
            Total objects: {this.state.buying.length}
            <br />
            Total cost:{" "}
            {this.state.buying.reduce((total, item) => {
              return total + item.Price;
            }, 0)}
            <br />
            <button className="empbtn" onClick={this.empty}>
              EMPTY
            </button>
            <ol>
              {this.state.buying.map((s, key) => (
                <li key={key}>
                  {s.stock.Symbol}
                  {s.stock.Company}
                  {s.stock.Price}
                </li>
              ))}
            </ol>
          </div>
          <pre> </pre>
          <div className="orders">
            <h2>SELLING:</h2>
            Total objects: {this.state.selling.length}
            <br />
            Total cost:{" "}
            {this.state.selling.reduce((total, item) => {
              return total + item.rates.sell;
            }, 0)}
            <br />
            <button className="empbtn" onClick={this.empty2}>
              EMPTY
            </button>
            <ol>
              {this.state.selling.map((s, key) => (
                <li key={key}>
                  {s.stock.Symbol}
                  {s.stock.Company}
                  {s.stock.Price}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <hr />
        <ul>
          {this.state.apiData.map((s, index) => (
            <li className="li" key={index}>
              <div className="buttons" onMouseOver={this.boxMouseOverHandler}>
                <b>{s.stock.symbol}</b>

                <div style={{ alignItems: "center", width: "80%" }}>
                  <p>{s.stock.name}</p>
                  <p>{s.stock.sector}</p>
                </div>

                <div className="price">
                  <p>${s.rates.buy}</p>
                  <button
                    className="buybtn"
                    onClick={() => this.buyStock(index)}
                  >
                    BUY
                  </button>
                </div>
                <div className="price">
                  <p>{s.rates.sell}</p>
                  <button
                    style={{ background: "red", color: "white" }}
                    className="sellbtn"
                    onClick={() => this.sellStock(index)}
                  >
                    SELL
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

export default App;
