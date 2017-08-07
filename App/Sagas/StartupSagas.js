import { put, select, call } from "redux-saga/effects";
import { getSettings, setSettings } from "../Services/storageApi";
import SettingsActions from "../Redux/SettingsRedux";

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
    yield call(setSettings, { showSplashScreen });
  }
  yield put(SettingsActions.setSettings(showSplashScreen));
}
