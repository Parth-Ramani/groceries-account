import ContactList from "./ContactList";
import "./CustomerItems";
const CustomerItems = () => {
  return (
    <div>
      <div className="customer__name">
        <label className="customer__name" htmlFor="fname">
          Customer Name
        </label>
        <input
          id="fname"
          type="text"
          className="fname_input"
          required="required"
          placeholder="Full Name"
        />
      </div>
    </div>
  );
};
export default CustomerItems;
