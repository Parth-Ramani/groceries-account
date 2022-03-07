import React from "react";
import { useState } from "react/cjs/react.development";
import ContactList from "./ContactList";
import "./CustomerItems.css";

const CustomerItems = (props) => {
  /////////////

  const [userName, setUserName] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

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
    props.setItems(itemData);

    setProduct("");
    setQuantity("");
    setDate("");
    setAmount("");
  };

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const [itemObject, setItemObject] = useState("");

  const userSubmitHandler = (event) => {
    event.preventDefault();
    const userData = {
      userName: userName,
    };
    props.enteredData.map((item) => {
      if (item.fullName === userData.userName) {
        setItemObject(item);
      } else return;
    });
    setUserName("");
  };

  // props.render.items
  //   ? props.render.items.push({ ...props.itemsCustomer })
  //   : console.log("undefined");
  // console.log(itemObject.items);
  console.log(itemObject);
  const render = () => {};

  ///////////
  return (
    <div>
      <div className="customer__name">
        <form onSubmit={userSubmitHandler}>
          <label className="customerName" htmlFor="fname">
            Customer Name
          </label>
          <br />
          <input
            autocomplete="off"
            id="fname"
            type="text"
            className="fname_input"
            required="required"
            placeholder="Full Name"
            value={userName}
            onChange={userNameHandler}
          />
          <button className="addbtn">Add</button>
        </form>
      </div>
      <div className="detailList">
        <input
          className="search_product"
          type="search"
          placeholder="Search Product.."
          name="search"
        />
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

        <div className="detail_container">
          <h1></h1>
          <table className="customers">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {/* {itemObject.items ? (
                itemObject.items.map((item) => (
                  <tr>
                    <td>{item.product}</td>
                    <td>{item.quantity}</td>
                    <td>{item.date}</td>
                    <td>{item.amount}</td>
                    <td>
                      <button className="editbtn">Edit</button>
                      <button className="deletebtn">Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <p> data is empty</p>
              )} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default CustomerItems;
