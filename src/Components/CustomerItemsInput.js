import { useState, memo } from "react";
import "./CustomerItemsInput.css";

const CustomerItemsInput = (props) => {
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  //   const [items, setItems] = useState("");
  const productHandler = (event) => {
    setProduct(event.target.value);
  };
  const quantityHandler = (event) => {
    setQuantity(event.target.value);
  };
  const dateHandler = (event) => {
    setDate(event.target.value);
  };
  const amountHandler = (event) => {
    setAmount(event.target.value);
  };

  const itemSubmitHandler = (event) => {
    event.preventDefault();
    const itemData = {
      product: product,
      quantity: quantity,
      date: date,
      amount: amount,
    };
    console.log(itemData);

    props.setItems(itemData);

    setProduct("");
    setQuantity("");
    setDate("");
    setAmount("");
  };
  //   const [itemsCustomer, setCustomer] = useState(DUMMY_ITEM);
  // console.log(items);

  //   const item = (items) => {
  //     const update = [items, ...itemsCustomer];
  //     setCustomer(update);
  //     console.log(itemsCustomer);
  //   };
  return (
    <div>
      <div className="input__Box">
        <form onSubmit={itemSubmitHandler}>
          <label className="product" htmlFor="product">
            product
          </label>
          <input
            autoComplete="off"
            id="product"
            type="text"
            className="product_input"
            required="required"
            placeholder="Product"
            value={product}
            onChange={productHandler}
          />
          <label className="quantity" for="quantity">
            Quantity
          </label>
          <input
            autoComplete="off"
            id="quantity"
            type="text"
            className="quantity_input"
            required="required"
            placeholder="Quantity"
            value={quantity}
            onChange={quantityHandler}
          />
          <br />
          <label className="date" for="date">
            Date
          </label>
          <input
            autoComplete="off"
            id="date"
            type="date"
            className="date_input"
            value={date}
            onChange={dateHandler}
          />
          <label className="amount" for="amount">
            Amount
          </label>
          <input
            autoComplete="off"
            id="amount"
            type="number"
            className="amount_input"
            required="required"
            placeholder="Amount"
            value={amount}
            onChange={amountHandler}
          />
          <br />
          <button className="add__btn"> Add</button>
        </form>
      </div>
    </div>
  );
};
export default memo(CustomerItemsInput);
