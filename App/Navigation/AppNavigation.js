import { StackNavigator } from 'react-navigation'
import FilterScreen from '../Containers/FilterScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  FilterScreen: { screen: FilterScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'FilterScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
