import React from 'react';
import { View, Text, Picker, TextInput } from 'react-native';
import { PhoneNumberProps, PhoneNumberState } from './types';
import { Styles } from './styles';
import { Country } from '../../../models'
import Constants from '../../../commons/constants'


export class PhoneNumber extends React.Component<PhoneNumberProps, PhoneNumberState> {

    private countrycodes: Country[]

    constructor(props: PhoneNumberProps) {
        super(props)
        this.countrycodes = Constants.COUNTRY_CODES
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.phoneNumberComponentContainer}>
                <View style={Styles.phoneNumberContainer}>
                    <Picker
                        selectedValue={this.props.data.country.code}
                        style={Styles.picker}
                        onValueChange={this.props.operations.setCountry}>
                        {this.countrycodes.map(item => {
                            return (
                                <Picker.Item key={item.code} label={item.name} value={item.code} />
                            )
                        })}
                    </Picker>
                    <View style={Styles.phoneNumberInputContainer}>
                        <TextInput
                            style={Styles.dialCodeInput}
                            value={this.props.data.country.dialCode}
                            maxLength={5}
                            editable={false}
                        />
                        <TextInput
                            style={Styles.phoneInput}
                            value={this.props.data.phoneNumber}
                            keyboardType="number-pad"
                            maxLength={10}
                            onChangeText={this.props.operations.setPhoneNumber}
                            placeholder="Phone Number"
                            enablesReturnKeyAutomatically={true}
                        />
                    </View>
                    <Text style={Styles.inputHelpText}>Enter your phone number</Text>
                </View>
            </View>
        );
    }
}
