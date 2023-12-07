import { createContext, useState } from "react";

export const ApiContext = createContext("https://pokeapi.co/api/v2/");

export function ApiProvider(props) {
  let [url, setUrl] = useState(process.env.REACT_APP_API_URL);

  return (
    <ApiContext.Provider value={{ url, setUrl }}>
      {props.children}
    </ApiContext.Provider>
  );
}
