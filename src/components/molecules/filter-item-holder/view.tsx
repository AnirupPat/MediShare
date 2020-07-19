import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FilterItemHolderProps, FilterItemHolderState } from './types';
import { Styles } from './styles';
import { RText } from '../../atoms';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../../commons/styles/colors';


export class FilterItemHolder extends React.Component<FilterItemHolderProps, FilterItemHolderState> {

    constructor(props: FilterItemHolderProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <TouchableOpacity style={Styles.filterItemContainer} onPress={this.props.selectItem}>
                <View style={Styles.filterItemText}>
                    <RText>{this.props.filterItemValue}</RText>
                </View>
                <View style={Styles.filterItemSelectedIcon}>
                    { this.props.itemSelected && <Feather name="check" size={30} color={Colors.primary} /> }
                </View>
            </TouchableOpacity>
        )
    }
}
