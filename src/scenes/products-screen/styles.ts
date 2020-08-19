import { StyleSheet, Platform } from 'react-native';
import { Colors } from '../../commons/styles';
import Utils from '../../commons/utils';

const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: "5%",
        paddingTop: 5
    },
    flatlist: {
        height: "90%"
    },

    MainContainer: {

        justifyContent: 'center',
        flex: 1,
        // paddingTop: (Platform.OS === 'iOS') ? 20 : 0

    },

    FlatList_Item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },

    header_style: {

        width: '100%',
        height: 60,
        backgroundColor: '#00BCD4',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'

    },
    button: {
        backgroundColor: Colors.primary,
        marginVertical: '5%',
        marginHorizontal: '10%',
        paddingVertical: '10%',
        // width: "100%",
        height: "80%",
        borderRadius: 5
    },
    buttonTextStyle: {
        fontSize: 15,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: Utils.getFontFamily(),
    },
})

export default Styles