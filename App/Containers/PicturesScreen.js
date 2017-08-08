import React, { Component } from "react";
import { ScrollView, Text, Image, View, Button } from "react-native";
import { connect } from "react-redux";
import { CheckBox } from "react-native-elements";
import { Images } from "../Themes";
import BeePictureListItem from "../Components/BeePictureListItem";
import { beeArray } from "../Services/FilterService";

// Styles
import styles from "./Styles/PicturesScreenStyles";

class PicturesScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.centered}>
          <Text style={[styles.h1, styles.title]}>List of Species</Text>
        </View>
        <ScrollView
          style={styles.container}
          centerContent={true}
          contentContainerStyle={styles.centered}
        >
          {beeArray.map(b => {
            return <BeePictureListItem {...b} />;
          })}
        </ScrollView>
      </View>
    );
  }
}

export default PicturesScreen;
