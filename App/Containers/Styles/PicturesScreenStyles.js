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
  centered: {
    alignItems: "center"
  },
  title: {
    color: Colors.silver,
    marginTop: 30,
    marginBottom: 30
  },
  subTitle: {
    color: Colors.silver,
    marginTop: Metrics.baseMargin
  },
  beeImageCaption: {
    color: Colors.silver,
    marginTop: 30,
    marginBottom: 10
  },
  scrollingBeeImage: {
    width: 300,
    height: 200
  }
});
