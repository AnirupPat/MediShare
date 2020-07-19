import { StyleSheet } from 'react-native';
import Utils from '../../../commons/utils/index';
import { Colors } from '../../../commons/styles/colors';

export const Styles = StyleSheet.create({
    insightAllAckContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: "100%",
        flexDirection: 'column',
        padding: 30
    },
    mediumText: {
        fontFamily: Utils.getTitleFontFamily(),
        fontSize: 22,
        textAlign: 'center',
        paddingVertical: 10
    },
    normalText: {
        fontFamily: Utils.getThinFontFamily(),
        fontSize: 18,
        textAlign: 'center',
        paddingVertical: 10
    }
});

export default Styles
