import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { EditHolderProps, EditHolderState } from './types';
import { Styles } from './styles';
import { RMediumText } from '../../atoms/r-medium-text/view';
import { RText } from '../../atoms';
import { Feather } from '@expo/vector-icons';
import { Colors } from '../../../commons/styles/colors';
import { RFeatherIconButton } from '../../atoms/r-icon-button/view';
import { RThinText } from '../../atoms/r-thin-text/view';
import { RTitleText } from '../../atoms/r-title-text/view';


export class EditHolder extends React.Component<EditHolderProps, EditHolderState> {

    constructor(props: EditHolderProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <TouchableOpacity style={Styles.editContainer} onPress={this.props.navigationFunc}>
                <View style={Styles.editIcon}>
                    <Feather name={this.props.icon} size={30} color={Colors.primary} />
                </View>
                <View style={Styles.editText}>
                    <RMediumText>{this.props.editTitle}</RMediumText>
                    <RThinText>{this.props.editValue}</RThinText>
                </View>
                <View style={Styles.editNavigationIcon}>
                    <Feather name="chevron-right" size={30} color={Colors.primary} />
                </View>
            </TouchableOpacity>
        )
    }
}
