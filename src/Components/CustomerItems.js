import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import UserNameInput from "./UserNameInput";
import "./CustomerItems.css";
import CustomerItemsInput from "./CustomerItemsInput";

// const DUMMY_ITEM = [
//   { product: "oil", quantity: "500gm", date: "2022-2-11", amount: "80" },
// ];
const DUMMY_ITEM = [
  {
    product: "oil",
    quantity: "500gm",
    date: "2022-2-11",
    amount: "80",
  },
];
const CustomerItems = (props) => {
  /////////////
  const [allDetails, setDetails] = useState("");
  const allItems = (rec) => {
    setDetails(rec);
  };
  console.log(allDetails);

  ////////////////////////////

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
  const copiedObj = Object.assign({}, obj);
  console.log(copiedObj);
  console.log(copiedObj.items);

  // copiedObj.items.push(allDetails);
  console.log(copiedObj);
  console.log(copiedObj.items);

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
        <CustomerItemsInput setItems={allItems} />

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
              {copiedObj.items ? (
                copiedObj.items.unshift(allDetails) &&
                copiedObj.items.map((item, i, copiedObj) => (
                  <tr>
                    {i + 1 === copiedObj.items.length
                      ? copiedObj.items.shift()
                      : null}
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
              )}
              {copiedObj.items == !copiedObj.items
                ? copiedObj.items.shift()
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default CustomerItems;
