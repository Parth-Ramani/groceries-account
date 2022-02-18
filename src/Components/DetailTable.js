import "./DetailTable.css";
const DetailTable = (props) => {
  return (
    <div>
      <div className="detail_container">
        <h1>Parth Ramani</h1>

        <table className="customers">
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Edit</th>
          </tr>
          <tr>
            <td>{props.DUMMY_DATA.description}</td>
            <td></td>
            <td>4/12/2021</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>4/12/2021</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>4/12/2021</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>4/12/2021</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>4/12/2021</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>4/12/2021</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>4/12/2021</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>4/12/2021</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default DetailTable;
