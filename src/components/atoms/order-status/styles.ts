import { StyleSheet } from 'react-native';
import { Colors } from '../../../commons/styles/colors';
import Utils from '../../../commons/utils/index';

export const Styles = StyleSheet.create({
    orderStatusContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: Colors.codes.statusPill,
    },
    orderStatusText: {
        fontFamily: Utils.getTitleFontFamily(),
        fontSize: 15,
        paddingLeft: 7
    }
});

export default Styles
