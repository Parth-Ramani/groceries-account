import React from "react";
import InputFields from "./Components/InputFields";
import "./App.css";
import { useState } from "react";
import Modal from "./Components/Modal";
import ContactList from "./Components/ContactList";
function App() {
  const [openForm, setForm] = useState(false);
  return (
    <div>
      <input className="search" type="text" placeholder="Search Account" />

      <button
        onClick={() => {
          setForm(true);
        }}
        type="button"
        className="addAccount"
      >
        + Account
      </button>
      <br />
      <button className="accountList">Account List</button>
      <ContactList />
      {openForm && <Modal setForm={setForm} />}
      <InputFields />
    </div>
  );
}

export default App;
