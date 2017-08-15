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
  T1: "48,37 75,5 149,15 225,5 252,37",
  T2: "48,0 252,0 258,27 252,55 48,55 42,27",
  T3: "47,7 253,7 240,42 60,42",
  T4: "65,13 235,13 218,40 81,40",
  T5: "89,17 211,17 194,37 106,37",
  T6: "111,14 190,14 149,41"
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
