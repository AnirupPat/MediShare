import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { FilterHolderProps, FilterHolderState } from './types';
import { Styles } from './styles';
import { RMediumText } from '../../atoms/r-medium-text/view';
import { RText } from '../../atoms';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../../commons/styles/colors';
import { RFeatherIconButton } from '../../atoms/r-icon-button/view';
import { RThinText } from '../../atoms/r-thin-text/view';
import { RTitleText } from '../../atoms/r-title-text/view';


export class FilterHolder extends React.Component<FilterHolderProps, FilterHolderState> {

    constructor(props: FilterHolderProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <TouchableOpacity style={Styles.filterContainer} onPress={this.props.navigationFunc}>
                <View style={Styles.filterIcon}>
                    <Feather name={this.props.icon} size={30} color={Colors.primary} />
                </View>
                <View style={Styles.filterText}>
                    <RMediumText>{this.props.filterTitle}</RMediumText>
                    <RThinText>{this.props.filterValue}</RThinText>
                </View>
                <View style={Styles.filterNavigationIcon}>
                    <Feather name="chevron-right" size={30} color={Colors.primary} />
                </View>
            </TouchableOpacity>
        )
    }
}
