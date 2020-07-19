import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    itemDetailsParentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        width: "100%",
        flexDirection: 'column',
    },
    itemDetailsContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'nowrap',
        width: "100%",
        flexDirection: 'row',
        marginVertical: 3,
    },
    rightHeaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: "20%"
    },
    centerHeaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: "55%"
    },
    leftHeaderContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: "20%"
    },
    rightContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        width: "20%"
    },
    centerContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        width: "55%"
    },
    leftContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        width: "20%"
    }
});

export default Styles
