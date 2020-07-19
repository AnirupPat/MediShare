import React from 'react';
import { Text } from 'react-native';
import { RTextProps, RTextState } from './types';
import { Styles } from './styles';


export class RText extends React.Component<RTextProps, RTextState> {

    constructor(props: RTextProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <Text style={Styles.generalText}>{this.props.children}</Text>
        );
    }
}
