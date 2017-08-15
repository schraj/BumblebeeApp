import React, { PropTypes } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Svg, { Polygon } from "react-native-svg";
import { Colors } from "../../Themes";

const bodyPartPaths = {
  Face: "128,10 170,10 170,40 128,40",
  FT: "77,25 149,0 220,25 220,50 77,50",
  CT: "77,0 220,0 220,80 77,80",
  RT: "77,10 220,10 220,19 149,42 77,19",
  T1: "53,0 108,0 108,20 53,20",
  T2: "53,0 108,0 108,20 53,20",
  T3: "53,0 108,0 108,20 53,20",
  T4: "53,0 108,0 108,20 53,20",
  T5: "53,0 108,0 108,20 53,20",
  T6: "53,0 108,0 108,20 53,20"
};

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
    const { bodyPart, bodyPartCode, bodyPartColor, controlHeight, onBodyPartClick } = this.props;

    let buttonColor = "transparent";
    if (bodyPartColor !== "NC") {
      let formattedColorName = bodyPartColor.replace(" ").toLowerCase();
      if (Colors[formattedColorName]) {
        buttonColor = formattedColorName;
      }
    }
    return (
      <View style={[styles.bodyPartControl, { height: controlHeight }]}>
        <View style={{ height: 0, width: 0 }}>
          <Svg height="50" width="300">
            <Polygon
              points={bodyPartPaths[bodyPartCode]}
              fill={Colors[buttonColor]}
              stroke={Colors.transparent}
              strokeWidth="0"
            />
          </Svg>
        </View>
        <Button
          title={bodyPart}
          buttonStyle={styles.buttonStyle}
          containerViewStyle={styles.buttonContainerStyle}
          backgroundColor={Colors.transparent}
          color={Colors.coal}
          onPress={() => onBodyPartClick(bodyPartCode)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bodyPartControl: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: 300,
    paddingLeft: 0
  },
  buttonStyle: {
    width: 300,
    height: 50,
    borderColor: Colors.transparent,
    paddingLeft: 0
  },
  buttonContainerStyle: {
    paddingLeft: 0,
    marginLeft: 4
  }
});
