import React, { Component } from "react";
import { ScrollView, Text, Image, View, Button } from "react-native";
import { connect } from "react-redux";
import { CheckBox } from "react-native-elements";
import { Images } from "../Themes";

// Styles
import styles from "./Styles/SplashScreenStyles";

class ReportScreen extends Component {
  constructor(props) {
    super(props);
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

export default ReportScreen;
