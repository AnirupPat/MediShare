import { StyleSheet } from 'react-native';
import { Colors } from '../../../commons/styles/colors';
import Utils from '../../../commons/utils/index';

export const Styles = StyleSheet.create({
	commentInputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: "5%",
        width: "100%",
        flexWrap: 'wrap'
    },
    commentInputText: {
        fontFamily: Utils.getFontFamily(),
        borderBottomColor: Colors.primary,
        width: "100%",
        textAlign: 'left',
        fontSize: 20,
        height: 250
    }
});

export default Styles
