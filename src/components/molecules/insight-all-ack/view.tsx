import React from 'react';
import { View, Text } from 'react-native';
import { InsightAllAckProps, InsightAllAckState } from './types';
import { Styles } from './styles';
import { OrderStatus } from '../../atoms/order-status/view';
import { Feather, AntDesign } from '@expo/vector-icons';
import { Colors } from '../../../commons/styles/colors';
import { RMediumText } from '../../atoms/r-medium-text/view';
import { RText } from '../../atoms/r-text/view';


export class InsightAllAck extends React.Component<InsightAllAckProps, InsightAllAckState> {

    constructor(props: InsightAllAckProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.insightAllAckContainer}>
                <AntDesign name={this.props.icon} size={128} color={Colors.primary} />
                <Text style={Styles.mediumText}>{this.props.text1}</Text>
                <Text style={Styles.normalText}>{this.props.text2}</Text>
            </View>
        )
    }
}
