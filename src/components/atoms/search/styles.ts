import { StyleSheet } from 'react-native';
import { Colors } from '../../../commons/styles/colors';
import Utils from '../../../commons/utils/index';

export const Styles = StyleSheet.create({
	searchContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: "5%",
        flexDirection: 'row',
        width: "100%",
        backgroundColor: Colors.codes.grayLighter,
        borderRadius: 20,
        marginVertical: 10
    },
    searchIconContainer: {

    },
    searchInputContainer: {
        width: "94%",
        paddingHorizontal: "5%",
        paddingVertical: 5
    },
    searchTextInput: {
        fontFamily: Utils.getFontFamily(),
        borderBottomColor: Colors.primary,
        width: "100%",
        textAlign: 'left',
        fontSize: 20
    }
});

export default Styles
