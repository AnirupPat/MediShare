import React from 'react'
import { View } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { TermsOfServiceScreenProps, TermsOfServiceScreenState } from './types'
import { getStackStyles } from '../../commons/styles';

class TermsOfServiceScreen extends React.Component<TermsOfServiceScreenProps, TermsOfServiceScreenState> {
    constructor(props: TermsOfServiceScreenProps) {
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

export default TermsOfServiceScreen
