import React from "react";
import InputFields from "./Components/InputFields";
import "./App.css";
import { useState } from "react";
import Modal from "./Components/Modal";
import ContactList from "./Components/ContactList";
function App() {
  const [openForm, setForm] = useState(false);
  const [openList, setList] = useState(false);
  const saveCustomerData = (enteredCustomer) => {
    let customer = {
      ...enteredCustomer,
      id: Math.random().toString(),
    };
    console.log(customer);
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
      {customer.map((name) => {
        openList ? <ContactList /> : null;
      })}
      {openForm ? (
        <Modal setForm={setForm} onSaveData={saveCustomerData} />
      ) : null}
    </div>
  );
}

export default App;
