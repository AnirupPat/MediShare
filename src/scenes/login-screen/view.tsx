import React, { Dispatch } from 'react'
import { View, ScrollView, KeyboardAvoidingView, Button } from 'react-native'
import { Card, PhoneNumber, PasswordInput, RButton, RHeadingText, RText, Logo } from '../../components/atoms'
import Styles from './styles'
import { LoginScreenProps, LoginScreenState, LoginDetailsDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { signInUser, setCountry, setPhoneNumber, setPassword } from '../../store/core/actions';

class LoginScreen extends React.Component<LoginScreenProps, LoginScreenState> {

    constructor(props: LoginScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    dashboardStackNavigationHandler = () => {
        console.log("dashboardStackNavigationHandler Handled!")
    }

    resetCodeScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate("resetCode")
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                    <Logo />
                    <Card>
                        <PhoneNumber
                            data={{
                                country: this.props.data.country,
                                phoneNumber: this.props.data.phoneNumber
                            }}
                            operations={{
                                setCountry: this.props.setCountry,
                                setPhoneNumber: this.props.setPhoneNumber
                            }}
                        />
                        <PasswordInput
                            data={{
                                password: this.props.data.password,
                                inputHelperText: "Enter your Password"
                            }}
                            operations={{
                                setPassword: this.props.setPassword
                            }}
                        />
                        <RButton name={this.props.route.params.title} onPress={this.props.signInUser} />
                        <View style={Styles.forgotPasswordContainer}>
                            <Button title="Forgot your Password?" onPress={this.resetCodeScreenNavigationHandler} />
                        </View>
                    </Card>
                </KeyboardAvoidingView>
                <Card>
                    <RText>Want to try out our product?</RText>
                    <RButton name="Request access" onPress={() => { console.log(this.props) }} />
                </Card>
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: LoginScreenProps): LoginScreenProps => {
    return {
        ...localProps,
        data: {
            country: state.core.coreData.country,
            phoneNumber: state.core.coreData.phoneNumber,
            password: state.core.coreData.password
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): LoginDetailsDispatchProps => {
    return {
        signInUser: () => dispatch(signInUser()),
        setCountry: (countryCode: string) => dispatch(setCountry(countryCode)),
        setPhoneNumber: (phoneNumber: string) => dispatch(setPhoneNumber(phoneNumber)),
        setPassword: (password: string) => dispatch(setPassword(password))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(LoginScreen)
