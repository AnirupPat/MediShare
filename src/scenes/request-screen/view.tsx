import React, { Dispatch } from 'react'
import { ScrollView, View, Dimensions, Text, FlatList } from 'react-native'
import Styles from './styles'
import { RequestScreenProps, RequestScreenState, RequestScreenDispatchProps } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
import { Product } from '../../components/organisms/product/view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RAntIconButton } from '../../components/atoms/r-ant-icon-button/view';
import navigations from '../../navigations';

class RequestScreen extends React.Component<RequestScreenProps, RequestScreenState> {

    constructor(props: RequestScreenProps, state: RequestScreenState) {
        super(props)
        var options = getStackStyles(
            'Request',
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
            <View>
                <Text>Hello</Text>
            </View>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: RequestScreenProps): RequestScreenProps => {
    return {
        ...localProps,
        // data: state.Request.Requests,
        // title: localProps.route.params.title
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): RequestScreenDispatchProps => {
    return {
        
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(RequestScreen)