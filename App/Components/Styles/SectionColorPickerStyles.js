import { StyleSheet } from 'react-native'
import { Colors, Metrics, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...Fonts.style,
  centered: {
    alignItems: 'center'
  },
  bodyPartControl: {
    flexDirection: 'row'
  },
  bodyPartLabel: {
    width: 150,
    color: Colors.black,
    fontWeight: 'bold'
  },
  picker: {
    width: 120,
    color: Colors.black
  }
})
