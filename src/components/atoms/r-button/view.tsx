import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RButtonProps, RButtonState } from './types';
import { Styles } from './styles';


export class RButton extends React.Component<RButtonProps, RButtonState> {

    constructor(props: RButtonProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <TouchableOpacity style={Styles.button} onPress={this.props.onPress}>
                <View>
                    <Text style={Styles.buttonTextStyle}>{this.props.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
