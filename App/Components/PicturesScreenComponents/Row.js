import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

import { Images, Colors, Fonts } from "../../Themes";

const Row = props =>
  <ListItem
    avatar={<Avatar large rounded source={Images.bumblebeePicture} />}
    key={props.id}
    title={props.name}
    subtitle={props.bodySize}
    titleStyle={styles.titleStyle}
    titleContainerStyle={styles.titleContainerStyle}
    containerStyle={{ paddingLeft: 30 }}
    onPress={() => {
      props.selectBeeSpecie(props.id);
    }}
  />;

styles = StyleSheet.create({
  titleContainerStyle: {
    paddingTop: 20,
    paddingBottom: 20
  },
  titleStyle: {
    fontSize: Fonts.size.h4,
    paddingLeft: 70
  }
});

export default Row;
