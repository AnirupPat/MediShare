import { StyleSheet, Dimensions } from 'react-native';
import Utils from '@virtuelabs-io/rapido-modules/src/commons/utils';
import { Colors } from '@virtuelabs-io/rapido-modules/src/commons/styles/colors';

const { width, height } = Dimensions.get('screen');

const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: "5%",
        paddingVertical: 10
    },
    input: {
        borderRadius: 10,
        borderWidth: 2,
        width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderColor: 'black',
        fontFamily: Utils.getFontFamily(),
        fontSize: 15
    },
    cardPrice: {
        display: 'flex',
        flexDirection: 'row',
        padding: 5
    },
    priceLabel: {
        width: '30%',
        marginVertical: 10,
        borderColor: 'black',
        fontFamily: Utils.getFontFamily(),
        fontSize: 15
    },
    inputPrice: {
        borderRadius: 10,
        borderWidth: 2,
        width: '60%',
        borderColor: 'black',
        fontFamily: Utils.getFontFamily(),
        fontSize: 15,
        paddingHorizontal: 15
    },
    pointsTitle: {
        marginVertical: 7,
        fontSize: 22,
        fontFamily: Utils.getTabTitleFontFamily()
    },
    picButtonsView: {
        flexDirection: 'row',
        width: "100%"
    },
    button: {
        marginVertical: 10,
        paddingHorizontal: "20%",
        paddingVertical: '5%',
        backgroundColor: Colors.primary,
        width: "80%",
        borderRadius: 5
    },
    buttonTextStyle: {
        fontSize: 15,
        color: Colors.secondary,
        textAlign: 'center',
        fontFamily: Utils.getFontFamily(),
    },
    imageView: { 
         width: width * 0.9, 
        display: "flex", 
        flexDirection: "row", 
        flexWrap: "wrap", 
        alignContent: "center", 
        alignItems: "center", 
        justifyContent: "center",
    },
    image: { 
        width: "100%", 
        height: 150,
        borderRadius: 10
    },
    imageTouchableOpacity: {
        width: '45%',
        margin: 5
    }
})

export default Styles