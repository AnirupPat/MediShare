import { StyleSheet } from 'react-native';
import { Colors } from '@virtuelabs-io/rapido-modules/src/commons/styles/colors';

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
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
        width: '10%',
        paddingHorizontal: '2%'
    },
    orderNumberContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    rightContainer: {
        flexDirection: 'column',
        width: '90%',
        paddingHorizontal: '2%'
    },
    leftContainer: {
        flexDirection: 'column'
    },
    donate: {
        paddingTop: 20,
        paddingLeft: 40,
        width: '50%'
    },
    donateIcon: {
        width: 55,
        height: 40,
        paddingLeft: 15
    },
    qunatityBox: {
        paddingTop: 20,
        paddingLeft: 20,
        width: '50%',
        borderLeftColor: Colors.codes.grayLight,
        borderLeftWidth: 0.3
    },
    quantity: {
        fontSize: 35,
        marginHorizontal: 20
    },
    delete: {
        marginLeft: 10,

    },
    deleteBox: {
        width: '20%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-end'
    },
    medicineNameBox: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row'
    },
    quantityActionBox: {
        display: 'flex',
        flexDirection: 'row'
    },
    quantityAction: {
        marginTop: 10
    },
    qtyBox: {
        marginLeft: 10,
        marginTop: 2
    },
    checkbox: {
        alignSelf: "center",
        width: '5%'
    },
    buttonStack: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'stretch'
    },
    iconSeparator: {
        marginHorizontal: '1%'
    },
    innerIcons: {
        marginRight: '1%'
    }
});

export default Styles