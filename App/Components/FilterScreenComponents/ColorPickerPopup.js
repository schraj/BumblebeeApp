import React, { PropTypes } from "react";
import { Modal, View } from "react-native";
import { List, ListItem } from "react-native-elements";

export default class SectionColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    visible: PropTypes.bool.isRequired,
    colors: PropTypes.arrayOf(String).isRequired,
    onSelectColor: PropTypes.func.isRequired
  };

  render() {
    const { visible, colors, onSelectColor } = this.props;

    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={visible}
        onRequestClose={() => {}}
      >
        <View style={{ marginTop: 22 }}>
          <View>
            <List containerStyle={{ marginBottom: 20 }}>
              {colors.map(i =>
                <ListItem
                  key={i}
                  title={i}
                  onPress={e => {
                    onSelectColor(i);
                  }}
                />
              )}
            </List>
          </View>
        </View>
      </Modal>
    );
  }
}
