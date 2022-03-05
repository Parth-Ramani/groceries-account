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

  /// Delete Data
  const handleDeleteClick = (dataid) => {
    const newContacts = [...enteredData];

    const index = enteredData.findIndex((item) => item.id === dataid);
    newContacts.splice(index, 1);
    setData(newContacts);
  };

  /// Edit Data
  const editData = (dataid) => {
    let newEdit = enteredData.find((item) => {
      return item.id === dataid;
    });
    setData(newEdit.fullName && newEdit.number && newEdit.address);
  };
  const saveCustomerData = (enterCustomer) => {
    let updateData = [enterCustomer, ...enteredData];

    console.log(updateData);
    setData(updateData);
  };
  return (
    <div>
      <Header component={CustomerItems} setList={setList} />
      {enteredList === "first" && (
        <ContactList
          onsaved={saveCustomerData}
          enteredData={enteredData}
          handleDeleteClick={handleDeleteClick}
          editData={editData}
        />
      )}
      {enteredList === "second" && <CustomerItems />}
    </div>
  );
};

export default App;
