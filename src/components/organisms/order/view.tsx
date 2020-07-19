import React from 'react';
import { View } from 'react-native';
import { OrderProps, OrderState } from './types';
import { Styles } from './styles';
import { RTitleText } from '../../atoms/r-title-text/view';
import { RText } from '../../atoms/r-text/view';
import { DueDate } from '../../atoms/due-date/view';
import { RPriceText } from '../../atoms/r-price-text/view';
import { OrderStatus } from '../../atoms/order-status/view';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../../commons/styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from '../../../commons/constants/index';

export class Order extends React.Component<OrderProps, OrderState> {
    constructor(props: OrderProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <TouchableOpacity style={Styles.orderContainer} onPress={this.props.onPress} activeOpacity={0.5}>
                <View style={Styles.leftContainer}>
                    <View style={Styles.orderNumberContainer}>
                        <Feather name="box" size={20} color={Colors.primary} />
                        <RTitleText> {this.props.data.orderId}</RTitleText>
                    </View>
                    <RText>{this.props.data.customerName}</RText>
                    <DueDate>{this.props.data.dueDate}</DueDate>
                </View>
                <View style={Styles.rightContainer}>
                    <OrderStatus>{this.props.data.orderStatus.toLocaleUpperCase()}</OrderStatus>
                    <RText>Value</RText>
                    <RPriceText>{[this.props.data.currency, Constants.SPACE, this.props.data.orderPriceTotal].concat()}</RPriceText>
                </View>
            </TouchableOpacity>
        )
    }
}
