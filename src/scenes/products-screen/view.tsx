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
import { RButton } from '../../components/atoms/r-button/view';

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

    registerForPushNotifications = async () => {
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

    handleDonate = () => {

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

    footer = () => {
        return (
            <View>
                <Text>This is the footer</Text>
            </View>);
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#607D8B",
                }}
            />
        );
    }

    Render_FlatList_Sticky_header = () => {

        var Sticky_header_View = (

            <View style={Styles.header_style}>
                <TouchableOpacity style={Styles.button}>
                    <View>
                        <Text style={Styles.buttonTextStyle}>Donate</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}>
                    <View>
                        <Text style={Styles.buttonTextStyle}>Retain</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button}>
                    <View>
                        <Text style={Styles.buttonTextStyle}>Discard</Text>
                    </View>
                </TouchableOpacity>
            </View>

        );

        return Sticky_header_View;

    };

    render(): React.ReactNode {
        return (
            <View style={Styles.MainContainer}>
                <FlatList
                    data={this.props.data}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={(product) => <Product data={product.item} onPress={this.handleNavigateToDetail.bind(this, product.item.id)} />}
                    ListHeaderComponent={this.Render_FlatList_Sticky_header}
                    stickyHeaderIndices={[0]}
                />
            </View>
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