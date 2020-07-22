import { StyleSheet } from 'react-native';
import Utils from '../../commons/utils';

const Styles = StyleSheet.create({
    screen: {
        marginHorizontal: '3%'
    },
    notifHolder: {
        flexDirection: 'column',
        width: "100%",
        paddingVertical: 5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    notifHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 10
    },
    medicineContainer: {
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
    },
    requestorContainer: {
        flexDirection: 'row'
    },
    requestorTextContainer: {
        fontFamily: Utils.getFontFamily(),
        fontSize: 18,
    }
   
})

export default Styles