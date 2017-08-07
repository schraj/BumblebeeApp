import { StackNavigator } from "react-navigation";
import FilterScreen from "../Containers/FilterScreen";
import SplashScreen from "../Containers/SplashScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = StackNavigator(
  {
    FilterScreen: {
      screen: FilterScreen
    },
    SplashScreen: {
      screen: SplashScreen
    }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "SplashScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
