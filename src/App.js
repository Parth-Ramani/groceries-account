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
    add: [""],
  },
  {
    id: "e2",
    fullName: "akash",
    add: [""],
  },
  {
    id: "e3",
    fullName: "hari",
    add: [""],
  },
  {
    id: "e4",
    fullName: "rahul",
    add: [""],
  },
  {
    id: "e5",
    fullName: "shyam",
    add: [""],
  },
  {
    id: "e6",
    fullName: "rohit",
    add: [""],
  },
  {
    id: "e7",
    fullName: "vivek",
    add: [""],
  },
];
const DUMMY_DATA = [
  // {
  //   id: "ab",
  //   description: "fgg",
  //   quantity: "gff",
  //   date: "444",
  //   amount: "ffff",
  // },
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

    // console.log(enteredInputs);

    // setInput(updateList);
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

  // const handleTableDeleteClick = (dataid) => {
  //   const enteredData = [...enteredInputs];

  //   const indx = enteredInputs.findIndex((item) => item.id === dataid);
  //   enteredData.splice(indx, 1);
  //   setInput(enteredData);
  // };
  let [enteredObject, setObject] = useState({});
  console.log(customerList);

  function clickme(name) {
    setObject(name);
  }
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

  // let myArray = [
  //     { id: 0, name: "Jhon", arr: [] },
  //     { id: 1, name: "Sara", arr: [] },
  //     { id: 2, name: "Domnic", arr: [] },
  //     { id: 3, name: "Bravo", arr: [] },
  //   ],
  //   //Find index of specific object using findIndex method.
  //   objIndex = myArray.findIndex((obj) => obj === obj.name);

  // //Log object to Console.
  // console.log("Before update: ", myArray[objIndex]);

  // //Update object's name property.
  // myArray[objIndex].name = "Laila";

  // //Log object to console again.
  // console.log("After update: ", myArray[objIndex]);

  // let objectIndex = customerList.findIndex(
  //   (ele) => ele === { ...enteredObject }
  // );
  // console.log("before update:", customerList[objectIndex]);

  // console.log(...customerList);
  // // console.log(enteredObject);

  // customerList[objectIndex]["arr"] = enteredInputs;
  // console.log("afterupdate:", customerList[objectIndex]);
  // console.log(customerList);
  // console.log(enteredObject);
  // console.log(objectIndex);

  // const arr = customerList.map((obj) => {
  //   if (enteredObject.id === enteredObject.id) {
  //     return { ...(obj["add"] = enteredInputs)
  //   }
  //   }

  // });

  // console.log(arr);
  ////////////////////////////////////
  //////    IMPORTANT
  const arr = customerList.map((obj) => {
    if (obj.id === enteredObject.id) {
      return (obj.add = enteredInputs);
    } else if (obj !== enteredObject.id) {
      return delete obj.add;
    } else if (enteredObject.add == "undefined") {
      return "data not found";
    } else {
      return obj;
    }
  });
  console.log(customerList);

  console.log(arr);
  console.log(typeof enteredObject.add);

  // if (enteredObject === enteredObject) {
  //   enteredObject["arr"] = enteredInputs;
  // } else {
  //   return enteredObject;
  // }

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
          enteredInputs={enteredInputs}
          // customerList={customerList[objectIndex]}
          // handleTableDeleteClick={handleTableDeleteClick}
          DUMMY_NAME={DUMMY_NAME}

          // data={data}
        />
      </div>
    </NameObject.Provider>
  );
};

export default App;
