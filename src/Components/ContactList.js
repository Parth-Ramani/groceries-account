import "./ContactList.css";
import react from "react";
import { useState } from "react/cjs/react.development";
const ContactList = (props) => {
  ///////////////////
  const [enteredFname, setFname] = useState("");
  const [enteredNumber, setNumber] = useState("");
  const [enteredAddress, setAddress] = useState("");

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
    console.log(formData);
    console.log(formData);
    props.onSaved(formData);
    setFname("");
    setNumber("");
    setNumber("");
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
              <tr>
                <td>vanish rai</td>
                <td>6215472755</td>
                <td>B1, colony new road delhi</td>
                <td>
                  <button className="editbtn ">Edit</button>

                  <button className="deletebtn">Delete</button>
                </td>
              </tr>
              <tr>
                <td>prem sharma</td>
                <td>9652472534</td>
                <td>B2, colony new road delhi</td>
                <td>
                  <button className="editbtn ">Edit</button>

                  <button className="deletebtn">Delete</button>
                </td>
              </tr>
              <tr>
                <td>anup kumar</td>
                <td>9784546155</td>
                <td>B3,colony new road delhi</td>
                <td>
                  <button className="editbtn ">Edit</button>

                  <button className="deletebtn">Delete</button>
                </td>
              </tr>
              <tr>
                <td>hari sharma</td>
                <td>7895532461</td>
                <td>b4, colony new road delhi</td>
                <td>
                  <button className="editbtn ">Edit</button>

                  <button className="deletebtn">Delete</button>
                </td>
              </tr>
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
