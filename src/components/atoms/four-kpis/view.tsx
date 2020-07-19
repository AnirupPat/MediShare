import React from 'react';
import { View, Text } from 'react-native';
import { FourKpiProps, FourKpiState } from './types';
import { Styles } from './styles';


export class FourKPI extends React.Component<FourKpiProps, FourKpiState> {

    constructor(props: FourKpiProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.kpiParentContainer}>
                <View style={Styles.kpiContainer}>
                    <Text style={Styles.kpiLabel}>{this.props.data.firstKpi.label}</Text>
                    <Text style={Styles.kpiValue}>{this.props.data.firstKpi.value}</Text>
                </View>
                <View style={Styles.kpiContainer}>
                    <Text style={Styles.kpiLabel}>{this.props.data.secondKpi.label}</Text>
                    <Text style={Styles.kpiValue}>{this.props.data.secondKpi.value}</Text>
                </View>
                <View style={Styles.kpiContainer}>
                    <Text style={Styles.kpiLabel}>{this.props.data.thirdKpi.label}</Text>
                    <Text style={Styles.kpiValue}>{this.props.data.thirdKpi.value}</Text>
                </View>
                <View style={Styles.kpiContainer}>
                    <Text style={Styles.kpiLabel}>{this.props.data.fourthKpi.label}</Text>
                    <Text style={Styles.kpiValue}>{this.props.data.fourthKpi.value}</Text>
                </View>
            </View>
        );
    }
}
