import React from 'react'
import { View } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { ConfigurationScreenProps, ConfigurationScreenState } from './types'
import { getStackStyles } from '../../commons/styles';

class ConfigurationScreen extends React.Component<ConfigurationScreenProps, ConfigurationScreenState> {
    constructor(props: ConfigurationScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <RText>{this.props.route.params.title}</RText>
            </View>
        )
    }
}

export default ConfigurationScreen
