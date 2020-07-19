import { StyleSheet } from 'react-native';
import Utils from '../../../commons/utils/index';

export const Styles = StyleSheet.create({
    detailsContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'nowrap',
        width: "100%",
        flexDirection: 'row',
        marginVertical: 5,
    },
    rightContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '40%',
        flexWrap: 'wrap'
    },
    leftContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '40%',
        flexWrap: 'wrap'
    },
});

export default Styles
