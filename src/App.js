import { useContext } from "react";
import "./App.css";
import { ApiContext } from "./contexts/ApiProvider";
import { ApiSearchForm } from "./components/ApiSearchForm";

function App() {
  let apiUrl = useContext(ApiContext);

  return (
    <div className="App">
      <ApiSearchForm />
    </div>
  );
}

export default App;
