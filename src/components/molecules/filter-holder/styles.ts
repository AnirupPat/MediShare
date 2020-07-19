import { StyleSheet } from 'react-native';
import Utils from '../../../commons/utils/index';
import { Colors } from '../../../commons/styles/colors';

export const Styles = StyleSheet.create({
    filterContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        flexDirection: 'row',
        flexWrap: 'nowrap',
        borderBottomWidth: 0.5,
        paddingVertical: 10,
        borderBottomColor: Colors.codes.silver
    },
    filterIcon: {
        width: "20%",
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    filterText: {
        width: "60%",
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    filterNavigationIcon: {
        width: "20%",
        flexWrap: 'nowrap',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }
});

export default Styles
