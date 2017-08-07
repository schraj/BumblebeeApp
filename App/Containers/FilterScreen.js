import React from 'react'
import { ScrollView, Text, Image, View, TouchableHighlight, Alert, Picker } from 'react-native'
import { Images } from '../Themes'
import SectionColorPicker from '../Components/SectionColorPicker'
import { filter, getBodyPartIndex } from '../Services/FilterService'

// Styles
import styles from './Styles/FilterScreenStyles'

export default class FilterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {      
      attributeArray: [null, null, null, null, null, null, null, null, null, null],
      filteredBeeArray: [],
    };
  }

  onColorChange(color, bodyPartCode) {
    let chosenColor = color !== 'NC' ? color : null;
    const bodyPartIndex = getBodyPartIndex(bodyPartCode);

    attributeArray = [...this.state.attributeArray];
    attributeArray[bodyPartIndex] = chosenColor;
    filteredBeeArray = filter(attributeArray);
    this.setState({
      attributeArray,
      filteredBeeArray,
    });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={[styles.h1, styles.title]}>
              Bumbles
            </Text>
            <Text style={[styles.h5, styles.subTitle]}>
              Bumblebee Identification Guide
            </Text>
          </View>
          <TouchableHighlight>
            <Image source={Images.bumblebeeWhole} style={styles.bumblebeeImage} >
              <View style={[styles.centered, styles.bodyPartControlTree]}>
                <SectionColorPicker bodyPart="Face" bodyPartCode="Face" controlHeight={50} onColorChange={this.onColorChange.bind(this)} />
                <SectionColorPicker bodyPart="Front of Thorax" bodyPartCode="FT" controlHeight={40} onColorChange={this.onColorChange.bind(this)}/>
                <SectionColorPicker bodyPart="Central Thorax" bodyPartCode="CT" controlHeight={50} onColorChange={this.onColorChange.bind(this)} />
                <SectionColorPicker bodyPart="Rear Thorax" bodyPartCode="RT" controlHeight={30} onColorChange={this.onColorChange.bind(this)} />
                <SectionColorPicker bodyPart="T1" bodyPartCode="T1" controlHeight={40} onColorChange={this.onColorChange.bind(this)} />
                <SectionColorPicker bodyPart="T2" bodyPartCode="T2" controlHeight={50} onColorChange={this.onColorChange.bind(this)} />
                <SectionColorPicker bodyPart="T3" bodyPartCode="T3" controlHeight={38} onColorChange={this.onColorChange.bind(this)} />
                <SectionColorPicker bodyPart="T4" bodyPartCode="T4" controlHeight={30} onColorChange={this.onColorChange.bind(this)} />
                <SectionColorPicker bodyPart="T5" bodyPartCode="T5" controlHeight={28} onColorChange={this.onColorChange.bind(this)} />
                <SectionColorPicker bodyPart="T6" bodyPartCode="T6" controlHeight={30} onColorChange={this.onColorChange.bind(this)} />
              </View>
            </Image>
          </TouchableHighlight>
          <View style={styles.section} >
            {this.state.attributeArray.every(i => i === null) && 
              <Text style={styles.sectionText}>
                Click on a section above to add a color.
              </Text>
            }

            {(!this.state.attributeArray.every(i => i === null)) && this.state.filteredBeeArray.length === 0 && 
              <Text style={styles.sectionText}>
                None Selected
              </Text>
            }

            {this.state.filteredBeeArray.length > 0 && this.state.filteredBeeArray.map(b => {
                return <Text key={b.name} style={styles.filteredItemText}>
                          {b.name}
                       </Text>
              })
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}
