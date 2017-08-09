import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Images } from "../../Themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    marginLeft: 12,
    fontSize: 16
  },
  photo: {
    height: 100,
    width: 100,
    borderRadius: 50
  }
});

const Row = props =>
  <View style={styles.container}>
    <Image source={Images.bumblebeePicture} />
    <Text style={styles.text}>
      {`${props.name}`} {props.size ? `Size: ${props.size}` : ""}}
    </Text>
  </View>;

export default Row;
