import { Dimensions } from "react-native";

import Fonts from "./Fonts";
import Metrics from "./Metrics";
import Colors from "./Colors";

const { width } = Dimensions.get("window");

const ApplicationStyles = {
  screen: {
    mainContainer: {
      width: width,
      flex: 1,
      backgroundColor: Colors.snow,
      alignItems: "center"
    },
    backgroundImage: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }
  }
};

export default ApplicationStyles;
