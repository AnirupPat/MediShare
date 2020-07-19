import { StyleSheet } from 'react-native';
import Utils from '../../../commons/utils/index';
import { Colors } from '../../../commons/styles/colors';

export const Styles = StyleSheet.create({
    eventContainer: {
        paddingVertical: 10,
        flexDirection: 'row',
        borderBottomColor: Colors.codes.silver,
        borderBottomWidth: 0.5
    },
    eventLeftContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
            {
                rotate: '90deg'
            }
        ]
    },
    eventRightContainer: {
        width: '90%',
        flexDirection: 'column'
    },
    eventHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    eventAuthorContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    eventTimeContainer: {
        width: 200
    }
});

export default Styles
