import React, { Dispatch } from 'react'
import { KeyboardAvoidingView, ScrollView, View } from 'react-native'
import Styles from './styles'
import { ResetCodeScreenProps, ResetCodeScreenState, ResetCodeScreenDispatchProps } from './types'
import { Card, PhoneNumber, RHeadingText, RButton, RText, Logo } from '@virtuelabs-io/rapido-modules/src/components/atoms'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { setCountry, setPhoneNumber, setOTP, setNewPassword } from '../../store/core/actions';
import { getStackStyles } from '../../commons/styles/stack-style-constants'

class ResetCodeScreen extends React.Component<ResetCodeScreenProps, ResetCodeScreenState> {

    constructor(props: ResetCodeScreenProps) {
        super(props)
       this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    resetPasswordScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate("resetPassword")
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                    <Logo />
                    <Card>
                        <PhoneNumber
                            data={this.props.data}
                            operations={{
                                setCountry: this.props.setCountry,
                                setPhoneNumber: this.props.setPhoneNumber
                            }} />
                        <View style={Styles.textDisplay}>
                            <RText>An OTP will be send to the above number, if its already registered.</RText>
                        </View>
                        <RButton name="Send Code" onPress={this.resetPasswordScreenNavigationHandler} />
                    </Card>
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: ResetCodeScreenProps): ResetCodeScreenProps => {
    return {
        ...localProps,
        data: {
            country: state.core.coreData.country,
            phoneNumber: state.core.coreData.phoneNumber,
            passwordReset: state.core.coreData.resetPassword
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): ResetCodeScreenDispatchProps => {
    return {
        setCountry: (countryCode: string) => dispatch(setCountry(countryCode)),
        setPhoneNumber: (phoneNumber: string) => dispatch(setPhoneNumber(phoneNumber)),
        setOTP: (otp: string) => dispatch(setOTP(otp)),
        setNewPassword: (newPassword: string) => dispatch(setNewPassword(newPassword))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ResetCodeScreen)