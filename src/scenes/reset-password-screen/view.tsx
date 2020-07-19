import React, { Dispatch } from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native'
import Styles from './styles'
import { ResetPasswordScreenProps, ResetPasswordScreenState, ResetPasswordScreenDispatchProps } from './types'
import { Card, RButton, RText, OTPInput, PasswordInput, Logo } from '@virtuelabs-io/rapido-modules/src/components/atoms'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { setOTP, setNewPassword } from '../../store/core/actions';
import { getStackStyles } from '../../commons/styles/stack-style-constants'

class ResetPasswordScreen extends React.Component<ResetPasswordScreenProps, ResetPasswordScreenState> {

    constructor(props: ResetPasswordScreenProps) {
        super(props)
       this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    finishedResetScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate("finishedReset")
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                    <Logo />
                    <Card>
                        <RText>An OTP has been sent to ({this.props.data.country.dialCode}) {this.props.data.phoneNumber}</RText>
                        <OTPInput
                            data={{
                                inputHelperText: 'Enter OTP',
                                otp: this.props.data.resetPasswordInfo.otp
                            }}
                            operations={{
                                setOTP: this.props.setOTP
                            }}
                        />
                        <PasswordInput
                            data={{
                                password: this.props.data.resetPasswordInfo.newPassword,
                                inputHelperText: "Enter your Password"
                            }}
                            operations={{
                                setPassword: this.props.setNewPassword
                            }}
                        />
                        <RButton name="Confirm" onPress={this.finishedResetScreenNavigationHandler} />
                    </Card>
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: ResetPasswordScreenProps): ResetPasswordScreenProps => {
    return {
        ...localProps,
        data: {
            resetPasswordInfo: state.core.coreData.resetPassword,
            country: state.core.coreData.country,
            phoneNumber: state.core.coreData.phoneNumber
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): ResetPasswordScreenDispatchProps => {
    return {
        setOTP: (otp: string) => dispatch(setOTP(otp)),
        setNewPassword: (newPassword: string) => dispatch(setNewPassword(newPassword))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ResetPasswordScreen)