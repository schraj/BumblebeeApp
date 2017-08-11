import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Fonts, Colors, Images } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...Fonts.style,
  container: {
    paddingBottom: 0
  },
  centered: {
    alignItems: "center"
  },
  title: {
    color: Colors.coal,
    marginTop: 10
  },
  subTitle: {
    color: Colors.coal,
    marginTop: Metrics.baseMargin
  },
  filterResults: {
    alignItems: "center"
  },
  filteredItemText: {
    color: Colors.coal,
    paddingVertical: Metrics.smallMargin,
    fontSize: 16
  },
  sectionColorPicker: {
    display: "none"
  },
  filterStatusBar: {
    flex: 1,
    flexDirection: "row"
  },
  filterStatusBarText: {
    flex: 2,
    fontSize: Fonts.size.h4,
    paddingLeft: 30
  },
  resetButton: {
    paddingTop: 10,
    width: 100,
    height: 30
  },
  resetButtonContainer: {
    paddingRight: 10,
    borderRadius: 3
  }
});
