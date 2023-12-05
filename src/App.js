import { useContext } from "react";
import "./App.css";
import { ApiContext } from "./contexts/ApiProvider";

function App() {
  let apiUrl = useContext(ApiContext);

  return (
    <div className="App">
      <h1>{apiUrl}</h1>
    </div>
  );
}

export default App;
