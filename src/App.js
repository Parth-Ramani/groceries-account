import react from "react";
import Header from "./Components/Header";
import ContactList from "./Components/ContactList";
import "./App.css";

const App = (props) => {
  return (
    <div>
      <Header />
      <ContactList />
    </div>
  );
};

export default App;
