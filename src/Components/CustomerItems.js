import React from "react";
import { useState } from "react/cjs/react.development";
import UserNameInput from "./UserNameInput";
import "./CustomerItems.css";
import CustomerItemsInput from "./CustomerItemsInput";

const DUMMY_ITEM = [];

const CustomerItems = (props) => {
  /////////////
  const [allDetails, setDetails] = useState(DUMMY_ITEM);

  /////
  console.log(props.getLocalItem);

  ////////////////////////////

  const [name, setName] = useState("");
  const user = (recive) => {
    setName(recive);
  };
  /////////////////////////////////////////////////////////////////
  // const obj = props.enteredData.find((item) => {
  //   if (item.fullName === name.userName) {
  //     return [item];
  //   } else {
  //     return;
  //   }
  // });

  // const copiedObj = Object.assign({}, obj);
  // console.log(copiedObj);
  // console.log(copiedObj.items);

  // console.log(copiedObj);
  // console.log(copiedObj.items);

  // copiedObj.items.unshift(allDetails)
  ///////////
  const allItems = (rec) => {
    // copiedObj.items = [rec, ...allDetails];
    // setDetails(copiedObj.items);
  };
  // console.log(copiedObj);
  // console.log(allDetails);

  // console.log(copiedObj.items);

  // const handleDeleteItem = (dataid) => {
  //   console.log(dataid);

  //   // const index = copiedObj.items.findIndex(
  //   //   (item) => item.id === dataid || "undefined"
  //   // );
  //   // const result = copiedObj.items.splice(index, 1);
  //   // setDetails(result);
  //   // console.log(result);
  //   copiedObj.items.remove((item) => item.id === dataid);
  // };

  // const maping = copiedObj.items
  //   ? copiedObj.items.map((item) => item.amount)
  //   : null;
  // console.log(maping);

  return (
    <div>
      <UserNameInput customerData={props.enteredData} setUser={user} />
      <div className="detailList">
        <input
          className="search_product"
          type="search"
          placeholder="Search Product.."
          name="search"
        />
        <CustomerItemsInput setItems={allItems} />

        <div className="detail_container">
          <h1></h1>
          {/* <h1 className="total">{copiedObj.fullName}</h1>  */}
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
              {/* {copiedObj.items ? (
                copiedObj.items.unshift(allDetails) &&
                copiedObj.items[0].map((item) => (
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
