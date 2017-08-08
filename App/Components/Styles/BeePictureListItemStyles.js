import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../Themes/";

export default StyleSheet.create({
  ...Fonts.style,
  beeItemContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 30
  },
  beeName: {
    color: Colors.coal
  },
  beeCategory: {
    color: Colors.coal
  },
  beeSize: {
    color: Colors.coal
  }
});
