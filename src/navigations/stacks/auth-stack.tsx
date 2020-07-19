import React from 'react';
import { AuthStackNavigationParamsType, RootStackParamsType } from '../../store/core/types'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import ResetCodeScreen from '../../scenes/reset-code-screen/view'
import LoginScreen from '../../scenes/login-screen/view';
import FinishedResetScreen from '../../scenes/finished-reset-screen/view';
import ResetPasswordScreen from '../../scenes/reset-password-screen/view';

const AuthStackNavigator = createStackNavigator<AuthStackNavigationParamsType>();

type AuthStackScreenProps = StackScreenProps<RootStackParamsType, 'authStack'>;

export class AuthStackNavigation extends React.Component<AuthStackScreenProps> {
    constructor(props: AuthStackScreenProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <AuthStackNavigator.Navigator initialRouteName="login">
                <AuthStackNavigator.Screen
                    name="login"
                    component={LoginScreen}
                    initialParams={this.props.route.params.login}
                />
                <AuthStackNavigator.Screen
                    name="resetCode"
                    component={ResetCodeScreen}
                    initialParams={this.props.route.params.resetCode}
                />
                <AuthStackNavigator.Screen
                    name="resetPassword"
                    component={ResetPasswordScreen}
                    initialParams={this.props.route.params.resetPassword}
                />
                <AuthStackNavigator.Screen
                    name="finishedReset"
                    component={FinishedResetScreen}
                    initialParams={this.props.route.params.finishedReset}
                />
            </AuthStackNavigator.Navigator>
        )
    }
}
