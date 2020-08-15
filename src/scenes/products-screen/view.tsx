import React, { Dispatch } from 'react'
import { ScrollView, View, Dimensions, Text, FlatList } from 'react-native'
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

var med = []
class MedicineScreen extends React.Component<MedicineScreenProps, MedicineScreenState> {

    constructor(props: MedicineScreenProps, state: MedicineScreenState) {
        super(props)
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
        this.props.navigation.navigate("medicineAdd", {
            title: "New Medicine"
        })
    }

    handleNavigateToDetail = () => {

    }

    render(): React.ReactNode {
        return (
            <SafeAreaView style={Styles.screen}>
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

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): MedicineScreenDispatchProps => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(MedicineScreen)