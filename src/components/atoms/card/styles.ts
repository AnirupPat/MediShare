import { StyleSheet } from 'react-native';
import { Colors } from '../../../commons/styles/colors';

export const Styles = StyleSheet.create({
	cardContainer: {
        backgroundColor: Colors.secondary,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: "5%",
        borderColor: Colors.secondary,
        borderWidth: 0.5,
        borderRadius: 10,
        shadowColor: Colors.palePrimary,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 5,
        shadowOpacity: 0.4,
        elevation: 4
    }
});

export default Styles
