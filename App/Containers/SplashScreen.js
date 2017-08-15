import React, { Component } from "react";
import { ScrollView, Text, Image, View, Button, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { Avatar } from "react-native-elements";
import Orientation from "react-native-orientation";

import { ApplicationStyles, Fonts, Images, Colors } from "../Themes";
import SettingsActions from "../Redux/SettingsRedux";

class SplashScreen extends Component {
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
  },
  splashDescription: {
    ...Fonts.style.h5,
    color: Colors.coal,
    alignItems: "center",
    marginTop: 60,
    width: 260
  },
  beeAvatar: {
    marginTop: 60
  }
});

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
