import { createContext } from "react";

export const ApiContext = createContext("https://pokeapi.co/api/v2/");

console.log("process.env.API_URL value is: " + process.env.REACT_APP_API_URL);

export function ApiProvider(props) {
  return (
    <ApiContext.Provider value="https://pokeapi.co/api/v2/">
      {props.children}
    </ApiContext.Provider>
  );
}
