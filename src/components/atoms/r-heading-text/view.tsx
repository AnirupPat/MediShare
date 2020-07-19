import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RHeadingTextProps, RHeadingTextState } from './types';
import { Styles } from './styles';


export class RHeadingText extends React.Component<RHeadingTextProps, RHeadingTextState> {

    constructor(props: RHeadingTextProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <Text style={Styles.headingText}>{this.props.children}</Text>
        );
    }
}
