import { put, select, call } from "redux-saga/effects";
import { getSettings, setSettings } from "../Services/storageApi";
import SettingsActions from "../Redux/SettingsRedux";

// process STARTUP actions
export function* startup(action) {
  if (__DEV__ && console.tron) {
  }

  // yield call(setSettings, { showSplashScreen: true });

  // deal with splash screen setting
  const response = yield call(getSettings);
  let showSplashScreen = true;
  if (response && typeof response.showSplashScreen !== "undefined") {
    showSplashScreen = response.showSplashScreen;
  }
  yield put(SettingsActions.setSettings(showSplashScreen));
}
