import { StyleSheet } from 'react-native';
import { Colors } from '../../../commons/styles/colors';
import Utils from '../../../commons/utils/index';

export const Styles = StyleSheet.create({
    insightPillContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    insightPillText: {
        fontFamily: Utils.getTitleFontFamily(),
        fontSize: 18,
        paddingLeft: 7
    }
});

export default Styles
