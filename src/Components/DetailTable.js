import react, { useContext, useState, useEffect } from "react";

import "./DetailTable.css";
import { NameObject } from "../App";
// import { InputObject } from "../App";

const DetailTable = (props) => {
  // let inputObject = useContext(InputObject);
  // console.log(inputObject);
  const object = useContext(NameObject);
  console.log(typeof object);
  console.log(props.enteredInputs);
  console.log(object.add);
  let newJSON = JSON.stringify(object, function (key, value) {
    return value === "" ? undefined : value;
  });
  console.log(JSON.parse(newJSON));
  const newObject = JSON.parse(newJSON);
  console.log(newObject.add);

  // useEffect(() => {
  //   localStorage.setItem("details", JSON.stringify(object));
  // }, [object]);
  // console.log(props.customerList);

  //////////////////

  return (
    <div>
      <div className="detail_container">
        <h1>{newObject.fullName}</h1>
        <table className="customers">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {/* {object.add.map((item) => {
              <tr>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td>
                  <button className="editbtn">Edit</button>
                  <button
                    onClick={() => {
                      props.handleTableDeleteClick(item.id);
                    }}
                    className="deletebtn"
                  >
                    Delete
                  </button>
                </td>
              </tr>;
            })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailTable;
