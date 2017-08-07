import React, { Component } from "react";
import { ScrollView, Text, Image, View, Button } from "react-native";
import { connect } from "react-redux";
import { Images } from "../Themes";

// Styles
import styles from "./Styles/SplashScreenStyles";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    console.tron.log({ message: "in constructor", object: props });
  }

  componentWillReceiveProps(nextProps) {}

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image
          source={Images.background}
          style={styles.backgroundImage}
          resizeMode="stretch"
        />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={[styles.h1, styles.title]}>Bumblebee Field Guide</Text>
            <Text style={styles.splashDescription}>
              Welcome to the field guide. Just choose the body part colors of
              the Bumblebee and we will give you a list of possible species.
            </Text>
            <Button
              onPress={() => this.props.navigation.navigate("FilterScreen")}
              title="Go To Identification Page"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  saveShowSplashScreenSetting: show => {
    console.tron.log({ message: "in save setting", show: show });
    dispatch(Actions.saveShowSplashScreenSetting());
  }
});

export default connect(null, mapDispatchToProps)(SplashScreen);
