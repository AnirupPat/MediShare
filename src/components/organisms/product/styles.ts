import { StyleSheet } from 'react-native';
import { Colors } from '@virtuelabs-io/rapido-modules/src/commons/styles/colors';

export const Styles = StyleSheet.create({
	orderContainer: {
        flexWrap: 'nowrap',
        flexDirection: 'row',
        width: "100%",
        justifyContent: 'space-between',
        paddingVertical: 10,
        marginHorizontal: 15,
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.codes.silver
    },
    orderNumberContainer: {
        width: "100%",
        justifyContent: 'flex-start',
        // alignItems: 'center',
        flexDirection: 'row',
    },
    rightContainer: {
        width: '100%',
        marginHorizontal: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    leftContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'column'
    },
    lowerBox: {
        // display: "flex",
        flexDirection: 'row',
        height: 100,
        width: '100%',
        // borderTopWidth: 1,
        // borderTopColor: Colors.codes.grayDark
        borderRadius: 5,
        borderWidth: 0.3,
        borderColor: Colors.codes.grayLight
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
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: "center",
        width: '5%'
      },
});

export default Styles