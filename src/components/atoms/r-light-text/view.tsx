import React from 'react';
import { Text } from 'react-native';
import { RLightTextProps, RLightTextState } from './types';
import { Styles } from './styles';


export class RLightText extends React.Component<RLightTextProps, RLightTextState> {

    constructor(props: RLightTextProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <Text style={Styles.lightText}>{this.props.children}</Text>
        );
    }
}
