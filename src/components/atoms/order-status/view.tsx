import React from 'react';
import { View, Text } from 'react-native';
import { OrderStatusProps, OrderStatusState } from './types';
import { Styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../../commons/styles/colors';


export class OrderStatus extends React.Component<OrderStatusProps, OrderStatusState> {

    constructor(props: OrderStatusProps) {
        super(props)
    }

    render(): React.ReactNode {
        if (this.props.children) {
            return (
                <View style={Styles.orderStatusContainer}>
                    <Feather name="rss" size={18} color={Colors.primary} />
                    <Text style={Styles.orderStatusText}>{this.props.children}</Text>
                </View>
            );
        }
        return (
            <View></View>
        )
    }
}
