import React from 'react';
import { TouchableOpacity } from 'react-native';
import { RAntIconButtonProps, RAntIconButtonState } from './types';
import { Styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { Colors } from '../../../commons/styles/colors';


export class RAntIconButton extends React.Component<RAntIconButtonProps, RAntIconButtonState> {

    constructor(props: RAntIconButtonProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <TouchableOpacity style={Styles.button} onPress={this.props.onPress}>
                <AntDesign name={this.props.icon} size={this.props.size} color={Colors.primary}/>
            </TouchableOpacity>
        );
    }
}
