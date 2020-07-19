import React from 'react';
import { View } from 'react-native';
import { DetailsHolderVerticalProps, DetailsHolderVerticalState } from './types';
import { Styles } from './styles';
import { RMediumText } from '../../atoms/r-medium-text/view';
import { RText } from '../../atoms/r-text/view';


export class DetailsHolderVertical extends React.Component<DetailsHolderVerticalProps, DetailsHolderVerticalState> {

    constructor(props: DetailsHolderVerticalProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.detailsContainer}>
                <RMediumText>{this.props.name}</RMediumText>
                <View style={Styles.valueContainer}>
                    <RText>{this.props.value}</RText>
                </View>
            </View>
        )
    }
}
