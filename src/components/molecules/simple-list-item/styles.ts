import { StyleSheet } from 'react-native';
import Utils from '../../../commons/utils/index';
import { Colors } from '../../../commons/styles/colors';

export const Styles = StyleSheet.create({
    simpleListItemContainer: {
        flexDirection: 'row',
        width: "100%",
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: Colors.codes.silver
    },
    simpleItemText: {
        fontFamily: Utils.getMediumFontFamily(),
        fontSize: 22,
        paddingHorizontal: 10
    }
});

export default Styles
