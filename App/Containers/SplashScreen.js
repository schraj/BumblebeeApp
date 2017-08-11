import React, { Component } from "react";
import { ScrollView, Text, Image, View, Button } from "react-native";
import { connect } from "react-redux";
import { Avatar } from "react-native-elements";

import { Images } from "../Themes";
import SettingsActions from "../Redux/SettingsRedux";

// Styles
import styles from "./Styles/SplashScreenStyles";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.centered}>
          <Text style={styles.title}>Bumblebee Field Guide</Text>
          <Text style={styles.splashDescription}>
            Choose "Identify" to identify your bee or "List" to see all of the indigenous species of
            Washington
          </Text>
          <Avatar
            containerStyle={styles.beeAvatar}
            xlarge
            rounded
            source={Images.bumblebeePicture}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    showSplashScreen: state.settings.showSplashScreen
  };
};

const mapDispatchToProps = dispatch => ({
  saveShowSplashScreenSetting: show => {
    dispatch(SettingsActions.saveSettings(show));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
