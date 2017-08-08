import { takeLatest } from "redux-saga/effects";
import DebugConfig from "../Config/DebugConfig";

/* ------------- Types ------------- */

import { StartupTypes } from "../Redux/StartupRedux";
import { SettingsTypes } from "../Redux/SettingsRedux";

/* ------------- Sagas ------------- */

import { startup } from "./StartupSagas";
import { saveSettings } from "./SettingsSagas";

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield [
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(SettingsTypes.SAVE_SETTINGS, saveSettings)
  ];
}
