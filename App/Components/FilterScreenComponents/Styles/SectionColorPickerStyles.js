import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../../Themes/";

export default StyleSheet.create({
  ...Fonts.style,
  centered: {
    alignItems: "center"
  },
  bodyPartControl: {
    flexDirection: "row"
  },
  bodyPartLabel: {
    width: 150,
    color: Colors.transparent,
    fontWeight: "bold"
  },
  picker: {
    width: 120,
    color: Colors.transparent
  },
  pickerImage: {
    width: 130,
    height: 30,
    borderColor: Colors.coal,
    borderWidth: 1
  }
});
