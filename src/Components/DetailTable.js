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
  console.log(object);

  console.log(object);
  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(object));
  }, [object]);

  //////////////////////////////

  return (
    <div>
      <div className="detail_container">
        <h1>{object.fullName}</h1>
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
            {/* <tr>
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
            </tr> */}
            {/* {props.DUMMY_NAME[0].array.map((n) => (
              <tr>
                <td>{n.description}</td>
                <td>{n.quantity}</td>
                <td>{n.date}</td>
                <td>{n.amount}</td>
                <td>
                  <button className="editbtn">Edit</button>
                  <button className="deletebtn">Delete</button>
                </td>
              </tr>
            ))} */}
            {/* <tr>
              <td>{props.DUMMY_DATA[1].description}</td>
              <td>{props.DUMMY_DATA[1].quantity}</td>
              <td>{props.DUMMY_DATA[1].date}</td>
              <td>{props.DUMMY_DATA[1].amount}</td>
              <td>
                <button className="editbtn">Edit</button>
                <button className="deletebtn">Delete</button>
              </td>
            </tr>

            <tr>
              <td>{props.DUMMY_DATA[2].description}</td>
              <td>{props.DUMMY_DATA[2].quantity}</td>
              <td>{props.DUMMY_DATA[2].date}</td>
              <td>{props.DUMMY_DATA[2].amount}</td>
              <td>
                <button className="editbtn">Edit</button>
                <button className="deletebtn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>{props.DUMMY_DATA[3].description}</td>
              <td>{props.DUMMY_DATA[3].quantity}</td>
              <td>{props.DUMMY_DATA[3].date}</td>
              <td>{props.DUMMY_DATA[3].amount}</td>
              <td>
                <button className="editbtn">Edit</button>
                <button className="deletebtn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>{props.DUMMY_DATA[4].description}</td>
              <td>{props.DUMMY_DATA[4].quantity}</td>
              <td>{props.DUMMY_DATA[4].date}</td>
              <td>{props.DUMMY_DATA[4].amount}</td>
              <td>
                <button className="editbtn">Edit</button>
                <button className="deletebtn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>{props.DUMMY_DATA[5].description}</td>
              <td>{props.DUMMY_DATA[5].quantity}</td>
              <td>{props.DUMMY_DATA[5].date}</td>
              <td>{props.DUMMY_DATA[5].amount}</td>
              <td>
                <button className="editbtn">Edit</button>
                <button className="deletebtn">Delete</button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailTable;
