import React, { PropTypes } from "react";
import { View, Text, Picker } from "react-native";
import { Button } from "react-native-elements";
import { Colors } from "../Themes";

import { getColorsForBodyPart } from "../Services/FilterService";
import styles from "./Styles/SectionColorPickerStyles";

export default class SectionColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: "NC"
    };
  }

  static propTypes = {
    bodyPart: PropTypes.string.isRequired,
    bodyPartCode: PropTypes.string.isRequired,
    controlHeight: PropTypes.number.isRequired,
    onColorChange: PropTypes.func.isRequired
  };

  onSelectionChange(itemValue) {
    this.setState({ selectedColor: itemValue });
    this.props.onColorChange(itemValue, this.props.bodyPartCode);
  }

  activatePicker(e) {}

  render() {
    const { bodyPart, bodyPartCode, controlHeight } = this.props;
    const colorValues = getColorsForBodyPart(bodyPartCode);
    return (
      <View
        style={[
          styles.centered,
          styles.bodyPartControl,
          { height: controlHeight }
        ]}
      >
        <Text style={[styles.bodyPartLabel, styles.h6]}>
          {bodyPart}
        </Text>
        <Button
          title={bodyPart}
          buttonStyle={styles.pickerImage}
          backgroundColor={Colors.transparent}
          color={Colors.coal}
          borderRadius={5}
          containerViewStyle={[styles.pickerImage, { borderRadius: 5 }]}
          onPress={e => this.activatePicker.bind(this)(e)}
        />
        <Picker
          style={styles.picker}
          selectedValue={this.state.selectedColor}
          onValueChange={itemValue => this.onSelectionChange(itemValue)}
        >
          {colorValues.map(v => {
            return <Picker.Item key={v} label={v} value={v} />;
          })}
        </Picker>
      </View>
    );
  }
}
