import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Fonts } from "../../Themes";

const Header = props =>
  <View style={styles.container}>
    <Text style={styles.text}>List of Species</Text>
  </View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#C1C1C1"
  },
  text: {
    marginLeft: 20,
    fontSize: Fonts.size.h2
  }
});

export default Header;
