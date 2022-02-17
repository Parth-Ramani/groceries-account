import "./ContactList.css";
const ContactList = (props) => {
  return (
    <div className="listBox">
      <ul>
        {props.item.map((name) => (
          <li>
            <button className="contactName">{name.fullName}</button>
            <button className="cancl">X</button>
          </li>
        ))}

        {/* <li>
          <button className="contactName">rakesh</button>
          <button className="cancl">X</button>
        </li>
        <li>
          <button className="contactName">akash</button>
          <button className="cancl">X</button>
        </li>
        <li>
          <button className="contactName">akash</button>
          <button className="cancl">X</button>
        </li>
        <li>
          <button className="contactName">akash</button>
          <button className="cancl">X</button>
        </li>
        <li>
          <button className="contactName">akash</button>
          <button className="cancl">X</button>
        </li>
        <li>
          <button className="contactName">akash</button>
          <button className="cancl">X</button>
        </li> */}
      </ul>
    </div>
  );
};
export default ContactList;
