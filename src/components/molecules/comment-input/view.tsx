import React from 'react';
import { Text, View } from 'react-native';
import { CommentInputProps, CommentInputState } from './types';
import { Styles } from './styles';
import { RText } from '../../atoms/r-text/view';
import { Feather } from '@expo/vector-icons';
import { RMediumText } from '../../atoms/r-medium-text/view';
import { DateTime } from '../../atoms/date-time/view';
import { Colors } from '../../../commons/styles/colors';
import { MultiLineInput } from '../../atoms/multi-line-input/view';
import { RTitleText } from '../../atoms/r-title-text/view';


export class CommentInput extends React.Component<CommentInputProps, CommentInputState> {

    constructor(props: CommentInputProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.commentInputContainer}>
                <View style={Styles.commentAuthorContainer}>
                    <View style={Styles.commentIconContainer}>
                        <Feather name="user" size={30} color={Colors.primary} />
                    </View>
                    <RTitleText> {this.props.author}</RTitleText>
                </View>
                <MultiLineInput
                    value={this.props.value}
                    placeHolder={this.props.placeholder}
                    numberOfLines={this.props.numberOfLines}
                    onChange={this.props.onChange}
                />
            </View>
        );
    }
}
