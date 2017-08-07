import { put, select } from "redux-saga/effects";
import { getSettings, setSettings } from "../Services/storageApi";

// process STARTUP actions
export function* startup(action) {
  if (__DEV__ && console.tron) {
  }

  // deal with splash screen setting
  const response = yield call(getSettings);
  let showSplashScreen = false;
  let settingsNeedInitialized = false;
  if (response && typeof response.showSplashScreen !== "undefined") {
    showSplashScreen = response.showSplashScreen;
  } else {
    yield call(setSettings, { showSplashScreen: false });
  }
}
