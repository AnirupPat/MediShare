import { StyleSheet } from 'react-native';
import Utils from '../../../commons/utils/index';

export const Styles = StyleSheet.create({
    addressContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: "100%",
        flexDirection: 'column',
        marginVertical: 5,
    },
    addressInfoContainer: {
        paddingLeft: "10%",
        marginTop: 5,
        flexWrap: 'wrap'
    }
});

export default Styles
