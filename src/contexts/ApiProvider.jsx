import { createContext } from "react";

export const ApiContext = createContext("https://pokeapi.co/api/v2/");

export function ApiProvider(props) {
  return (
    <ApiContext.Provider value="https://pokeapi.co/api/v2/">
      {props.children}
    </ApiContext.Provider>
  );
}
