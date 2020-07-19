import React from 'react';
import { View, Text } from 'react-native';
import { HeaderProps, HeaderState } from './types';
import { Styles } from './styles';


export class Header extends React.Component<HeaderProps, HeaderState> {
    constructor(props: HeaderProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.header}>
                <Text style={Styles.headerTitle}>{this.props.title}</Text>
            </View>
        );
    }
}
