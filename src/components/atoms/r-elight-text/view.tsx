import React from 'react';
import { Text } from 'react-native';
import { RELightTextProps, RELightTextState } from './types';
import { Styles } from './styles';


export class RELightText extends React.Component<RELightTextProps, RELightTextState> {

    constructor(props: RELightTextProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <Text style={Styles.eLightText}>{this.props.children}</Text>
        );
    }
}
