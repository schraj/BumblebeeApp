import React, { Component } from "react";
import { ScrollView, Text, Image, View, Button, ListView } from "react-native";
import { connect } from "react-redux";
import { Images } from "../Themes";
import Row from "../Components/PicturesScreenComponents/Row";
import Header from "../Components/PicturesScreenComponents/Header";
import SectionHeader from "../Components/PicturesScreenComponents/SectionHeader";

import { getFormattedBeeArray } from "../Services/FilterService";

// Styles
import styles from "./Styles/PicturesScreenStyles";

class PicturesScreen extends Component {
  constructor(props) {
    super(props);

    const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
    const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`];

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
      getSectionData,
      getRowData
    });

    const { dataBlob, sectionIds, rowIds } = getFormattedBeeArray();
    this.state = {
      dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds)
    };
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={data => <Row {...data} />}
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
          renderHeader={() => <Header />}
          renderSectionHeader={sectionData => <SectionHeader {...sectionData} />}
        />
      </View>
    );
  }
}

export default PicturesScreen;
