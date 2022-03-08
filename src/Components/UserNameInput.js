import { useState, memo } from "react";

import "./UserNameInput.css";

const UserNameInput = (props) => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState({});

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const userSubmitHandler = (event) => {
    event.preventDefault();
    const userData = {
      userName: userName,
    };

    console.log(userData);
    setUser(userData);
    setUserName("");
  };
  const userField = user;
  console.log(userField);
  const object = props.customerData.find(
    (item) => item.fullName === userField.userName
  );
  console.log(object);
  props.obj(object);
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
