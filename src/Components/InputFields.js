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

  const submitFormHandler = (event) => {};
  return (
    <div className="inputBox">
      <form onSubmit={submitFormHandler}>
        <label className="desc" for="desc">
          Description{" "}
        </label>
        <input
          className="descInput"
          type="text"
          name="desc"
          placeholder="Description.."
          onChange={descChangeHandler}
        />

        <label className="quantity" for="quantity">
          Quantity
        </label>
        <input
          className="quant"
          type="text"
          name="quantity"
          placeholder="quantity"
          onChange={quantityChangeHandler}
        />
        <br />
        <label className="dt" for="date">
          Date
        </label>
        <input
          className="dtInput"
          type="date"
          name="date"
          onChange={dateChangeHandler}
        />
        <label className="price" for="price">
          Price
        </label>
        <input
          className="priceInput"
          type="number"
          placeholder="Price.."
          name="price"
          onChange={priceChangeHandler}
        />
        <br />
        <button className="add">Add</button>
      </form>
    </div>
  );
};

export default InputFields;
