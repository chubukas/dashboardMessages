import { createContext, useReducer, useContext } from "react";

import { Reducers } from "./reducer";
import { initialState } from "./state";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(Reducers, initialState);
  return (
    <>
      <AppContext.Provider value={[appState, dispatch]}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;
