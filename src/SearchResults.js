import React, { Component } from "react";
class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      globalArray: this.props.globalArray
    };
  }

  spotifyFilterFunction(searchTerm) {
    return function (musicObject) {
      let stockname = musicObject.stock.name;

      return searchTerm !== "" && stockname.includes(searchTerm); // end of return statement
    }; // end of return function
  } // end of addressFilterFunction

  render() {
    const arrayPassedAsParameter = this.props.globalArray;
    const searchTermFromProps = this.props.searchTerm;

    let numberResults = arrayPassedAsParameter.filter(
      this.spotifyFilterFunction(searchTermFromProps)
    ).length;

    return (
      <div className="SearchResults">
        <hr />
        <h1>This is SearchResults</h1>
        This is SearchResults Number of Results found {numberResults}
        <hr />
        {arrayPassedAsParameter
          .filter(this.spotifyFilterFunction(searchTermFromProps))
          .map((s, key) => (
            <li className="li" key={key}>
              <div className="buttons" onMouseOver={this.boxMouseOverHandler}>
                <b>{s.stock.symbol}</b>

                <div style={{ alignItems: "center", width: "80%" }}>
                  <p>{s.stock.name}</p>
                  <h1>{key}</h1>
                  <p>{s.stock.sector}</p>
                </div>

                <div className="price">
                  <p>${s.rates.buy}</p>
                  <button className="buybtn" onClick={() => this.buyStock(key)}>
                    BUY
                  </button>
                </div>
                <div className="price">
                  <p>{s.rates.sell}</p>
                  <button
                    style={{ background: "red", color: "white" }}
                    className="sellbtn"
                    onClick={() => this.sellStock(key)}
                  >
                    SELL
                  </button>
                </div>
              </div>
            </li>
          ))}
      </div>
    ); // end of return statement
  } // end of render function
} // close the SearchResults component

export default SearchResults;
