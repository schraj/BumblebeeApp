import React, { Component } from "react";
import { ScrollView, Text, Image, View, Button } from "react-native";
import { connect } from "react-redux";
import { CheckBox } from "react-native-elements";

import { Images } from "../Themes";
import SettingsActions from "../Redux/SettingsRedux";

// Styles
import styles from "./Styles/SplashScreenStyles";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  toggleCheckbox() {
    this.setState({ checked: !this.state.checked });
  }

  onButtonClick() {
    this.props.saveShowSplashScreenSetting(this.state.showSplashScreen);
    this.props.navigation.navigate("FilterScreen");
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={[styles.h1, styles.title]}>Bumblebee Field Guide</Text>
            <Text style={styles.splashDescription}>
              Welcome to the field guide. Just choose the body part colors of
              the Bumblebee and we will give you a list of possible species.
            </Text>
            <CheckBox
              containerStyle={styles.disableSplashCheckbox}
              center
              title="Don't show this page again"
              checked={this.state.checked}
              onPress={this.toggleCheckbox.bind(this)}
            />
            <Button
              onPress={this.onButtonClick.bind(this)}
              title="Go To Identification Page"
            />
          </View>
        </ScrollView>
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
    console.tron.log({ message: "in save setting", show: show });
    dispatch(SettingsActions.saveSettings(show));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
