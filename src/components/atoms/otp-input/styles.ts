import { StyleSheet } from 'react-native';
import { Colors } from '../../../commons/styles/colors';
import Utils from '../../../commons/utils/index';

export const Styles = StyleSheet.create({
    otpInputContainer: {
        paddingVertical: 10,
        alignSelf: 'stretch',
    },
    otpInputTextInput: {
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
});

export default Styles
