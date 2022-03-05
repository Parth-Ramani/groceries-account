import "./ContactList.css";
import react from "react";
import reactDom from "react-dom";
import Modal from "./Modal";
import { useState } from "react/cjs/react.development";

const ContactList = (props) => {
  ///////////////////
  const [enteredFname, setFname] = useState("");
  const [enteredNumber, setNumber] = useState("");
  const [enteredAddress, setAddress] = useState("");
  const [editItem, setItem] = useState(null);

  /// Edit Data
  const editData = (dataid) => {
    let newEdit = props.enteredData.find((item) => {
      return item.id === dataid;
    });
    console.log(newEdit);
    setFname(newEdit.fullName);
    setNumber(newEdit.number);
    setAddress(newEdit.address);
    setItem(dataid);
  };
  const fNameChangeHandler = (event) => {
    setFname(event.target.value);
    console.log(event.target.value);
  };
  const numberChangeHandler = (event) => {
    setNumber(event.target.value);
  };
  const addressChangeHandler = (event) => {
    setAddress(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      id: Math.random().toString(),
      fullName: enteredFname,
      number: enteredNumber,
      address: enteredAddress,
    };
    props.enteredData.map((item) => {
      if (
        (item.fullName && item.number && item.address === formData.fullName) ||
        formData.number ||
        formData.address
      ) {
        alert("Dont enter same data");
      } else {
        return props.onsaved(formData);
      }
    });

    console.log(formData);
    console.log(formData);

    setFname("");
    setNumber("");
    setAddress("");
  };

  /////////////////////////

  return (
    <div>
      <div className="customerList">
        <div>
          <input
            className="search"
            type="search"
            placeholder="Search.."
            name="search"
          />
          <button className="filter">Filter </button>
        </div>
        <div className="input__Box">
          <form onSubmit={submitHandler}>
            <label className="fname" htmlFor="fname">
              Full Name :-
            </label>
            <input
              id="fname"
              type="text"
              className="fname_input"
              required="required"
              placeholder="Full Name"
              value={enteredFname}
              onChange={fNameChangeHandler}
            />
            <label className="number" for="number">
              Number :-
            </label>
            <input
              id="number"
              type="number"
              className="number_input"
              required="required"
              placeholder="Number"
              onChange={numberChangeHandler}
              value={enteredNumber}
            />
            <br />
            <label className="address" for="address">
              Address :-
            </label>
            <input
              id="address"
              type="text"
              className="address_input"
              required="required"
              placeholder="Address"
              onChange={addressChangeHandler}
              value={enteredAddress}
            />
            <br />
            <button className="add__btn"> Add</button>
          </form>
        </div>
        <div className="customer__table">
          <table className="customer__list">
            <thead>
              <tr>
                <th>FullName</th>
                <th>Number</th>
                <th>Address</th>
                <th>Changes</th>
              </tr>
            </thead>
            <tbody>
              {props.enteredData.map((item) => (
                <tr>
                  <td>{item.fullName}</td>
                  <td>{item.number}</td>
                  <td>{item.address}</td>
                  <td>
                    <button
                      onClick={() => {
                        editData(item.id);
                      }}
                      className="editbtn "
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => {
                        props.handleDeleteClick(item.id);
                      }}
                      className="deletebtn"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ContactList;
//
// () => (props.customerList["arr"] = props.enteredInputs)
// (name, (name["arr"] = props.enteredInputs))
