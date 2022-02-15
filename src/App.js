import InputFields from "./Components/InputFields";
import "./App.css";

function App() {
  return (
    <div>
      <input className="search" type="text" placeholder="Search Account" />

      <button type="button" className="addAccount">
        + Account
      </button>
      <InputFields />
    </div>
  );
}

export default App;
