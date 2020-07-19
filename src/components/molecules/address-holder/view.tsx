import React from 'react';
import { Text, View } from 'react-native';
import { AddressHolderProps, AddressHolderState } from './types';
import { Styles } from './styles';
import { RMediumText } from '../../atoms/r-medium-text/view';
import { RText } from '../../atoms';


export class AddressHolder extends React.Component<AddressHolderProps, AddressHolderState> {

    constructor(props: AddressHolderProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.addressContainer}>
                <RMediumText>{this.props.addressTitle}</RMediumText>
                <View style={Styles.addressInfoContainer}>
                    <RText>{this.props.addr1}</RText>
                    <RText>{this.props.addr2}</RText>
                    <RText>{this.props.city}</RText>
                    <RText>{this.props.county}</RText>
                    <RText>{this.props.country}</RText>
                    <RText>{this.props.postcode}</RText>
                </View>
            </View>
        );
    }
}
