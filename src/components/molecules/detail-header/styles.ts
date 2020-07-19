import { StyleSheet } from 'react-native';
import Utils from '../../../commons/utils/index';
import { Colors } from '../../../commons/styles/colors';

export const Styles = StyleSheet.create({
    detailsContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'nowrap',
        width: "100%",
        flexDirection: 'row',
        marginVertical: 5,
    },
    rightContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '30%',
        flexWrap: 'wrap'
    },
    leftContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '60%',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    sectionHeaderText: {
        fontFamily: Utils.getTitleFontFamily(),
        fontSize: 22,
        color: Colors.alternatePrimary,
    },
    turner: {
        transform: [{ rotate: '180deg'}]
    }
});

export default Styles
