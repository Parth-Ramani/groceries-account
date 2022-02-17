import React from "react";
import InputFields from "./Components/InputFields";
import "./App.css";
import { useState } from "react";
import Modal from "./Components/Modal";
import ContactList from "./Components/ContactList";

let DUMMY_NAME = [
  {
    id: "e1",
    fullName: "ram",
  },
  {
    id: "e2",
    fullName: "akash",
  },
  {
    id: "e3",
    fullName: "hari",
  },
  {
    id: "e4",
    fullName: "rahul",
  },
  {
    id: "e5",
    fullName: "shyam",
  },
  {
    id: "e6",
    fullName: "rohit",
  },
  {
    id: "e7",
    fullName: "vivek",
  },
];
function App() {
  const [openForm, setForm] = useState(false);
  const [openList, setList] = useState(false);
  const [customerList, setCustomerList] = useState(DUMMY_NAME);

  const saveCustomerData = (enterCustomer) => {
    const updateName = [enterCustomer, ...customerList];
    console.log(enterCustomer);
    console.log(updateName);

    setCustomerList(updateName);
  };

  return (
    <div>
      <button
        onClick={() => {
          setList(!openList);
        }}
        className="accountList"
      >
        Account List
      </button>
      <input className="search" type="text" placeholder="Search Account" />
      <button
        onClick={() => {
          setForm(!openForm);
        }}
        type="button"
        className="addAccount"
      >
        + Account
      </button>
      <br /> <InputFields />
      {openList ? <ContactList item={customerList} /> : null}
      {openForm ? (
        <Modal setForm={setForm} onSaveData={saveCustomerData} />
      ) : null}
    </div>
  );
}

export default App;
