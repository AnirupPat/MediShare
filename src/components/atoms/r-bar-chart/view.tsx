import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { RBarChartProps, RBarChartState } from './types';
import { Styles } from './styles';
import { VictoryBar, VictoryChart, VictoryAxis } from "victory-native"


export class RBarChart extends React.Component<RBarChartProps, RBarChartState> {

    private vizWidth: number
    private vizPadding: number

    constructor(props: RBarChartProps) {
        super(props)
        this.vizWidth = Math.round(Dimensions.get('window').width * this.props.data.barChartProps.chartBaseProps.widthPercent);
        this.vizPadding = Math.round(Dimensions.get('window').width * this.props.data.barChartProps.chartBaseProps.paddingPercent);
    }

    render(): React.ReactNode {
        return (
            <View>
                <Text style={Styles.vizHeader}>{this.props.data.barChartProps.chartBaseProps.title}</Text>
                <VictoryChart
                    width={this.vizWidth}
                    height={this.props.data.barChartProps.chartBaseProps.height}
                    domain={{ y: this.props.data.barChartProps.chartBaseProps.domain.y }}
                    animate={this.props.data.barChartProps.chartBaseProps.animation}
                    padding={this.vizPadding}>
                    <VictoryBar
                        data={this.props.data.barChartProps.data}
                        x={this.props.data.barChartProps.xFunc}
                        y={this.props.data.barChartProps.yFunc}
                        style={this.props.data.barChartProps.chartBaseProps.generalStyles}
                        barRatio={this.props.data.barChartProps.chartBaseProps.barRatio}
                    />
                    <VictoryAxis style={this.props.data.barChartProps.chartBaseProps.axisStyles} />
                </VictoryChart>
            </View>
        );
    }
}
