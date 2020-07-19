import { StyleSheet } from 'react-native';
import Utils from '../../../commons/utils/index';
import { Colors } from '../../../commons/styles/colors';

export const Styles = StyleSheet.create({
    vizHeader: {
        fontSize: 18,
        fontFamily: Utils.getHeadingFontFamily(),
        fontWeight: 'bold',
        color: Colors.primary
    }
});

export default Styles
