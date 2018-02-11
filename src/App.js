import React, { PureComponent } from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import filterDict from "./filterDict";
import Display from "./Display";
import "./App.css";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredDict: filterDict("")
    };
  }
  handleSearchChange = event => {
    this.setState({
      filteredDict: filterDict(event.target.value)
    });
    console.log(this.state.filteredDict);
  };
  render() {
    return (
      <div>
        <Header />
        <SearchBar textChange={this.handleSearchChange} />
        <Display definition={this.state.filteredDict} />
      </div>
    );
  }
}

export default App;
