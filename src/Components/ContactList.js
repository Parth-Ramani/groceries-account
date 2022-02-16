import "./ContactList.css";
const ContactList = () => {
  return (
    <div className="listBox">
      <ul>
        <li>
          <button className="contactName">rohit</button>
        </li>
        <li>
          <button>rakesh</button>
        </li>
        <li>
          <button>akash</button>
        </li>
      </ul>
    </div>
  );
};
export default ContactList;
