import { Colors } from './colors';

const sansSerif = "'Gill Sans', 'Gill Sans MT', 'Seravek', 'Trebuchet MS', sans-serif";
const letterSpacing = "normal";
const fontSize = 12;

const baseLabelStyles = {
    fontFamily: sansSerif,
    fontSize,
    letterSpacing,
    padding: 5,
    fill: Colors.primary,
    stroke: "transparent"
};

export type BarChartBaseProps = {
    title: string
    height: number
    widthPercent: number
    paddingPercent: number
    domain: {
        y: [number, number]
    }
    barRatio: number
    animation: {
        duration: number
    }
    generalStyles: any
    axisStyles: any
}

export type PieChartBaseProps = {
    title: string
    widthPercent: number
    paddingPercent: number
    animation: {
        duration: number
    }
    axisStyles: any
    styles: any
    colorScheme: string[]
}

export type BarChartProps = {
    chartBaseProps: BarChartBaseProps
    data: any[],
    xFunc: (datum: any) => any
    yFunc: (datum: any) => any
}

export type PieChartProps = {
    chartBaseProps: PieChartBaseProps
    data: any[],
    xFunc: (datum: any) => any
    yFunc: (datum: any) => any
    dimField: string
}

const barChartBaseProps: BarChartBaseProps = {
    title: "60 Day Trend",
    height: 100,
    paddingPercent: 0.01,
    widthPercent: 0.79,
    animation: {
        duration: 500
    },
    domain: {
        y: [0, 1000]
    },
    barRatio: 0.8,
    axisStyles: {
        axis: { stroke: "transparent" },
        ticks: { stroke: "transparent" },
        tickLabels: { fill: "transparent" },
        labels: baseLabelStyles
    },
    generalStyles: {
        data: {
            fill: Colors.codes.vizColor,
            padding: 8,
            strokeWidth: 0
        }
    }
}

const pieChartBaseProps: PieChartBaseProps = {
    title: "Status Break Down",
    paddingPercent: 0.01,
    widthPercent: 0.79,
    animation: {
        duration: 500
    },
    styles: {
        data: {
            padding: 8,
            strokeWidth: 0.5,
            stroke: Colors.codes.grayLight
        }
    },
    axisStyles: {
        axis: { stroke: "transparent" },
        ticks: { stroke: "transparent" },
        tickLabels: { fill: "transparent" },
        labels: baseLabelStyles
    },
    colorScheme: Colors.colorScheme
}

export const barChartProps = {
    chartBaseProps: barChartBaseProps,
    data: [],
    xFunc: (datum: any) => datum.x,
    yFunc: (datum: any) => datum.y
}

export const pieChartProps = {
    chartBaseProps: pieChartBaseProps,
    data: [],
    xFunc: (datum: any) => datum.x,
    yFunc: (datum: any) => datum.y,
    dimField: "y"
}
