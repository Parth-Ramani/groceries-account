import "./ContactList.css";
const ContactList = (props) => {
  return (
    <div className="listBox">
      <ul>
        {props.customerList.map((name) => (
          <li>
            <button onClick={() => props.clickme(name)} className="contactName">
              {name.fullName}
            </button>
            <button
              className="cancl"
              onClick={() => props.handleDeleteClick(name.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ContactList;
//
// () => (props.customerList["arr"] = props.enteredInputs)
// (name, (name["arr"] = props.enteredInputs))
