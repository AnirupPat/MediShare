import { StyleSheet, Platform, Dimensions } from 'react-native';
import { Colors } from '../../commons/styles';
import Utils from '../../commons/utils';
import device from 'react-native-device-detection'

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
        flex: 1
        // paddingTop: (Platform.OS === 'iOS') ? 20 : 0

    },

    FlatList_Item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },

    header_style: {

        width: '100%',
        height: device.isTablet ? 90 : 60,
        backgroundColor: '#6e5494',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    header_style2: {

        width: '100%',
        height: device.isTablet ? 90 : 60,
        backgroundColor: 'pink',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: '20%'
    },

    button: {
        backgroundColor: Colors.primary,
        marginTop: '3%',
        marginHorizontal: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        height: "80%",
        borderRadius: 5
    },
    buttonTextStyle: {
        fontSize: device.isTablet ? 25 : 18,
        color: Colors.secondary,
        alignSelf: 'center',
        fontFamily: Utils.getFontFamily()
    },
    buttonIconSeparator: {
        marginLeft: '2%'
    }
})

export default Styles