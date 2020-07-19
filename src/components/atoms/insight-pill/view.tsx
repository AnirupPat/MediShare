import React from 'react';
import { View, Text } from 'react-native';
import { InsightPillProps, InsightPillState } from './types';
import { Styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../../../commons/styles/colors';


export class InsightPill extends React.Component<InsightPillProps, InsightPillState> {

    constructor(props: InsightPillProps) {
        super(props)
    }

    render(): React.ReactNode {
        if (this.props.children) {
            return (
                <View style={{ ...Styles.insightPillContainer, backgroundColor: this.props.backgroundColor }}>
                    <View>
                        <AntDesign name={this.props.icon} size={24} color={Colors.primary} />
                    </View>
                    <View>
                        <Text style={Styles.insightPillText}>{this.props.children}</Text>
                    </View>
                </View>
            );
        }
        return (
            <View></View>
        )
    }
}
