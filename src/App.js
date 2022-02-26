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
const DUMMY_DATA = [];
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
  const [enteredInputs, setInput] = useState(DUMMY_DATA);

  //customerListData
  const saveCustomerData = (enterCustomer) => {
    let updateName = [enterCustomer, ...customerList];

    console.log(updateName);
    console.log(customerList);

    setCustomerList(updateName);
  };
  // const contactArray = customerList.map((obj) => obj.fullName);
  // console.log(contactArray);

  // inputData

  const customerInputData = (enteredList) => {
    const updateInputs = [enteredList, ...enteredInputs];
    console.log(enteredList);

    console.log(enteredInputs);
    console.log(updateInputs);

    setInput(updateInputs);
    console.log(enteredInputs);

    // console.log(enteredInputs);

    // setInput(updateList);
  };
  let [enteredObject, setObject] = useState("");
  const clickme = (name) => {
    console.log(name.fullName);
    setObject(name.fullName);
  };
  console.log(enteredObject);

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

  // const handleTableDeleteClick = (dataid) => {
  //   const enteredData = [...enteredInputs];

  //   const indx = enteredInputs.findIndex((item) => item.id === dataid);
  //   enteredData.splice(indx, 1);
  //   setInput(enteredData);
  // };
  // let [enteredObject, setObject] = useState({});
  // console.log(customerList);

  // function clickme(name) {
  //   setObject(name);
  // }

  /////////////////////////////////

  // const customerArray = customerList.map((obj) => obj.fullName);
  // console.log(customerArray);
  // const myObj = { ...customerArray };
  // // for (let i = 0; i < customerArray.length; i++) {
  // //   myObj[i] = customerArray[i];
  // // }
  // console.log( myObj);

  //////////////////////////////////////////
  //  stored data
  useEffect(() => {
    localStorage.setItem("customer", JSON.stringify(customerList));
  }, [customerList]);

  // useEffect(() => {
  //   localStorage.setItem("details", JSON.stringify(enteredInputs));
  // }, [enteredInputs]);
  //////////////////////////////////////
  // if (enteredObject !== enteredObject) {
  //   return { ...(enteredObject["add"] = enteredInputs) };
  // } else {
  //   return enteredObject;
  // }

  ////////////////////////////////////
  //////    IMPORTANT
  // const arr = customerList.map((obj) => {
  //   if (obj.id === enteredObject.id) {
  //     return (enteredObject["add"] = [enteredInputs]);
  //   } else if (obj !== enteredObject.id) {
  //     return (obj["add"] = "");
  //   } else if (!enteredInputs) {
  //     return;
  //   } else {
  //     return obj;
  //   }
  // });
  console.log(customerList);

  // console.log(arr);

  // if (enteredObject === enteredObject) {
  //   enteredObject["arr"] = enteredInputs;
  // } else {
  //   return enteredObject;
  // }
  /////////////////////
  // let array = [{ ...enteredObject }];
  // console.log(array);
  // array.forEach((e) => (e.add = enteredInputs));
  // console.log(array);
  // array.push(enteredObject);
  // console.log(array);
  // let array = [];
  // array.push(enteredObject);
  // console.log(array.enteredInputs);
  // console.log(array);

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
      <br />
      <InputFields saveList={customerInputData} enteredObject={enteredObject} />
      {openList ? (
        <ContactList
          clickme={clickme}
          customerList={customerList}
          // data={data}
          handleDeleteClick={handleDeleteClick}
          enteredInputs={enteredInputs}
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
        enteredObject={enteredObject}
        enteredInputs={enteredInputs}
        // customerList={customerList[objectIndex]}
        // handleTableDeleteClick={handleTableDeleteClick}
        customerList={customerList}

        // data={data}
      />
    </div>
  );
};

export default App;
