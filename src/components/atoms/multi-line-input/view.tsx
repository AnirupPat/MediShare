import React from 'react';
import { View, TextInput } from 'react-native';
import { MultiLineInputProps, MultiLineInputState } from './types';
import { Styles } from './styles';


export class MultiLineInput extends React.Component<MultiLineInputProps, MultiLineInputState> {
    constructor(props: MultiLineInputProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.commentInputContainer}>
                <TextInput
                    style={Styles.commentInputText}
                    value={this.props.value}
                    enablesReturnKeyAutomatically={true}
                    keyboardType="default"
                    onChangeText={this.props.onChange}
                    multiline={true}
                    maxLength={200}
                    numberOfLines={this.props.numberOfLines}
                    placeholder={this.props.placeHolder}
                    secureTextEntry={false}
                    returnKeyType="done"
                />
            </View>
        );
    }
}
