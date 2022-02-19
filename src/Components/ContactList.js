import "./ContactList.css";
const ContactList = (props) => {
  const clickme = (name) => {
    console.log(name);
  };
  return (
    <div className="listBox">
      <ul>
        {props.data.map((name) => (
          <li>
            <button onClick={() => clickme(name)} className="contactName">
              {name.name}
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
