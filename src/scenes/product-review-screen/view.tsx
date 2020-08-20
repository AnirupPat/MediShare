import React, { Dispatch } from 'react'
import { ScrollView, View, Dimensions, Text, FlatList, Alert, Platform, CheckBox } from 'react-native'
import Styles from './styles'
import { MedicineReviewScreenProps, MedicineReviewScreenState, MedicineReviewScreenDispatchProps } from './types'
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
import { clearMedPics, ProductsActionTypes, setCheckBox } from '../../store/medicines/actions';
import { RButton } from '../../components/atoms/r-button/view';
import { RText } from '../../components/atoms';

var med = []
class MedicineReviewScreen extends React.Component<MedicineReviewScreenProps, MedicineReviewScreenState> {
    notificationSubscription: any;

    constructor(props: MedicineReviewScreenProps, state: MedicineReviewScreenState) {
        super(props)
        // this.state = {
        //     token: null,
        //     notification: null,
        //     title: 'Hello World',
        //     body: 'Say something!',
        //   };
        var options = getStackStyles(
            this.props.title
        )
        options = {
            ...options
        }
        this.props.navigation.setOptions(options)
    }

    handleNavigateToNotifications = (id: any) => {
        this.props.navigation.navigate("notifications", {
            title: "Notifications"
        })
    }

    handleNavigateToNewProduct = () => {
        // this.props.clearMedPics()
        this.props.navigation.navigate("medicineAdd", {
            title: "New Medicine"
        })
    }

    handleNavigateToDetail = () => {
        console.log('trigerred !!')
    }

    handleOnClick = (id: number, value: boolean) => {
        console.log('clicked .... hurray !!!!')
        this.props.setCheckBox(id.toString(), !value)
    }

    handleDonate = () => {
        this.props.navigation.navigate("request", {
            title: "Donors"
        })
    }



    handleNotification = notification => {
        console.log('----lets see what is there in')
        console.log(notification)
        this.props.navigation.navigate("notifListner", {
            title: "Review"
        })
    };

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

            <View>
                <View style={Styles.header_style}>
                <TouchableOpacity style={Styles.button} onPress={() => this.handleDonate()}>
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
            <Text style={Styles.hintText}>** The following Meds will expire soon.</Text>
            </View>

        );

        return Sticky_header_View;

    };

    render(): React.ReactNode {
        return (
            <View style={Styles.MainContainer}>
                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={this.props.data}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={(product) =>
                        
                            
                            <Product
                                data={product.item}
                                // onPress={this.handleNavigateToDetail.bind(this, product.item.id)}
                                onPress={this.handleOnClick.bind(this, product.item.id, product.item.fields.selected)}
                                onClick={this.handleOnClick.bind(this, product.item.id, product.item.fields.selected)}
                            />

                    }
                    ListHeaderComponent={this.Render_FlatList_Sticky_header}
                    stickyHeaderIndices={[0]}
                />
            </View>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: MedicineReviewScreenProps): MedicineReviewScreenProps => {
    return {
        ...localProps,
        data: state.medicine.medicines,
        title: localProps.route.params.title
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ProductsActionTypes>): MedicineReviewScreenDispatchProps => {
    return {
        // clearMedPics: () => dispatch(clearMedPics()),
        setCheckBox: (id: string, value: boolean) => dispatch(setCheckBox(id, value))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(MedicineReviewScreen)