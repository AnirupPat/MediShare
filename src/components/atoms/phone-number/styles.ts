import { StyleSheet } from 'react-native';
import { Colors } from '../../../commons/styles/colors';
import Utils from '../../../commons/utils/index';

export const Styles = StyleSheet.create({
	phoneNumberContainer: { },
    phoneNumberInputContainer: {
        flexDirection: 'row',
    },
    picker: {
        height: 200,
        width: "100%",
        alignSelf: 'stretch',
        marginBottom: 15
    },
    phoneNumberComponentContainer: {
        alignSelf: 'stretch'
    },
    inputHelpText: {
        fontFamily: Utils.getFontFamily(),
        color: Colors.codes.grayTextLight
    },
    phoneInput: {
        fontFamily: Utils.getFontFamily(),
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        width: "80%",
        textAlign: 'left',
        fontSize: 20
    },
    dialCodeInput: {
        fontFamily: Utils.getFontFamily(),
        borderBottomColor: Colors.primary,
        borderBottomWidth: 1,
        width: "20%",
        textAlign: 'left',
        fontSize: 20,
        color: Colors.palePrimary
    }
});

export default Styles
