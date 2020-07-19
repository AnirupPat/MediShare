import React, { Dispatch } from 'react'
import { View } from 'react-native'
import Styles from './styles'
import { FinishedResetScreenProps, FinishedResetScreenState } from './types'
import { RText, RButton, RHeadingText, Card, Logo } from '@virtuelabs-io/rapido-modules/src/components/atoms'
import { getStackStyles } from '../../commons/styles/stack-style-constants'

class FinishedResetScreen extends React.Component<FinishedResetScreenProps, FinishedResetScreenState> {

    constructor(props: FinishedResetScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    loginScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.popToTop()
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <Logo />
                <Card>
                    <RHeadingText>Success!</RHeadingText>
                    <RText>Your password has been reset sucessfully. You can now try to login.</RText>
                    <RButton name="Login" onPress={this.loginScreenNavigationHandler} />
                </Card>
            </View>
        )
    }
}


export default FinishedResetScreen