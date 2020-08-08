import React, { Dispatch } from 'react'
import { KeyboardAvoidingView, ScrollView, View } from 'react-native'
import Styles from './styles'
import { VerifyCodeScreenProps, VerifyCodeScreenState, VerifyCodeScreenDispatchProps } from './types'
import { Card, PhoneNumber, RHeadingText, RButton, RText, Logo } from '../../../src/components/atoms'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { setCountry, setPhoneNumber, setOTP, setNewPassword } from '../../store/core/actions';
import { getStackStyles } from '../../commons/styles/stack-style-constants'
import { OTPInput } from '../../components/atoms/otp-input/view'

class VerifyCodeScreen extends React.Component<VerifyCodeScreenProps, VerifyCodeScreenState> {

    constructor(props: VerifyCodeScreenProps) {
        super(props)
       this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    VerifyPasswordScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate("finishedRegisteration")
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                    <Logo />
                    <Card>
                        
                        <OTPInput
                            data={{
                                otp: this.props.data.otp,
                                inputHelperText: 'Please enter OTP'
                            }}
                            operations={{
                                setOTP: this.props.setOTP
                            }} />


                        {/* <PhoneNumber
                            data={this.props.data}
                            operations={{
                                setCountry: this.props.setCountry,
                                setPhoneNumber: this.props.setPhoneNumber
                            }} /> */}
                        <View style={Styles.textDisplay}>
                        <RText>An OTP will be send to the ({this.props.data.country.dialCode}) {this.props.data.phoneNumber}</RText>
                        </View>
                        <RButton name="Send Code" onPress={this.VerifyPasswordScreenNavigationHandler} />
                    </Card>
                </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: VerifyCodeScreenProps): VerifyCodeScreenProps => {
    return {
        ...localProps,
        data: {
            country: state.core.coreData.country,
            phoneNumber: state.core.coreData.phoneNumber,
            otp: state.core.coreData.verifyCode.otp
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): VerifyCodeScreenDispatchProps => {
    return {
        setCountry: (countryCode: string) => dispatch(setCountry(countryCode)),
        setPhoneNumber: (phoneNumber: string) => dispatch(setPhoneNumber(phoneNumber)),
        setOTP: (otp: string) => dispatch(setOTP(otp)),
        setNewPassword: (newPassword: string) => dispatch(setNewPassword(newPassword))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(VerifyCodeScreen)