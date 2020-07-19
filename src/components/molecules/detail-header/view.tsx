import React from 'react';
import { View, Text } from 'react-native';
import { DetailsHeaderProps, DetailsHeaderState } from './types';
import { Styles } from './styles';
import { OrderStatus } from '../../atoms/order-status/view';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../../commons/styles/colors';


export class DetailsHeader extends React.Component<DetailsHeaderProps, DetailsHeaderState> {

    constructor(props: DetailsHeaderProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.detailsContainer}>
                <View style={Styles.leftContainer}>
                    <Feather name={this.props.icon} size={30} color={Colors.primary} />
                    <Text style={Styles.sectionHeaderText}> {this.props.name}</Text>
                </View>
                <View style={Styles.rightContainer}>
                    <OrderStatus>{this.props.value}</OrderStatus>
                </View>
            </View>
        )
    }
}
