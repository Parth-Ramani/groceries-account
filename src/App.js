import InputFields from "./Components/InputFields";
import "./App.css";

function App() {
  return (
    <div>
      <input className="search" type="text" placeholder="Search Account" />

      <button type="button" className="addAccount">
        + Account
      </button>
      <div className=" customerBox">
        <form>
          <label className="customerName" for="desc">
            Description
          </label>
          <br />
          <input className="name" type="text" placeholder="Name" />
        </form>
      </div>
      <InputFields />
    </div>
  );
}

export default App;
