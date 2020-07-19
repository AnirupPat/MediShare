import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { OTPInputProps, OTPInputState } from './types';
import { Styles } from './styles';


export class OTPInput extends React.Component<OTPInputProps, OTPInputState> {

    constructor(props: OTPInputProps) {
        super(props)
        this.state = {
            OTP: ""
        }
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.otpInputContainer}>
                <TextInput
                    style={Styles.otpInputTextInput}
                    value={this.props.data.otp}
                    enablesReturnKeyAutomatically={true}
                    keyboardType="number-pad"
                    onChangeText={this.props.operations.setOTP}
                    maxLength={6}
                    placeholder="OTP"
                    secureTextEntry={true}
                    returnKeyType="next"
                />
                <Text style={Styles.inputHelpText}>{this.props.data.inputHelperText}</Text>
            </View>
        );
    }
}
