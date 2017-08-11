import { StyleSheet } from "react-native";
import { Metrics, ApplicationStyles, Fonts, Colors, Images } from "../../Themes/";

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...Fonts.style,
  centered: {
    alignItems: "center"
  },
  title: {
    fontSize: Fonts.size.h2,
    paddingTop: 80,
    color: Colors.coal
  },
  splashDescription: {
    ...Fonts.style.h5,
    color: Colors.coal,
    alignItems: "center",
    marginTop: 60,
    width: 260
  },
  beeAvatar: {
    marginTop: 60
  }
});
