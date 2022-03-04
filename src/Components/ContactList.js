import "./ContactList.css";
const ContactList = (props) => {
  return (
    <div>
      <div className="customerList">
        <div>
          <input
            className="search"
            type="text"
            placeholder="Search.."
            name="search"
          />
          <button>Filter</button>
        </div>
      </div>
    </div>
  );
};
export default ContactList;
//
// () => (props.customerList["arr"] = props.enteredInputs)
// (name, (name["arr"] = props.enteredInputs))
