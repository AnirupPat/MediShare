import { StyleSheet } from 'react-native';
import { Colors } from '../../../commons/styles/colors';
import Utils from '../../../commons/utils/index';

export const Styles = StyleSheet.create({
    button: {
        marginVertical: 10,
        paddingVertical: 7,
        paddingHorizontal: "25%",
        backgroundColor: Colors.primary,
        width: "100%",
        borderRadius: 5
    },
    buttonTextStyle: {
        fontSize: 22,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: Utils.getFontFamily(),
    }
});

export default Styles
