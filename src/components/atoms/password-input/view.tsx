import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { PasswordInputProps, PasswordInputState } from './types';
import { Styles } from './styles';


export class PasswordInput extends React.Component<PasswordInputProps, PasswordInputState> {

    constructor(props: PasswordInputProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.passwordInputContainer}>
                <TextInput
                    style={Styles.passwordInputTextInput}
                    value={this.props.data.password}
                    enablesReturnKeyAutomatically={true}
                    keyboardType="default"
                    onChangeText={this.props.operations.setPassword}
                    placeholder="Password"
                    secureTextEntry={true}
                    returnKeyType="next"
                />
                <Text style={Styles.inputHelpText}>{this.props.data.inputHelperText}</Text>
            </View>
        );
    }
}
