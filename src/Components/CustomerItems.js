import ContactList from "./ContactList";
import "./CustomerItems.css";
const CustomerItems = () => {
  return (
    <div>
      <div className="customer__name">
        <label className="customerName" htmlFor="fname">
          Customer Name
        </label>
        <br />
        <input
          id="fname"
          type="text"
          className="fname_input"
          required="required"
          placeholder="Full Name"
        />
        <button className="addbtn"> Add</button>
      </div>
      <div className="detailList">
        <input
          className="search_product"
          type="search"
          placeholder="Search.."
          name="search"
        />

        <div className="detail_container">
          <h1>Hari Sharma</h1>
          <table className="customers">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>soap</td>
                <td>5</td>
                <td>20-2-2021</td>
                <td>100</td>
                <td>
                  <button className="editbtn">Edit</button>
                  <button className="deletebtn">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default CustomerItems;
