import { useState } from "react";
import "./Modal.css";
const Modal = (setForm) => {
  const [enteredName, setName] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const customerNameData = {
      fullName: enteredName,
    };
    console.log(customerNameData);

    setName("");
  };

  return (
    <div>
      <div className=" customerBox">
        <form onSubmit={submitHandler}>
          <label className="customerName" for="desc">
            fullName
          </label>

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
              setForm(false);
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
