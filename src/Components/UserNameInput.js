import { useState, memo } from "react";

import "./UserNameInput.css";

// const DUMMY_ITEM = [
//   { product: "oil", quantity: "500gm", date: "2022-2-11", amount: "80" },
// ];

const UserNameInput = (props) => {
  const [userName, setUserName] = useState("");
  //   const [user, setUser] = useState("");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const userSubmitHandler = (event) => {
    event.preventDefault();
    const userData = {
      userName: userName,
    };

    console.log(userData);
    props.setUser(userData);
    setUserName("");
  };
  //// setitem
  // const [itemsCustomer, setCustomer] = useState(DUMMY_ITEM);

  // const setItems = (reciveData) => {
  //   const updateProduct = [reciveData, ...itemsCustomer];
  //   setCustomer(updateProduct);
  //   console.log(reciveData);
  // };
  // console.log(itemsCustomer);
  // props.cusItem(itemsCustomer);
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
    </div>
  );
};

export default memo(UserNameInput);
