import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { List, ListItem } from "react-native-elements";

import { Images, Colors, Fonts } from "../../Themes";

const FilterResultsList = props =>
  <View>
    <List containerStyle={styles.containerStyle}>
      {props.resultsList.map(r => {
        return (
          <ListItem
            key={r.id}
            title={r.name}
            titleStyle={styles.titleStyle}
            containerStyle={styles.listItemContainerStyle}
            onPress={() => {
              props.selectBeeFromResults(r.id);
            }}
          />
        );
      })}
    </List>
  </View>;

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    width: 200
  },
  listItemContainerStyle: {
    paddingTop: 0,
    paddingBottom: 0
  },
  titleStyle: {
    paddingTop: 0,
    paddingBottom: 0,
    fontSize: 16,
    color: Colors.coal
  }
});

export default FilterResultsList;
