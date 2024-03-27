import { createContext, useContext, useState } from "react";

const MainContext = createContext(null);

export const MainContextProvider = function ({ children }) {
  const [showFavourites, setShowFavourites] = useState(false);

  return (
    <MainContext.Provider value={{ showFavourites, setShowFavourites }}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);
