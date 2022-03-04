import { useState } from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <nav className="nav__bar">
      <button
        onClick={() => {
          props.setList("first");
        }}
        className="customer__btn"
      >
        CustomerList
      </button>
      <button
        onClick={() => {
          props.setList("second");
        }}
        className="Item__btn"
      >
        ItemsList
      </button>
    </nav>
  );
};

export default Header;
