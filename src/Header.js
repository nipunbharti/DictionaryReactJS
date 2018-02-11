import React, { PureComponent } from "react";
import Icon from "react-icons-kit";
import { book } from "react-icons-kit/icomoon/book";
import "./Header.css";

class Header extends PureComponent {
  render() {
    return (
      <div className="headerContainer">
        <div className="headerText">
          <span className="blue">Dictionary</span> App
        </div>
        <Icon icon={book} size={32} />
        <div className="lowerHeader">
          Just type the <span className="blue">word</span> and see definition!
        </div>
      </div>
    );
  }
}

export default Header;
