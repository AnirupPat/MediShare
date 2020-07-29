import React, { Dispatch }  from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Button } from 'react-native';
import { Card, PhoneNumber, PasswordInput, RButton, RHeadingText, RText, Logo } from '../../components/atoms';
import { RegisterScreenProps, RegisterScreenState, RegisterDetailsDispatchProps } from './types'
import { connect } from 'react-redux';
import { AppState, AppActionTypes } from '../../store';
import { signInUser, setCountry, setPhoneNumber, setPassword, signOutUser } from '../../store/core/actions';
import Styles from './styles';
import { getStackStyles } from '../../commons/styles/stack-style-constants';

class RegisterScreen extends React.Component<RegisterScreenProps, RegisterScreenState> {
    constructor(props: RegisterScreenProps) {
        super(props)
       this.props.navigation.setOptions(getStackStyles(this.props.route.name))
    }

    dashboardStackNavigationHandler = () => {
       // console.log("dashboardStackNavigationHandler Handled!")
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
                        <PasswordInput
                            data={{
                                password: this.props.data.password,
                                inputHelperText: "Re enter your Password"
                            }}
                            operations={{
                                setPassword: this.props.setPassword
                            }}
                        />
                        <RButton name={this.props.route.name} onPress={this.props.signInUser} />
                        
                    </Card>
                </KeyboardAvoidingView>
                 
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: RegisterScreenProps): RegisterScreenProps => {
    return {
        ...localProps,
        data: {
            country: state.core.coreData.country,
            phoneNumber: state.core.coreData.phoneNumber,
            password: state.core.coreData.password
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): RegisterDetailsDispatchProps => {
    return {
        signInUser: () => dispatch(signInUser()),
        setCountry: (countryCode: string) => dispatch(setCountry(countryCode)),
        setPhoneNumber: (phoneNumber: string) => dispatch(setPhoneNumber(phoneNumber)),
        setPassword: (password: string) => dispatch(setPassword(password))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(RegisterScreen)