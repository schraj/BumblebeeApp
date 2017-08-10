import React from "react";
import { ScrollView, Text, Image, View, TouchableHighlight, Alert, Modal } from "react-native";
import { Button, List, ListItem } from "react-native-elements";
import { Images, Colors } from "../Themes";
import SectionColorPicker from "../Components/SectionColorPicker";
import {
  filter,
  beeArray,
  getBodyPartIndex,
  getColorsForBodyPart
} from "../Services/FilterService";

// Styles
import styles from "./Styles/FilterScreenStyles";

export default class FilterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();

    this.setAttributeArrayToSpecificBee = this.setAttributeArrayToSpecificBee.bind(this);
  }

  componentDidMount() {
    console.tron.log({ message: "in did mount", props: this.props });
  }

  componentWillReceiveProps(nextProps) {
    console.tron.log({ message: "in receive props", nextProps: nextProps });
    const beeId = nextProps.navigation.state.params.id;
    this.setAttributeArrayToSpecificBee(beeId);
  }

  getInitialState() {
    return {
      modalVisible: false,
      attributeArray: ["NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC", "NC"],
      filteredBeeArray: [],
      possibleColors: ["NC"],
      selectedColor: "NC"
    };
  }

  setAttributeArrayToSpecificBee(beeId) {
    const bee = beeArray[beeId];
    attributeArray = bee.bodyParts.map(i => {
      if (i === null) {
        return "NC";
      } else {
        return i;
      }
    });
    filteredBeeArray = filter(attributeArray);

    this.setState({
      attributeArray,
      filteredBeeArray
    });
  }

  onBodyPartClick(bodyPartCode) {
    const possibleColors = getColorsForBodyPart(bodyPartCode);
    selectedColor = this.state.attributeArray[getBodyPartIndex(bodyPartCode)];
    this.setState({
      modalVisible: true,
      selectedBodyPartCode: bodyPartCode,
      possibleColors,
      selectedColor
    });
  }

  onColorSelection(selectedColor) {
    const bodyPartIndex = getBodyPartIndex(this.state.selectedBodyPartCode);
    attributeArray = [...this.state.attributeArray];
    attributeArray[bodyPartIndex] = selectedColor;
    filteredBeeArray = filter(attributeArray);
    this.setState({
      attributeArray,
      filteredBeeArray,
      modalVisible: false
    });
  }

  reset() {
    this.setState(this.getInitialState());
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <List containerStyle={{ marginBottom: 20 }}>
                {this.state.possibleColors.map(i =>
                  <ListItem
                    key={i}
                    title={i}
                    onPress={e => {
                      this.onColorSelection(i);
                    }}
                  />
                )}
              </List>
            </View>
          </View>
        </Modal>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={[styles.h1, styles.title]}>Identify Your Bee</Text>
          </View>
          <TouchableHighlight>
            <Image source={Images.bumblebeeWhole} style={styles.bumblebeeImage}>
              <View style={[styles.centered, styles.bodyPartControlTree]}>
                <SectionColorPicker
                  bodyPart="Face"
                  bodyPartCode="Face"
                  bodyPartColor={this.state.attributeArray[0]}
                  controlHeight={50}
                  onBodyPartClick={this.onBodyPartClick.bind(this)}
                />
                <SectionColorPicker
                  bodyPart="Front of Thorax"
                  bodyPartCode="FT"
                  bodyPartColor={this.state.attributeArray[1]}
                  controlHeight={40}
                  onBodyPartClick={this.onBodyPartClick.bind(this)}
                />
                <SectionColorPicker
                  bodyPart="Central Thorax"
                  bodyPartCode="CT"
                  bodyPartColor={this.state.attributeArray[2]}
                  controlHeight={50}
                  onBodyPartClick={this.onBodyPartClick.bind(this)}
                />
                <SectionColorPicker
                  bodyPart="Rear Thorax"
                  bodyPartCode="RT"
                  bodyPartColor={this.state.attributeArray[3]}
                  controlHeight={30}
                  onBodyPartClick={this.onBodyPartClick.bind(this)}
                />
                <SectionColorPicker
                  bodyPart="T1"
                  bodyPartCode="T1"
                  bodyPartColor={this.state.attributeArray[4]}
                  controlHeight={40}
                  onBodyPartClick={this.onBodyPartClick.bind(this)}
                />
                <SectionColorPicker
                  bodyPart="T2"
                  bodyPartCode="T2"
                  bodyPartColor={this.state.attributeArray[5]}
                  controlHeight={50}
                  onBodyPartClick={this.onBodyPartClick.bind(this)}
                />
                <SectionColorPicker
                  bodyPart="T3"
                  bodyPartCode="T3"
                  bodyPartColor={this.state.attributeArray[6]}
                  controlHeight={38}
                  onBodyPartClick={this.onBodyPartClick.bind(this)}
                />
                <SectionColorPicker
                  bodyPart="T4"
                  bodyPartCode="T4"
                  bodyPartColor={this.state.attributeArray[7]}
                  controlHeight={30}
                  onBodyPartClick={this.onBodyPartClick.bind(this)}
                />
                <SectionColorPicker
                  bodyPart="T5"
                  bodyPartCode="T5"
                  bodyPartColor={this.state.attributeArray[8]}
                  controlHeight={28}
                  onBodyPartClick={this.onBodyPartClick.bind(this)}
                />
                <SectionColorPicker
                  bodyPart="T6"
                  bodyPartCode="T6"
                  bodyPartColor={this.state.attributeArray[9]}
                  controlHeight={30}
                  onBodyPartClick={this.onBodyPartClick.bind(this)}
                />
              </View>
            </Image>
          </TouchableHighlight>
          <View style={styles.filterResults}>
            {this.state.attributeArray.every(i => i === "NC") &&
              <Text style={styles.subTitle}>Click on a section above to add a color.</Text>}

            {(this.state.filteredBeeArray.length > 0 ||
              !this.state.attributeArray.every(i => i === "NC")) &&
              <View style={styles.filterStatusBar}>
                <Text style={[styles.filterStatusBarText]}>
                  {this.state.filteredBeeArray.length} Found
                </Text>
                <Button
                  buttonStyle={styles.resetButton}
                  title="Reset"
                  backgroundColor={Colors.bloodOrange}
                  color={Colors.coal}
                  borderRadius={3}
                  containerViewStyle={styles.resetButtonContainer}
                  onPress={() => this.reset.bind(this)()}
                />
              </View>}

            {this.state.filteredBeeArray.length > 0 &&
              this.state.filteredBeeArray.map(b => {
                return (
                  <Text key={b.name} style={styles.filteredItemText}>
                    {b.name}
                  </Text>
                );
              })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
