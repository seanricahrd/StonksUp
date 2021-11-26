import React, { Component } from "react";

class SearchForm extends Component {
  render() {
    const searchTermFromProps = this.props.searchTerm;
    const onChangeFromProps = this.props.onChange;
    return (
      <div className="SearchForm">
        <hr />
        <h1>This is SearchForm</h1>
        This is SearchForm
        <form>
          Search for the <b>Stonkname:</b>
          <input
            type="text"
            value={searchTermFromProps}
            onChange={onChangeFromProps}
          />
        </form>
      </div>
    ); // end of return statement
  } // end of render function
} // close the SearchForm component
//**************************************************//
export default SearchForm;
