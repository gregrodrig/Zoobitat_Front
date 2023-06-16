import React, { useState } from "react";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const token = window.sessionStorage.getItem("token");
  const [jwt, setJwt] = useState(token);

  return (
    <Context.Provider value={{ jwt, setJwt }}>{children}</Context.Provider>
  );
}

export default Context;
