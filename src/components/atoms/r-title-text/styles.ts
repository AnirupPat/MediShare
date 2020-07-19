import { StyleSheet } from 'react-native';
import Utils from '../../../commons/utils/index';
import { Colors } from '../../../commons/styles/colors';

export const Styles = StyleSheet.create({
    titleText: {
        fontFamily: Utils.getTitleFontFamily(),
        fontSize: 22,
        color: Colors.primary
    }
});

export default Styles
