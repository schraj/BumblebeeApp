import React from "react";
import {
  ScrollView,
  Text,
  Image,
  View,
  TouchableHighlight,
  StyleSheet,
  Dimensions
} from "react-native";
import { Button, List, ListItem } from "react-native-elements";
import Orientation from "react-native-orientation";
import { Images, Colors, Metrics, ApplicationStyles, Fonts } from "../Themes";
import ColorPickerPopup from "../Components/FilterScreenComponents/ColorPickerPopup";
import BodyPartPicker from "../Components/FilterScreenComponents/BodyPartPicker";
import FilterResultsList from "../Components/FilterScreenComponents/FilterResultsList";

import {
  filter,
  beeArray,
  getBodyPartIndex,
  getColorsForBodyPart
} from "../Services/FilterService";

const { width } = Dimensions.get("window");

export default class FilterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();

    console.tron.log({ message: "in ctor", initalstate: this.state });

    this.setAttributeArrayToSpecificBee = this.setAttributeArrayToSpecificBee.bind(this);
    this.onColorSelection = this.onColorSelection.bind(this);
    this.onBodyPartClick = this.onBodyPartClick.bind(this);
    this.selectBeeFromResults = this.selectBeeFromResults.bind(this);
  }

  componentDidMount() {
    Orientation.lockToPortrait();
  }

  componentWillReceiveProps(nextProps) {
    const beeId = nextProps.navigation.state.params.id;
    if (beeId) {
      this.setAttributeArrayToSpecificBee(beeId);
    }
  }

  componentWillUnmount() {
    console.tron.log({ message: "in unmount" });
    //Orientation.unlockAllOrientations();
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

  selectBeeFromResults(id) {
    this.props.navigation.navigate("TabItem3", { id: id });
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
        <ScrollView style={{ width: width }}>
          <ColorPickerPopup
            visible={this.state.modalVisible}
            colors={this.state.possibleColors}
            onSelectColor={this.onColorSelection}
          />
          <View style={styles.centered}>
            <Text style={styles.title}>Identify</Text>
          </View>
          <BodyPartPicker
            attributeArray={this.state.attributeArray}
            onBodyPartSelect={this.onBodyPartClick}
          />
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
              <FilterResultsList
                resultsList={filteredBeeArray}
                selectBeeFromResults={this.selectBeeFromResults}
              />}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  centered: {
    alignItems: "center"
  },
  title: {
    fontSize: Fonts.size.h2,
    color: Colors.coal,
    marginTop: 10
  },
  subTitle: {
    color: Colors.coal,
    marginTop: Metrics.baseMargin
  },
  filterResults: {
    alignItems: "center"
  },
  filteredItemText: {
    color: Colors.coal,
    paddingVertical: Metrics.smallMargin,
    fontSize: 16
  },
  filterStatusBar: {
    flex: 1,
    flexDirection: "row"
  },
  filterStatusBarText: {
    flex: 2,
    fontSize: Fonts.size.h4,
    paddingLeft: 30
  },
  resetButton: {
    paddingTop: 10,
    width: 100,
    height: 30
  },
  resetButtonContainer: {
    paddingRight: 10,
    borderRadius: 3
  }
});
