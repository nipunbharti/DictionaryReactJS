import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./SearchBar.css";

class SearchBar extends PureComponent {
  handleChange = event => {
    this.props.textChange(event);
  };
  render() {
    return (
      <div className="searchBarContainer">
        <div>
          <input onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  textChange: PropTypes.func
};

export default SearchBar;
