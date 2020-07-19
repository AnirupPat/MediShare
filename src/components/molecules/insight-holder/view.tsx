import React from 'react';
import { Text, View } from 'react-native';
import { InsightHolderProps, InsightHolderState } from './types';
import { Styles } from './styles';
import { RText } from '../../atoms/r-text/view';
import { Feather, AntDesign } from '@expo/vector-icons';
import { RMediumText } from '../../atoms/r-medium-text/view';
import { DateTime } from '../../atoms/date-time/view';
import { Colors } from '../../../commons/styles/colors';
import { RTitleText } from '../../atoms/r-title-text/view';
import { Card } from '../../atoms/card/view';
import { InsightPill } from '../../atoms/insight-pill/view';
import Utils from '../../../commons/utils/index';
import { TouchableOpacity } from 'react-native-gesture-handler';


export class InsightHolder extends React.Component<InsightHolderProps, InsightHolderState> {

    private formatedValue: string
    constructor(props: InsightHolderProps) {
        super(props)
        this.formatedValue = Utils.fetchFormatedValue(this.props.insight.units, this.props.insight.value)
    }

    render(): React.ReactNode {
        return (
            <Card>
                <View style={Styles.insightHolderContainer}>
                    <View style={Styles.insightHeaderContainer}>
                        <View style={Styles.pillContainer}>
                            <InsightPill backgroundColor={Utils.fetchPillColor(this.props.insight.type)} icon={Utils.fetchIconForInsight(this.props.insight.type)}>{this.props.insight.type}</InsightPill>
                        </View>
                        <View style={Styles.ackContainer}>
                            <TouchableOpacity onPress={this.props.onAck}>
                                <Feather name="thumbs-up" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <RText>{this.props.insight.text.replace("{value}", this.formatedValue)}</RText>
                    </View>
                </View>
            </Card>
        );
    }
}
