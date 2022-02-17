import { useState } from "react";
import "./Modal.css";
const Modal = (props) => {
  const [enteredName, setName] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const customerNameData = {
      id: Math.random().toString(),
      fullName: enteredName,
    };
    props.onSaveData(customerNameData);
    console.log(customerNameData);

    setName("");
  };

  return (
    <div>
      <div className=" customerBox">
        <form onSubmit={submitHandler}>
          <label className="customerName">fullName</label>

          <input
            className="name"
            value={enteredName}
            type="text"
            name="fullName"
            placeholder="Name"
            onChange={nameChangeHandler}
          />
          <br />
          <button
            className="cancel"
            onClick={() => {
              props.setForm(false);
            }}
          >
            Cancel
          </button>
          <button className="addCust">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
