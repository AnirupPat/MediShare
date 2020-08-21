import React from 'react'
import { View } from 'react-native'
import { RText, RButton } from '../../components/atoms'
import Styles from './styles'
import { MailScreenProps, MailScreenState } from './types'
import { getStackStyles } from '../../commons/styles';
import { RTitleText } from '@virtuelabs-io/rapido-modules/src/components/atoms'

class MailScreen extends React.Component<MailScreenProps, MailScreenState> {
    constructor(props: MailScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(''))
    }

    handleBack = () => {
        this.props.navigation.navigate("medicine", {
            title: "My PillBox"
        })
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <RTitleText>Congrats</RTitleText>
                <RText>A mail has been sent to the requested NGO. We will get in touch with you as soon as we get some response</RText>
                <RButton name="Back to PillBox" onPress={() => this.handleBack()} />
            </View>
        )
    }
}

export default MailScreen