import { StyleSheet } from 'react-native';
import Utils from '../../commons/utils';

const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        height: '100%'
    },
    container: {
        flex: 1,
         backgroundColor: 'white'
      },
      text: {
          color: 'black'
      },
      logoBox: {
          paddingTop: 50,
          paddingBottom: 50
      },
      donorBox: {
          width: '100%',
          paddingHorizontal: 20,
          paddingVertical: 10,
          display: 'flex',
          borderBottomWidth: 0.5,
          borderBottomColor: 'lightgrey'

      },
      donorAddress: {
          fontSize: 15,
          fontFamily: Utils.getTabTitleFontFamily()
      },
      nameBox: {
          flexDirection: 'row'
      },
      verifiedBox: {
          marginLeft: 10,
          marginTop: 5,
          height: '60%',
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: 'green'
      },
      verifiedFont: {
          paddingHorizontal: 5
      },
      distanceActionBox: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 20,
        padding: 10,
      },
      requestAction: {
          marginLeft: '30%',
          flexDirection: 'row',
          width: '30%'
      }
   
})

export default Styles