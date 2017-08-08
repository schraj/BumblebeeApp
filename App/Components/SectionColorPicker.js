import React, { PropTypes } from "react";
import { View, Text, Picker } from "react-native";
import { Button } from "react-native-elements";
import { Colors } from "../Themes";

import styles from "./Styles/SectionColorPickerStyles";

export default class SectionColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    bodyPart: PropTypes.string.isRequired,
    bodyPartCode: PropTypes.string.isRequired,
    bodyPartColor: PropTypes.string.isRequired,
    controlHeight: PropTypes.number.isRequired,
    onBodyPartClick: PropTypes.func.isRequired
  };

  render() {
    const {
      bodyPart,
      bodyPartCode,
      bodyPartColor,
      controlHeight,
      onBodyPartClick
    } = this.props;

    let buttonColor = "transparent";
    if (bodyPartColor !== "NC") {
      let formattedColorName = bodyPartColor.replace(" ").toLowerCase();
      if (Colors[formattedColorName]) {
        buttonColor = formattedColorName;
      }
    }
    return (
      <View
        style={[
          styles.centered,
          styles.bodyPartControl,
          { height: controlHeight }
        ]}
      >
        <Button
          title={bodyPart}
          buttonStyle={styles.pickerImage}
          backgroundColor={Colors[buttonColor]}
          color={Colors.coal}
          borderRadius={5}
          containerViewStyle={[styles.pickerImage, { borderRadius: 5 }]}
          onPress={() => onBodyPartClick(bodyPartCode)}
        />
      </View>
    );
  }
}
