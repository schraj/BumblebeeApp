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
    marginTop: 30
  },
  subTitle: {
    color: Colors.silver,
    marginTop: Metrics.baseMargin
  },
  disableSplashCheckbox: {
    marginBottom: 30,
    backgroundColor: Colors.snow
  },
  splashDescription: {
    ...Fonts.style.h5,
    color: Colors.silver,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
    width: 300
  }
});
