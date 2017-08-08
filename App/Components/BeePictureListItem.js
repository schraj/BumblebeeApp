import React, { Component } from "react";
import { Text, Image, View } from "react-native";
import { Images } from "../Themes";
import { beeCategory } from "../Services/FilterService";

import styles from "./Styles/BeePictureListItemStyles";

class BeePictureListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View key={this.props.name} style={styles.beeItemContainer}>
        <Text style={styles.beeName}>
          Name: {this.props.name}
        </Text>
        <Text style={styles.beeCategory}>
          Category: {beeCategory[this.props.category]}
        </Text>
        <Text style={styles.beeSize}>
          Body Size:{" "}
          {this.props.bodySize ? this.props.bodySize : "Not Specified"}
        </Text>
        <Image
          source={Images.bumblebeePicture}
          style={styles.scrollingBeeImage}
          resizeMode="stretch"
        />
      </View>
    );
  }
}

export default BeePictureListItem;
