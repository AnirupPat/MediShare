import React from 'react';
import { View, Text } from 'react-native';
import { DateTimeProps, DateTimeState } from './types';
import { Styles } from './styles';
import { RText } from '../r-text/view';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../../commons/styles/colors';


export class DateTime extends React.Component<DateTimeProps, DateTimeState> {

    constructor(props: DateTimeProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.DateTimeContainer}>
                <Feather name="clock" size={18} color={Colors.primary} />
                <Text style={Styles.DateTimeText}>{this.props.children}</Text>
            </View>
        );
    }
}
