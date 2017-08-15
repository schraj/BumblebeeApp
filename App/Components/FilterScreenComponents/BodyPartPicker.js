import React, { PropTypes } from "react";
import { View, Text, TouchableHighlight, Image, StyleSheet, Dimensions } from "react-native";
import SectionColorPicker from "./SectionColorPicker";
import { Images, Colors } from "../../Themes";

const { width } = Dimensions.get("window");

export default class BodyPartPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    attributeArray: PropTypes.arrayOf(String).isRequired,
    onBodyPartSelect: PropTypes.func.isRequired
  };

  render() {
    const { attributeArray, onBodyPartSelect } = this.props;

    return (
      <TouchableHighlight style={{ paddingLeft: (width - 300) / 2 }}>
        <Image source={Images.bumblebeeWhole} style={styles.bumblebeeImage}>
          <View style={styles.bodyPartControlTree}>
            <SectionColorPicker
              bodyPart="Face"
              bodyPartCode="Face"
              bodyPartColor={attributeArray[0]}
              controlHeight={55}
              onBodyPartClick={onBodyPartSelect}
            />
            <SectionColorPicker
              bodyPart="Front of Thorax"
              bodyPartCode="FT"
              bodyPartColor={attributeArray[1]}
              controlHeight={53}
              onBodyPartClick={onBodyPartSelect}
            />
            <SectionColorPicker
              bodyPart="Central Thorax"
              bodyPartCode="CT"
              bodyPartColor={attributeArray[2]}
              controlHeight={47}
              onBodyPartClick={onBodyPartSelect}
            />
            <SectionColorPicker
              bodyPart="Rear Thorax"
              bodyPartCode="RT"
              bodyPartColor={attributeArray[3]}
              controlHeight={40}
              onBodyPartClick={onBodyPartSelect}
            />
            <SectionColorPicker
              bodyPart="T1"
              bodyPartCode="T1"
              bodyPartColor={attributeArray[4]}
              controlHeight={45}
              onBodyPartClick={onBodyPartSelect}
            />
            <SectionColorPicker
              bodyPart="T2"
              bodyPartCode="T2"
              bodyPartColor={attributeArray[5]}
              controlHeight={50}
              onBodyPartClick={onBodyPartSelect}
            />
            <SectionColorPicker
              bodyPart="T3"
              bodyPartCode="T3"
              bodyPartColor={attributeArray[6]}
              controlHeight={38}
              onBodyPartClick={onBodyPartSelect}
            />
            <SectionColorPicker
              bodyPart="T4"
              bodyPartCode="T4"
              bodyPartColor={attributeArray[7]}
              controlHeight={30}
              onBodyPartClick={onBodyPartSelect}
            />
            <SectionColorPicker
              bodyPart="T5"
              bodyPartCode="T5"
              bodyPartColor={attributeArray[8]}
              controlHeight={30}
              onBodyPartClick={onBodyPartSelect}
            />
            <SectionColorPicker
              bodyPart="T6"
              bodyPartCode="T6"
              bodyPartColor={attributeArray[9]}
              controlHeight={30}
              onBodyPartClick={onBodyPartSelect}
            />
          </View>
        </Image>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  bodyPartControlTree: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  bumblebeeImage: {
    marginTop: 10,
    height: 450,
    width: 300,
    resizeMode: "stretch"
  }
});
