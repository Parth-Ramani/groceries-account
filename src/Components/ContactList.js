import "./ContactList.css";
const ContactList = (props) => {
  return (
    <div>
      <div className="customerList">
        <div>
          <input
            className="search"
            type="search"
            placeholder="Search.."
            name="search"
          />
          <button className="filter">Filter </button>
        </div>
        <div className="input__Box">
          <form>
            <label className="fname" htmlFor="fname">
              Full Name
            </label>
            <input
              id="fname"
              type="text"
              className="fname_input"
              required="required"
              placeholder="Full Name"
            />
            {/* <label className="number" for="number">
              Number
            </label>
            <input
              id="number"
              type="number"
              className="number_input"
              required="required"
              placeholder="Number"
            />
            <br />
            <label className="address" for="address">
              Address
            </label>
            <input
              id="address"
              type="text"
              className="address_input"
              required="required"
              placeholder="Address"
            />
            <br /> */}
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactList;
//
// () => (props.customerList["arr"] = props.enteredInputs)
// (name, (name["arr"] = props.enteredInputs))
