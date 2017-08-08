import { StyleSheet } from "react-native";
import {
  Metrics,
  ApplicationStyles,
  Fonts,
  Colors,
  Images
} from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...Fonts.style,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  bumblebeeImage: {
    marginTop: Metrics.doubleSection,
    height: 400,
    width: 400,
    resizeMode: "stretch"
  },
  centered: {
    alignItems: "center"
  },
  title: {
    color: Colors.coal,
    marginTop: 30
  },
  subTitle: {
    color: Colors.coal,
    marginTop: Metrics.baseMargin
  },
  bodyPartControlTree: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  filteredItemText: {
    ...ApplicationStyles.screen.sectionText,
    paddingVertical: Metrics.smallMargin
  },
  sectionColorPicker: {
    display: "none"
  }
});
