import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [enteredList, setList] = useState(true);
  return (
    <nav className="nav__bar">
      <button className="customer__btn">CustomerList</button>
      <button className="Item__btn">ItemsList</button>
    </nav>
  );
};

export default Header;
