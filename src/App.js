import react from "react";
import Header from "./Components/Header";
import ContactList from "./Components/ContactList";
import CustomerItems from "./Components/CustomerItems";
import "./App.css";
import { useState } from "react/cjs/react.development";

const DUMMY_CONTACTS = [
  {
    id: "a1",
    fullName: "Ashok sharma",
    number: "8945587452",
    address: "205, near sai garden delhi",
  },
  {
    id: "a2",
    fullName: "ram",
    number: "8945587452",
    address: "205, near sai garden delhi",
  },
  {
    id: "a3",
    fullName: "nilkanth",
    number: "8945587452",
    address: "205, near sai garden delhi",
  },
  {
    id: "a4",
    fullName: "Narayan ",
    number: "8945587452",
    address: "205, near sai garden delhi",
  },
];

const App = (props) => {
  const [enteredList, setList] = useState("first");
  const [enteredData, setData] = useState(DUMMY_CONTACTS);

  const savedData = (customerData) => {
    console.log(customerData);
  };
  return (
    <div>
      <Header component={CustomerItems} setList={setList} />
      {enteredList === "first" && <ContactList onsaved={savedData} />}
      {enteredList === "second" && <CustomerItems />}
    </div>
  );
};

export default App;
