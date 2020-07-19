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

class MedicineScreen extends React.Component<MedicineScreenProps, MedicineScreenState> {

    constructor(props: MedicineScreenProps, state: MedicineScreenState) {
        super(props)
        var options = getStackStyles(
            this.props.title,
            "plus",
            () => {
                 this.handleNavigateToNewProduct()
            }
        )
        options = {
            ...options,
            headerLeft: () => (
                <RAntIconButton
                    icon="filter"
                    size={28}
                    onPress={() => {
                        // @ts-ignore
                        // REASON: state picked up from redux
                        this.props.navigation.navigate('filterProducts', {
                            title: "Filters"
                        })
                    }}
                />
            )
        }
        this.props.navigation.setOptions(options)
    }

    handleNavigateToDetail = (id: any) => {
        
    }

    handleNavigateToNewProduct = () => {
        
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