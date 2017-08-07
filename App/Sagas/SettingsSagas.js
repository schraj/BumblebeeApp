import { call } from "redux-saga/effects";
import { getSettings, setSettings } from "../Services/storageApi";
import SettingsActions from "../Redux/SettingsRedux";

export function* saveSettings(action) {
  yield call(setSettings, { showSplashScreen: action.showSplashScreen });
}
