import { StyleSheet } from 'react-native';
import Utils from '../../../commons/utils/index';
import { Colors } from '../../../commons/styles/colors';

export const Styles = StyleSheet.create({
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        // paddingTop: 20
    },
    logo: {
        // marginTop: 20,
        width: 110,
        height: 110
    },
    headingText: {
        fontFamily: Utils.getHeadingFontFamily(),
        fontSize: 30,
        color: Colors.primary,
        marginTop: -40
    }
});

export default Styles
