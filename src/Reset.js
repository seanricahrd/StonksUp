import React, { Component } from "react";

class Reset extends Component {
  render() {
    const localButtonHandler = this.props.buttonHandler;
    return (
      <div className="Reset">
        <button onClick={localButtonHandler}>Reset</button>
      </div>
    ); // end of return statement
  } // end of render function
} // close the Reset Class

export default Reset;
