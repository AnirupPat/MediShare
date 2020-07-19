import { StyleSheet } from 'react-native';
import Utils from '../../../commons/utils/index';
import { Colors } from '../../../commons/styles/colors';

export const Styles = StyleSheet.create({
    dadContianer: {
        overflow: 'visible'
    },
    outerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible'
    },
    vizHeader: {
        fontSize: 18,
        fontFamily: Utils.getHeadingFontFamily(),
        fontWeight: 'bold',
        color: Colors.primary
    }
});

export default Styles
