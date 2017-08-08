import React, { Component } from "react";
import { ScrollView, Text, Image, View, Button } from "react-native";
import { connect } from "react-redux";
import { CheckBox } from "react-native-elements";
import { Images } from "../Themes";

// Styles
import styles from "./Styles/PicturesScreenStyles";

class PicturesScreen extends Component {
  constructor(props) {
    super(props);
    let ctr = 0;
    this.arr = Array.apply(null, { length: 10 }).map(() => {
      return ctr++;
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <View style={styles.centered}>
          <Text style={[styles.h1, styles.title]}>Species By Category</Text>
        </View>
        <ScrollView
          style={styles.container}
          centerContent={true}
          contentContainerStyle={styles.centered}
        >
          {this.arr.map(i => {
            return (
              <View key={i}>
                <Text style={[styles.beeImageCaption]}>Hunt's BB</Text>
                <Image
                  source={Images.bumblebeePicture}
                  style={styles.scrollingBeeImage}
                  resizeMode="stretch"
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default PicturesScreen;
