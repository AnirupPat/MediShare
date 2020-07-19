import React from 'react';
import { View, Text } from 'react-native';
import { CardProps, CardState } from './types';
import { Styles } from './styles';


export class Card extends React.Component<CardProps, CardState> {
    constructor(props: CardProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.cardContainer}>
                {this.props.children}
            </View>
        );
    }
}
