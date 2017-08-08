import { TabNavigator } from "react-navigation";
import FilterScreen from "../Containers/FilterScreen";
import SplashScreen from "../Containers/SplashScreen";
import PicturesScreen from "../Containers/SplashScreen";
import ReportScreen from "../Containers/ReportScreen";

import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const TabNav = TabNavigator(
  {
    TabItem1: {
      screen: SplashScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) =>
          <Icon name={"glass"} size={30} color={tintColor} />
      }
    },
    TabItem2: {
      screen: FilterScreen,
      navigationOptions: {
        tabBarLabel: "Identify",
        tabBarIcon: ({ tintColor }) =>
          <Icon name={"glass"} size={30} color={tintColor} />
      }
    },
    TabItem3: {
      screen: PicturesScreen,
      navigationOptions: {
        tabBarLabel: "View",
        tabBarIcon: ({ tintColor }) =>
          <Icon name={"glass"} size={30} color={tintColor} />
      }
    },
    TabItem4: {
      screen: ReportScreen,
      navigationOptions: {
        tabBarLabel: "Report",
        tabBarIcon: ({ tintColor }) =>
          <Icon name={"glass"} size={30} color={tintColor} />
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#222"
    }
  }
);

export default TabNav;
