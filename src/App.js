import React, { createContext } from "react";
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
export const NameObject = createContext();

// }
const App = (props) => {
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
  const [enteredInputs, setInput] = useState("");

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
  const [enteredObject, setObject] = useState("");

  function clickme(name) {
    setObject(name);
  }

  //  stored data
  useEffect(() => {
    localStorage.setItem("customer", JSON.stringify(customerList));
  }, [customerList]);

  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(enteredInputs));
  }, [enteredInputs]);

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
    <NameObject.Provider value={enteredObject}>
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
          clickme={clickme}
          enteredInputs={enteredInputs}
          customerList={customerList}
          handleTableDeleteClick={handleTableDeleteClick}
          DUMMY_NAME={DUMMY_NAME}

          // data={data}
        />
      </div>
    </NameObject.Provider>
  );
};

export default App;
