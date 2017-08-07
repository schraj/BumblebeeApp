import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  saveSettings: ["showSplashScreen"]
});

export const SettingsTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  showSplashScreen: null
});

/* ------------- Reducers ------------- */

export const saveSettings = (state, { showSplashScreen }) => {
  return state.merge({ showSplashScreen });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SAVE_SETTINGS]: saveSettings
});
