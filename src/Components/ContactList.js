import "./ContactList.css";
const ContactList = (props) => {
  return (
    <div className="listBox">
      <ul>
        {props.item.map((name) => (
          <li>
            <button
            // onClick={() =>
            //   props.finalData(name.fullName);
            // }
            ></button>
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
