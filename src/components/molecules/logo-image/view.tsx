import React from 'react';
import { Image, View, Text } from 'react-native';
import { LogoProps, LogoState } from './types';
import { Styles } from './styles';
import Constants from '../../../commons/constants/index';


export class LogoImage extends React.Component<LogoProps, LogoState> {

    constructor(props: LogoProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.logoContainer}>
                <Image style={Styles.logo} source={require('../../../assets/images/MediShare_logo.png')} />
                <Text style={Styles.headingText}>A small helping hand</Text>
            </View>
        );
    }
}
