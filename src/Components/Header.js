import { useState } from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <nav className="nav__bar">
      <button
        onClick={() => {
          props.setList(props.comp1);
        }}
        className="customer__btn"
      >
        CustomerList
      </button>
      <button
        onClick={() => {
          props.setList(props.comp2);
        }}
        className="Item__btn"
      >
        ItemsList
      </button>
    </nav>
  );
};

export default Header;
