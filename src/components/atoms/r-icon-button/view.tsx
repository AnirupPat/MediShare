import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RFeatherIconButtonProps, RFeatherIconButtonState } from './types';
import { Styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../../commons/styles/colors';


export class RFeatherIconButton extends React.Component<RFeatherIconButtonProps, RFeatherIconButtonState> {

    constructor(props: RFeatherIconButtonProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <TouchableOpacity style={Styles.button} onPress={this.props.onPress}>
                <Feather name={this.props.icon} size={this.props.size} color={Colors.primary}/>
            </TouchableOpacity>
        );
    }
}
