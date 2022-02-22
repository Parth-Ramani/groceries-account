import { useState, createContext } from "react";
import "./InputFields.css";

export const InputObject = createContext();

const InputFields = (props) => {
  const [enteredDesc, setDesc] = useState("");
  const [enteredQuantity, setQuantity] = useState("");
  const [entereddate, setDate] = useState("");
  const [enteredPrice, setPrice] = useState("");
  const [enteredInpts, setInpts] = useState("");
  const descChangeHandler = (event) => {
    setDesc(event.target.value);
    console.log(event.target.value);
  };
  const quantityChangeHandler = (event) => {
    setQuantity(event.target.value);
    console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    console.log(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
    console.log(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const customerData = {
      description: enteredDesc,
      quantity: enteredQuantity,
      date: entereddate,
      amount: enteredPrice,
    };
    setInpts(customerData);
    setInpts(customerData);
    props.saveList(customerData);
    setDesc("");
    setQuantity("");

    setDate("");
    setPrice("");
  };

  return (
    <InputObject.Provider value={enteredInpts}>
      <div className="inputBox">
        <form onSubmit={submitFormHandler}>
          <label className="desc">Description</label>
          <input
            className="descInput"
            type="text"
            name="description"
            placeholder="Description.."
            required="required"
            value={enteredDesc}
            onChange={descChangeHandler}
          />

          <label className="quantity">Quantity</label>
          <input
            className="quant"
            type="text"
            name="quantity"
            placeholder="quantity"
            required="required"
            value={enteredQuantity}
            onChange={quantityChangeHandler}
          />
          <br />
          <label className="dt">Date</label>
          <input
            className="dtInput"
            type="date"
            name="date"
            required="required"
            value={entereddate}
            onChange={dateChangeHandler}
          />
          <label className="price">Amount</label>
          <input
            className="priceInput"
            type="number"
            placeholder="Amount.."
            name="amount"
            required="required"
            value={enteredPrice}
            onChange={priceChangeHandler}
          />
          <br />
          <button className="add">Add</button>
        </form>
      </div>
    </InputObject.Provider>
  );
};

export default InputFields;
