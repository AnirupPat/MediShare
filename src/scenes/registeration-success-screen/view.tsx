import React, { Dispatch } from 'react'
import { View, ScrollView, KeyboardAvoidingView } from 'react-native'
import Styles from './styles'
import { FinishedRegisterationScreenProps, FinishedRegisterationScreenState } from './types'
import { getStackStyles } from '../../commons/styles';
import { RText, RButton, RHeadingText, Card, Logo } from '../../components/atoms'

class FinishedRegisterationScreen extends React.Component<FinishedRegisterationScreenProps, FinishedRegisterationScreenState> {

    constructor(props: FinishedRegisterationScreenProps) {
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
                <ScrollView style={Styles.screen}>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}></KeyboardAvoidingView>
                <Logo />
                <View style={{marginTop: 20}}>
                <Card>
                    <RHeadingText>Success!</RHeadingText>
                    <RText>You have sucessfully registered. You can now try to login.</RText>
                    <RButton name="Login" onPress={this.loginScreenNavigationHandler} />
                </Card>
                </View>
            </ScrollView>
        )
    }
}


export default FinishedRegisterationScreen