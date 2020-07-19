import React from 'react';
import { Text, View } from 'react-native';
import { SettingsItemProps, SettingsItemState } from './types';
import { Styles } from './styles';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Colors } from '../../../commons/styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';


export class SettingsItem extends React.Component<SettingsItemProps, SettingsItemState> {

    constructor(props: SettingsItemProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <TouchableOpacity style={Styles.settingsItemContainer} onPress={this.props.onSelection.bind(this, this.props.value)}>
                <View style={Styles.settingsInfoContainer}>
                    <AntDesign name={this.props.icon} size={28} color={Colors.primary} />
                    <Text style={Styles.itemTextStyle}>   {this.props.value}</Text>
                </View>
                {this.props.showNavigation &&
                    <View style={Styles.settingsNavigationIcon}>
                        <Feather name="chevron-right" size={30} color={Colors.primary} />
                    </View>
                }
            </TouchableOpacity>
        )
    }
}
