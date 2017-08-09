import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#C1C1C1"
  }
});

const Header = props =>
  <View style={styles.container}>
    <Text>List of Species</Text>
  </View>;

export default Header;
