import React, { Component } from "react";
import { ScrollView, Text, Image, View, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { CheckBox } from "react-native-elements";
import Orientation from "react-native-orientation";
import { Images, Fonts, ApplicationStyles, Colors } from "../Themes";

class ReportScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Orientation.lockToPortrait();
    // Orientation.unlockAllOrientations();
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.centered}>
          <Text style={[styles.h1, styles.title]}>Reporting Guidance</Text>
        </View>
        <ScrollView style={styles.container}>
          <Text style={[styles.h5, styles.subTitle]}>Guidance</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  ...Fonts.style,
  centered: {
    alignItems: "center"
  },
  title: {
    fontSize: Fonts.size.h2,
    paddingTop: 80,
    color: Colors.coal
  }
});

export default ReportScreen;
