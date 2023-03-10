import { AppState, AppAction } from "../models/context";

export const reducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case "THEME-TOGGLE":
      return { ...state, darkMode: state.darkMode };
    default:
      return state;
  }
};
