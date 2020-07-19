import React from 'react';
import { Text } from 'react-native';
import { RMediumTextProps, RMediumTextState } from './types';
import { Styles } from './styles';


export class RMediumText extends React.Component<RMediumTextProps, RMediumTextState> {

    constructor(props: RMediumTextProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <Text style={Styles.mediumText}>{this.props.children}</Text>
        );
    }
}
