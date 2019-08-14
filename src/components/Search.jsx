import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "" //inital value for the searchbar.
    };
  }

  //Takes the value of what is written inside the SearchBar and sets it to the state.
  onChange = e => {
    this.setState({ term: e.target.value });
    this.props.onSearchTermChange(e.target.value);
  };

  render() {
    return (
      <div className="search-bar">
            <input value={this.state.term} onChange={this.onChange} /> {/* Function triggering on changing value.*/}
            &nbsp; <i class="fas fa-search"> </i> {/* Font Awesome Search icon */}
      </div>
    );
  }
}

export default Search;
