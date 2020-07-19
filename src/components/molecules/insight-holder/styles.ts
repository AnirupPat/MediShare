import { StyleSheet } from 'react-native';
import Utils from '../../../commons/utils/index';
import { Colors } from '../../../commons/styles/colors';

export const Styles = StyleSheet.create({
    insightHolderContainer: {
        flexDirection: 'column',
        width: "100%",
        paddingVertical: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    insightHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10
    },
    pillContainer: {
        width: '60%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    ackContainer: {
        width: "40%",
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
});

export default Styles
