import React from 'react';
import { Text, View } from 'react-native';
import { SimpleListHolderProps, SimpleListHolderState } from './types';
import { Styles } from './styles';
import { RText } from '../../atoms/r-text/view';
import { Feather } from '@expo/vector-icons';
import { RMediumText } from '../../atoms/r-medium-text/view';
import { DateTime } from '../../atoms/date-time/view';
import { Colors } from '../../../commons/styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';


export class SimpleListHolder extends React.Component<SimpleListHolderProps, SimpleListHolderState> {

    constructor(props: SimpleListHolderProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <TouchableOpacity style={Styles.simpleListItemContainer} onPress={this.props.onSelection.bind(this, this.props.value)}>
                <Text style={Styles.simpleItemText}>{this.props.value}</Text>
            </TouchableOpacity>
        );
    }
}
