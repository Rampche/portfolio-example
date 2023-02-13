import { createContext, ReactNode, useReducer } from "react";
import { AppContextModel } from "../models/context";
import { reducer } from "../reducers/appReducer";

export const AppContext = createContext({} as AppContextModel);

type Props = {
  children: ReactNode;
};

const AppProvider: React.FC<Props> = ({ children }) => {
  const initialState = {
    darkMode: true,
  };

  const [appState, dispatch] = useReducer(reducer, initialState);

  const value = {
    ...appState,
    dispatch,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
