import React from 'react';
import { Text } from 'react-native';
import { RTitleTextProps, RTitleTextState } from './types';
import { Styles } from './styles';


export class RTitleText extends React.Component<RTitleTextProps, RTitleTextState> {

    constructor(props: RTitleTextProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <Text style={Styles.titleText}>{this.props.children}</Text>
        );
    }
}
