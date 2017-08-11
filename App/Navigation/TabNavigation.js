import React from "react";
import { TabNavigator } from "react-navigation";
import FilterScreen from "../Containers/FilterScreen";
import SplashScreen from "../Containers/SplashScreen";
import PicturesScreen from "../Containers/PicturesScreen";
import ReportScreen from "../Containers/ReportScreen";

import styles from "./Styles/NavigationStyles";
import Colors from "../Themes/Colors";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// Manifest of possible screens
const TabNav = TabNavigator(
  {
    TabItem1: {
      screen: SplashScreen,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome name={"home"} size={26} style={{ color: tintColor }} />
      }
    },
    TabItem2: {
      screen: FilterScreen,
      path: "TabItem2/:id",
      navigationOptions: {
        tabBarLabel: "Identify",
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome name={"search"} size={26} style={{ color: tintColor }} />
      }
    },
    TabItem3: {
      screen: PicturesScreen,
      path: "TabItem3/:id",
      navigationOptions: {
        tabBarLabel: "List",
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome name={"bars"} size={26} style={{ color: tintColor }} />
      }
    },
    TabItem4: {
      screen: ReportScreen,
      navigationOptions: {
        tabBarLabel: "Report",
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome name={"paper-plane"} size={26} style={{ color: tintColor }} />
      }
    }
  },
  {
    tabBarOptions: {
      showIcon: true,
      style: {
        backgroundColor: Colors.lightBlue
      }
    },
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnabled: false
  }
);

export default TabNav;
