import React from 'react';
import { View, TextInput } from 'react-native';
import { SearchProps, SearchState } from './types';
import { Styles } from './styles';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../../commons/styles/colors';


export class Search extends React.Component<SearchProps, SearchState> {
    constructor(props: SearchProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.searchContainer}>
                <View style={Styles.searchIconContainer}>
                    <Feather name="search" size={24} color={Colors.primary} />
                </View>
                <View style={Styles.searchInputContainer}>
                    <TextInput
                        style={Styles.searchTextInput}
                        value={this.props.value}
                        enablesReturnKeyAutomatically={true}
                        keyboardType={this.props.keyboardType}
                        onChangeText={this.props.onChange}
                        maxLength={15}
                        placeholder={this.props.placeHolder}
                        secureTextEntry={false}
                        returnKeyType="done"
                    />
                </View>
            </View>
        );
    }
}
