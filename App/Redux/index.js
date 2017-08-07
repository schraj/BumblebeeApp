import { combineReducers } from "redux";
import configureStore from "./CreateStore";
import rootSaga from "../Sagas/";

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    nav: require("./NavigationRedux").reducer,
    settings: require("./SettingsRedux").reducer
  });

  return configureStore(rootReducer, rootSaga);
};
