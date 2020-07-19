import { StyleSheet } from 'react-native';
import Utils from '../../../commons/utils/index';
import { Colors } from '../../../commons/styles/colors';

export const Styles = StyleSheet.create({
    filterItemContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        flexDirection: 'row',
        flexWrap: 'nowrap',
        borderBottomWidth: 0.5,
        paddingVertical: 10,
        borderBottomColor: Colors.codes.silver
    },
    filterItemText: {
        width: "80%",
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },
    filterItemSelectedIcon: {
        width: "20%",
        flexWrap: 'nowrap',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }
});

export default Styles
