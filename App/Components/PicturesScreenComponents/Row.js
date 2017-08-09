import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Images, Colors, Fonts } from "../../Themes";

const Row = props =>
  <View style={styles.container}>
    <Image source={Images.bumblebeePicture} style={styles.photo} />
    <View>
      <Text style={styles.titleText}>
        {`${props.name}`}
      </Text>
      {props.bodySize &&
        <Text style={styles.subText}>
          Body Size: {props.bodySize}
        </Text>}
    </View>
  </View>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  titleText: {
    marginLeft: 20,
    fontSize: Fonts.size.h4
  },
  subText: {
    marginLeft: 20,
    fontSize: Fonts.size.h6
  },
  photo: {
    height: 100,
    width: 100,
    borderRadius: 50
  }
});

export default Row;
