import { StyleSheet } from 'react-native';
import { Colors } from '@virtuelabs-io/rapido-modules/src/commons/styles/colors';

export const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: '2%'
  },
  thanksBox: {
    alignItems: 'center'
  },
  donatedMeds: {
    marginTop: '5%',
    alignItems: 'flex-start',
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.codes.silver
    
  },
  medName: {
    display: 'flex',
    flexDirection: 'row',
    padding: '1%',
    width: '90%'
  }
})

export default Styles