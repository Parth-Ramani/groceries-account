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
    array: [
      { description: "soap", quantity: "4", date: "2022-2-12", amount: "100" },

      { description: "chhas", quantity: "4", date: "2022-2-12", amount: "100" },
    ],
  },
  {
    id: "e2",
    fullName: "akash",
    array: [{}],
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
    // id: "a1",
    description: "soap",
    quantity: "4",
    date: "4 / 12 / 21",
    amount: "100",
  },
  {
    // id: "a2",
    description: "Dal",
    quantity: "500gm",
    date: "5 / 12 / 21",
    amount: "50",
  },
  {
    // id: "a3",
    description: "wheat",
    quantity: "1kg",
    date: "6 / 12 / 21",
    amount: "30",
  },
  {
    // id: "a4",
    description: "sampoo",
    quantity: "40",
    date: "7 / 12 / 21",
    amount: "80",
  },
  {
    // id: "a5",
    description: "rice",
    quantity: "2kg",
    date: "7 / 12 / 21",
    amount: "140",
  },
  {
    // id: "a6",
    description: "oil",
    quantity: "1kg",
    date: "8 / 12 / 21",
    amount: "150",
  },
];

// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

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

const getLocalItems = () => {
  let customerInput = localStorage.getItem("details");
  console.log(customerInput);
  if (customerInput) {
    return JSON.parse(localStorage.getItem("details"));
  } else {
    return [];
  }
};

// }
const App = () => {
  // let updateName;
  // const customerAccount = [
  // {
  //   id: "b1",
  //   fullName: updateName[0].fullName,
  //   description: "oil",
  //   quantity: "1kg",
  //   date: "8 / 12 / 21",
  //   amount: 150,
  // },
  // ];
  const [openForm, setForm] = useState(false);
  const [openList, setList] = useState(false);
  const [customerList, setCustomerList] = useState(DUMMY_NAME);
  const [enteredInputs, setInput] = useState(DUMMY_DATA);

  //customerListData
  const saveCustomerData = (enterCustomer) => {
    const updateName = [enterCustomer, ...customerList];

    console.log(updateName);
    console.log(customerList);

    setCustomerList(updateName);
  };
  // const contactArray = customerList.map((obj) => obj.fullName);
  // console.log(contactArray);

  // inputData
  const customerInputData = (enteredList) => {
    const updateList = [enteredList, ...enteredInputs];
    console.log(enteredList);
    console.log(enteredInputs);

    setInput(updateList);
  };

  // const descriptionArray = enteredInputs.map((obj) => obj.description);
  // console.log(descriptionArray);
  // ///
  // const quantityArray = enteredInputs.map((obj) => obj.quantity);
  // console.log(quantityArray);
  // ///
  // const dateArray = enteredInputs.map((obj) => obj.date);
  // console.log(dateArray);
  // ///
  // const amountArray = enteredInputs.map((obj) => obj.amount);
  // console.log(amountArray);

  /////////////////////

  //delete list
  const handleDeleteClick = (dataid) => {
    const newCustomer = [...customerList];

    const index = customerList.findIndex((item) => item.id === dataid);
    newCustomer.splice(index, 1);
    setCustomerList(newCustomer);
  };

  const handleTableDeleteClick = (dataid) => {
    const enteredData = [...enteredInputs];

    const indx = enteredInputs.findIndex((item) => item.id === dataid);
    enteredData.splice(indx, 1);
    setInput(enteredData);
  };

  //  stored data
  useEffect(() => {
    localStorage.setItem("customer", JSON.stringify(customerList));
  }, [customerList]);

  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(enteredInputs));
  }, [enteredInputs]);

  const clickme = (name) => {
    console.log(name);
  };

  // console.log(...enteredInputs);

  // var object = enteredInputs.reduce(
  //   (obj, item) => Object.assign(obj, { [item.description]: item.value }),
  //   {}
  // );
  // var object = enteredInputs.reduce(
  //   (obj, item) => ((obj[item.description] = item.value), obj),
  //   {}
  // );
  // console.log(object);
  // console.log(
  //   customerList.map((item) => {
  //     item.array.push(enteredInputs);
  //   })
  // );

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
      <br /> <InputFields saveList={customerInputData} />
      {openList ? (
        <ContactList
          customerList={customerList}
          // data={data}
          handleDeleteClick={handleDeleteClick}
          clickme={clickme}
        />
      ) : null}
      {openForm ? (
        <Modal
          setForm={setForm}
          onSaveData={saveCustomerData}
          customerInputData={customerInputData}
        />
      ) : null}
      <DetailTable
        enteredInputs={enteredInputs}
        customerList={customerList}
        handleTableDeleteClick={handleTableDeleteClick}
        DUMMY_NAME={DUMMY_NAME}
        clickme={clickme}
        // data={data}
      />
    </div>
  );
};

export default App;
