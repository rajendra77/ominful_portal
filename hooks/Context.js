import React, { createContext, useState } from "react";
const Context = createContext();
const { Provider } = Context;

function ThemeContextProvider(props) {
  const [tab, setTab] = useState(1);
  const [setting, setSetting] = useState("Sales channel Apps");

  const updateSetting = (val) => {
    setSetting(val);
  };
  const updateTab = (val) => {
    setTab(val);
  };

  const { children } = props;
  return (
    <Provider
      value={{
        setting,
        updateSetting,
        tab,
        updateTab,
      }}
    >
      {children}
    </Provider>
  );
}

export { Context, ThemeContextProvider };
