import { StyleSheet } from 'react-native';
import Utils from '../../../commons/utils/index';
import { Colors } from '../../../commons/styles/colors';

export const Styles = StyleSheet.create({
    settingsItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%",
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: Colors.codes.silver
    },
    settingsInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    settingsNavigationIcon: {

    },
    itemTextStyle: {
        fontFamily: Utils.getFontFamily(),
        fontSize: 22
    }
});

export default Styles
