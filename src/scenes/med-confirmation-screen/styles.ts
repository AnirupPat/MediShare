import { StyleSheet } from 'react-native';
import Utils from '../../commons/utils';
import { Colors } from '../../commons/styles/colors';

export const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  passwordInputContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignSelf: 'stretch',
},
passwordInputTextInput: {
    fontFamily: Utils.getFontFamily(),
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
    width: "100%",
    textAlign: 'left',
    fontSize: 20
},
inputHelpText: {
    fontFamily: Utils.getFontFamily(),
    color: Colors.codes.grayTextLight
}
})

export default Styles