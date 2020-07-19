import React from 'react';
import { Text } from 'react-native';
import { RPriceTextProps, RPriceTextState } from './types';
import { Styles } from './styles';


export class RPriceText extends React.Component<RPriceTextProps, RPriceTextState> {

    constructor(props: RPriceTextProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <Text style={Styles.thinText}>{this.props.children}</Text>
        );
    }
}
