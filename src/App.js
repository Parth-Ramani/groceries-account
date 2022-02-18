import React from "react";
import InputFields from "./Components/InputFields";
import "./App.css";
import { useState, useEffect } from "react";
import Modal from "./Components/Modal";
import ContactList from "./Components/ContactList";
import DetailTable from "./Components/DetailTable";

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

const DUMMY_DATA = [
  {
    id: "a1",
    description: "soap",
    quantity: "4",
    date: "4 / 12 / 21",
    amount: 100,
  },
  {
    id: "a2",
    description: "Dal",
    quantity: "500gm",
    date: "5 / 12 / 21",
    amount: 50,
  },
  {
    id: "a3",
    description: "wheat",
    quantity: "1kg",
    date: "6 / 12 / 21",
    amount: 30,
  },
  {
    id: "a4",
    description: "sampoo",
    quantity: "40",
    date: "7 / 12 / 21",
    amount: 80,
  },
  {
    id: "a5",
    description: "rice",
    quantity: "2kg",
    date: "7 / 12 / 21",
    amount: 140,
  },
  {
    id: "a6",
    description: "oil",
    quantity: "1kg",
    date: "8 / 12 / 21",
    amount: 150,
  },
];
// setItem
const getLocalItem = () => {
  let customerData = localStorage.getItem("customer");
  console.log(customerData);
  if (customerData) {
    return JSON.parse(localStorage.getItem("customer"));
  } else {
    return [];
  }
};
function App() {
  const [openForm, setForm] = useState(false);
  const [openList, setList] = useState(false);
  const [customerList, setCustomerList] = useState(getLocalItem);

  const saveCustomerData = (enterCustomer) => {
    const updateName = [enterCustomer, ...customerList];
    console.log(enterCustomer);
    console.log(updateName);

    setCustomerList(updateName);
  };
  //delete list
  const handleDeleteClick = (dataid) => {
    const newCustomer = [...customerList];

    const index = customerList.findIndex((item) => item.id === dataid);
    newCustomer.splice(index, 1);
    setCustomerList(newCustomer);
  };

  //  stored data
  useEffect(() => {
    localStorage.setItem("customer", JSON.stringify(customerList));
  }, [customerList]);

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
      {openList ? (
        <ContactList
          item={customerList}
          handleDeleteClick={handleDeleteClick}
        />
      ) : null}
      {openForm ? (
        <Modal setForm={setForm} onSaveData={saveCustomerData} />
      ) : null}
      <DetailTable DUMMY_DATA={DUMMY_DATA} />
    </div>
  );
}

export default App;
