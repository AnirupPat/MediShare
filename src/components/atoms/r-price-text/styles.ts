import { StyleSheet } from 'react-native';
import Utils from '../../../commons/utils/index';
import { Colors } from '../../../commons/styles/colors';

export const Styles = StyleSheet.create({
    thinText: {
        fontFamily: Utils.getMediumFontFamily(),
        fontSize: 18,
        color: Colors.success
    }
});

export default Styles
