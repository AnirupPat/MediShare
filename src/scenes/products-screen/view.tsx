import React, { Dispatch } from 'react'
import { ScrollView, View, Dimensions, Text, FlatList, Alert, Platform } from 'react-native'
import Styles from './styles'
import { MedicineScreenProps, MedicineScreenState, MedicineScreenDispatchProps } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
import { Product } from '../../components/organisms/product/view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RAntIconButton } from '../../components/atoms/r-ant-icon-button/view';
import navigations from '../../navigations';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Linking } from 'expo';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { clearMedPics, ProductsActionTypes } from '../../store/medicines/actions';

var med = []
class MedicineScreen extends React.Component<MedicineScreenProps, MedicineScreenState> {

    constructor(props: MedicineScreenProps, state: MedicineScreenState) {
        super(props)
        // this.state = {
        //     token: null,
        //     notification: null,
        //     title: 'Hello World',
        //     body: 'Say something!',
        //   };
        var options = getStackStyles(
            this.props.title,
            "plus",
            () => {
                this.props.navigation.navigate("medicineAdd", {
                    title: "New Medicine"
                })
                //  this.handleNavigateToNewProduct()
            }
        )
        options = {
            ...options,
            headerRight: () => (
                <Ionicons name="md-notifications" style={{ marginRight: 15 }} size={28} color="black"
                    onPress={this.handleNavigateToNotifications}
                />
            ),
            headerLeft: () => (
                <AntDesign name="plus" style={{ marginLeft: 10 }}
                    onPress={this.handleNavigateToNewProduct}
                    size={28} color="black" />
            )
        }
        this.props.navigation.setOptions(options)
    }

    handleNavigateToNotifications = (id: any) => {
        this.props.navigation.navigate("notifications", {
            title: "Notifications"
        })
    }

    handleNavigateToNewProduct = () => {
        this.props.clearMedPics()
        this.props.navigation.navigate("medicineAdd", {
            title: "New Medicine"
        })
    }

    handleNavigateToDetail = () => {

    }

    async componentDidMount() {
        await this.registerForPushNotifications()
    }

    registerForPushNotifications = async() => {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus
        if (existingStatus !== 'granted') {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status
            if (finalStatus !== 'granted') {
                return;
            }
        }

        const token = await Notifications.getExpoPushTokenAsync();
        // console.log(token)

        const subscription = Notifications.addListener(this.handleNotification);
        this.sendPushNotification(token)
        this.setState({
            token
        });
    }

    sendPushNotification(token) {
        // console.log(token)
        // console.log('clicked')
        let response = fetch('https://exp.host/--/api/v2/push/send', {
            body: JSON.stringify({
                to: token,
                title: 'MediShare: Strive to make a change',
                body: 'Meds in your PillBox are expiring. This is the time you donate',
                sound: 'default'
            }),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST'
        });
    }

    handleNotification = notification => {
        this.setState({
            notification,
        });
    };

    render(): React.ReactNode {
        return (
            <SafeAreaView style={Styles.screen}>
                


                {/* <TouchableOpacity onPress={() => this.sendPushNotification(this.state.token)}>
                    <Text>Send me a notification!</Text>
                </TouchableOpacity> */}
                <FlatList
                    style={Styles.screen}
                    data={this.props.data}
                    renderItem={(product) => <Product data={product.item} onPress={this.handleNavigateToDetail.bind(this, product.item.id)} />}
                    keyExtractor={(product) => product.id.toString()}
                />
            </SafeAreaView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: MedicineScreenProps): MedicineScreenProps => {
    return {
        ...localProps,
        data: state.medicine.medicines,
        title: localProps.route.params.title
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ProductsActionTypes>): MedicineScreenDispatchProps => {
    return {
        clearMedPics: () => dispatch(clearMedPics())
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(MedicineScreen)