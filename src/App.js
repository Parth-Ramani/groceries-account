import react from "react";
import Header from "./Components/Header";
import ContactList from "./Components/ContactList";
import CustomerItems from "./Components/CustomerItems";
import "./App.css";
import { useState, useEffect } from "react/cjs/react.development";

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

const getLocalItem = () => {
  let customers = localStorage.getItem("customers");
  console.log(customers);
  if (customers) {
    return JSON.parse(localStorage.getItem("customers"));
  } else {
    return [];
  }
};

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

  /// dataEntered
  const saveCustomerData = (enterCustomer) => {
    let updateData = [enterCustomer, ...enteredData];

    console.log(updateData);
    setData(updateData);
  };

  /// setData
  useEffect(() => {
    localStorage.setItem("customers", JSON.stringify(enteredData));
  }, [enteredData]);

  /////////// search results
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      let newContactList = enteredData.filter((item) => {
        return Object.values(item)
          .join("  ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      console.log(newContactList);
      setSearchResult(newContactList);
    } else {
      setSearchResult(enteredData);
    }
  };

  return (
    <div>
      <Header component={CustomerItems} setList={setList} />
      {enteredList === "first" && (
        <ContactList
          term={searchTerm}
          searchKeyward={searchHandler}
          setData={setData}
          onsaved={saveCustomerData}
          enteredData={searchTerm.length < 1 ? enteredData : searchResult}
          handleDeleteClick={handleDeleteClick}
        />
      )}
      {enteredList === "second" && <CustomerItems />}
    </div>
  );
};

export default App;
