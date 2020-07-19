import { StyleSheet } from 'react-native';
import { Colors } from '../../../commons/styles/colors';

export const Styles = StyleSheet.create({
	orderContainer: {
        flexWrap: 'nowrap',
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.codes.silver
    },
    orderNumberContainer: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    rightContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexDirection: 'column'
    },
    leftContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column'
    }
});

export default Styles
