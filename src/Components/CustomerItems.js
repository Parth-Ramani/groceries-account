import React from "react";
import { useState } from "react/cjs/react.development";
import UserNameInput from "./UserNameInput";
import "./CustomerItems.css";

const CustomerItems = (props) => {
  /////////////

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
    console.log(itemData);

    props.setItems(itemData);

    setProduct("");
    setQuantity("");
    setDate("");
    setAmount("");
  };

  // const fun = (itemObject) => {
  //   console.log(itemObject);
  // };
  // console.log(itemObject.items);

  // const item = useMemo(() => itemObject, []);

  // props.itemObject.items
  //   ? itemObject.items.push({ ...props.itemsCustomer })
  //   : console.log("undefined");
  // console.log(itemObject.items);
  const [name, setName] = useState("");
  const user = (recive) => {
    setName(recive);
  };

  let obj = props.enteredData.find((item) => {
    if (item.fullName === name.userName) {
      return item;
    } else {
      return;
    }
  });

  // console.log(obj.fullName ? obj.fullName : "please defined");
  let copiedObj = Object.assign({}, obj);
  console.log(copiedObj.fullName);

  ///////////

  return (
    <div>
      <UserNameInput
        customerData={props.enteredData}
        setUser={user}
        // cusItem={productItem}
      />
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
          <h1>{copiedObj.fullName}</h1>
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
              {/* {obj.items ? (
                obj.items.map((item) => (
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
