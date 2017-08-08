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
    color: Colors.coal,
    marginTop: 30
  },
  subTitle: {
    color: Colors.coal,
    marginTop: Metrics.baseMargin
  },
  disableSplashCheckbox: {
    marginBottom: 30,
    backgroundColor: Colors.snow
  },
  splashDescription: {
    ...Fonts.style.h5,
    color: Colors.coal,
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
    width: 300
  }
});
