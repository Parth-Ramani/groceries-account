import react from "react";
import Header from "./Components/Header";
import ContactList from "./Components/ContactList";
import CustomerItems from "./Components/CustomerItems";
import "./App.css";
import { useState } from "react/cjs/react.development";

const App = (props) => {
  const [enteredList, setList] = useState("first");

  return (
    <div>
      <Header component={CustomerItems} setList={setList} />
      {enteredList === "first" && <ContactList />}
      {enteredList === "second" && <CustomerItems />}
    </div>
  );
};

export default App;
