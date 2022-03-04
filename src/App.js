import react from "react";
import Header from "./Components/Header";
import ContactList from "./Components/ContactList";
import CustomerItems from "./Components/CustomerItems";
import "./App.css";
import { useState } from "react/cjs/react.development";

const App = (props) => {
  const [enteredList, setList] = useState(ContactList);

  return (
    <div>
      <Header
        setList={setList}
        comp2={<CustomerItems />}
        comp1={<ContactList />}
      />
    </div>
  );
};

export default App;
