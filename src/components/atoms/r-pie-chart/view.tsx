import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { RPieChartProps, RPieChartState } from './types';
import { Styles } from './styles';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryPie, VictoryLabel } from "victory-native"


export class RPieChart extends React.Component<RPieChartProps, RPieChartState> {

    private vizWidth: number
    private vizPadding: number
    private totalValue: number

    constructor(props: RPieChartProps) {
        super(props)
        this.vizWidth = Math.round(Dimensions.get('window').width * this.props.data.pieChartProps.chartBaseProps.widthPercent)
        this.vizPadding = Math.round(Dimensions.get('window').width * this.props.data.pieChartProps.chartBaseProps.paddingPercent)
        console.log(this.props.data.pieChartProps.dimField)
        this.totalValue = this.props.data.pieChartProps.data
            .map((datum) => datum[this.props.data.pieChartProps.dimField])
            .reduce((sum, current) => sum + current, 0)
    }

    render(): React.ReactNode {
        return (
            <View>
                <Text style={Styles.vizHeader}>{this.props.data.pieChartProps.chartBaseProps.title}</Text>
                <VictoryChart
                    width={this.vizWidth}
                    height={this.vizWidth}
                    animate={this.props.data.pieChartProps.chartBaseProps.animation}
                    padding={this.vizPadding}>
                    <VictoryPie
                        innerRadius={this.vizWidth * 0.20}
                        padAngle={1}
                        labelRadius={this.vizWidth * 0.30}
                        style={this.props.data.pieChartProps.chartBaseProps.styles}
                        colorScale={this.props.data.pieChartProps.chartBaseProps.colorScheme}
                        data={this.props.data.pieChartProps.data}
                        x={this.props.data.pieChartProps.xFunc}
                        y={this.props.data.pieChartProps.yFunc}
                    />
                    <VictoryLabel
                        textAnchor="middle" verticalAnchor="middle"
                        x={this.vizWidth / 2} y={this.vizWidth / 2}
                        style={{ fontSize: 30 }}
                        text={this.totalValue}
                    />
                    <VictoryAxis
                        style={this.props.data.pieChartProps.chartBaseProps.axisStyles}
                    />
                </VictoryChart>
            </View>
        )
    }
}
