import React from 'react';
import { View, Text } from 'react-native';
import { DueDateProps, DueDateState } from './types';
import { Styles } from './styles';
import { RText } from '../r-text/view';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../../commons/styles/colors';


export class DueDate extends React.Component<DueDateProps, DueDateState> {

    constructor(props: DueDateProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.dueDateContainer}>
                <Feather name="clock" size={18} color={Colors.primary} />
                <Text style={Styles.dueDateText}>{this.props.children}</Text>
            </View>
        );
    }
}
