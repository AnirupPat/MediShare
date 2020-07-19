import React from 'react';
import { Text } from 'react-native';
import { RThinTextProps, RThinTextState } from './types';
import { Styles } from './styles';


export class RThinText extends React.Component<RThinTextProps, RThinTextState> {

    constructor(props: RThinTextProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <Text style={Styles.thinText}>{this.props.children}</Text>
        );
    }
}
