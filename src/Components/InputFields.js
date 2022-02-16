import { useState } from "react";
import "./InputFields.css";

const InputFields = () => {
  const [enteredDesc, setDesc] = useState("");
  const [enteredQuantity, setQuantity] = useState("");
  const [entereddate, setDate] = useState("");
  const [enteredPrice, setPrice] = useState("");

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
      price: enteredPrice,
    };
    console.log(customerData);
    setDesc("");
    setQuantity("");

    setDate("");
    setPrice("");
  };

  return (
    <div className="inputBox">
      <form onSubmit={submitFormHandler}>
        <label className="desc">Description</label>
        <input
          className="descInput"
          type="text"
          name="description"
          placeholder="Description.."
          value={enteredDesc}
          onChange={descChangeHandler}
        />

        <label className="quantity">Quantity</label>
        <input
          className="quant"
          type="text"
          name="quantity"
          placeholder="quantity"
          value={enteredQuantity}
          onChange={quantityChangeHandler}
        />
        <br />
        <label className="dt">Date</label>
        <input
          className="dtInput"
          type="date"
          name="date"
          value={entereddate}
          onChange={dateChangeHandler}
        />
        <label className="price">Price</label>
        <input
          className="priceInput"
          type="number"
          placeholder="Price.."
          name="price"
          value={enteredPrice}
          onChange={priceChangeHandler}
        />
        <br />
        <button className="add">Add</button>
      </form>
    </div>
  );
};

export default InputFields;
