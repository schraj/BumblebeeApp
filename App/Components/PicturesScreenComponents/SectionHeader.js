import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Colors, Fonts } from "../../Themes";

const SectionHeader = props =>
  <View style={styles.container}>
    <Text style={styles.text}>
      Category: {props.categoryText}
    </Text>
  </View>;

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "#EAEAEA",
    alignItems: "center"
  },
  text: {
    fontSize: Fonts.size.h4
  }
});

export default SectionHeader;
