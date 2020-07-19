import React from 'react';
import { View } from 'react-native';
import { ProductProps, ProductState } from './types';
import { Styles } from './styles';
import { RTitleText } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-title-text/view';
import { RText } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-text/view';
import { DueDate } from '@virtuelabs-io/rapido-modules/src/components/atoms/due-date/view';
import { RPriceText } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-price-text/view';
import { OrderStatus } from '@virtuelabs-io/rapido-modules/src/components/atoms/order-status/view';
import { Feather } from '@expo/vector-icons';
import { Colors } from '@virtuelabs-io/rapido-modules/src/commons/styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from '../../../commons/constants/index';

export class Product extends React.Component<ProductProps, ProductState> {
    constructor(props: ProductProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <TouchableOpacity style={Styles.orderContainer} onPress={this.props.onPress} activeOpacity={0.5}>
                <View style={Styles.leftContainer}>
                    <View style={Styles.orderNumberContainer}>
                        <Feather name="box" size={20} color={Colors.primary} />
                        <RTitleText> {this.props.data.id}</RTitleText>
                    </View>
                    <RText>{this.props.data.fields.name}</RText>
                    <RText>Quantity: {this.props.data.fields.InStockQty}</RText>
                </View>
                {/* <View style={Styles.rightContainer}>
                    <OrderStatus>{this.props.data.orderStatus.toLocaleUpperCase()}</OrderStatus>
                    <RText>Value</RText>
                    <RPriceText>{[this.props.data.currency, Constants.SPACE, this.props.data.orderPriceTotal].concat()}</RPriceText>
                </View> */}
            </TouchableOpacity>
        )
    }
}