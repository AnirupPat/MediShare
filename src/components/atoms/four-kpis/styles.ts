import { StyleSheet } from 'react-native';
import { Colors } from '../../../commons/styles/colors';
import Utils from '../../../commons/utils/index';

export const Styles = StyleSheet.create({
    kpiParentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    kpiContainer: {
        width: "42%",
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: Colors.codes.silver,
        // borderWidth: 1,
        // borderRadius: 5,
        margin: "3%"
    },
    kpiLabel: {
        fontSize: 16,
        fontFamily: Utils.getFontFamily(),
        color: Colors.primary
    },
    kpiValue: {
        fontSize: 40,
        fontFamily: 'quantico-bold'
    },
});

export default Styles
