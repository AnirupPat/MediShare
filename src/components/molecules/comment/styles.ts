import { StyleSheet } from 'react-native';
import Utils from '../../../commons/utils/index';
import { Colors } from '../../../commons/styles/colors';

export const Styles = StyleSheet.create({
    commentHolderContainer: {
        flexDirection: 'column',
        width: "100%",
        paddingVertical: 5,
        borderBottomWidth: 0.5,
        borderColor: Colors.codes.silver
    },
    commentorHolder: {
        paddingBottom: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexWrap: 'wrap'
    },
    commentorInfo: {
        flexDirection: 'row'
    },
    commentText: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
});

export default Styles
