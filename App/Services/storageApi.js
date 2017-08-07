import { AsyncStorage } from "react-native";
const SETTINGS_KEY = "BumblebeeAppSettings";

export const setSettings = data => {
  AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(data));
};

export const getSettings = () => {
  return AsyncStorage.getItem(SETTINGS_KEY).then(settingsStr => {
    return JSON.parse(settingsStr);
  });
};
