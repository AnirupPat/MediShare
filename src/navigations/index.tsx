import React, { Dispatch } from 'react';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../scenes/login-screen/view';
import { AppState, AppActionTypes } from '../store';
import { AppNavigationDispatchProps } from './types';
import { AppNavigationProps, AppNavigationState } from './types';
import { connect } from 'react-redux';
import ResetCodeScreen from '../scenes/reset-code-screen/view';
import ResetPasswordScreen from '../scenes/reset-password-screen/view';
import { RootStackParamsType, AuthStackNavigationParamsType } from '../store/core/types';
import FinishedResetScreen from '../scenes/finished-reset-screen/view';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { getTabIcon, getTabBarStyles, getTabLabel } from '../commons/styles/stack-style-constants';
import { SettingsStackNavigation } from './stacks/settings-stack';
import { MedicineStackNavigation } from './stacks/medicine-stack';
import { RequestStackNavigation } from './stacks/request-stack';
import RegisterScreen from '../scenes/register-screen/view';
import VerifyCodeScreen from '../scenes/verify-code-screen/view';

const TabNavigator = createBottomTabNavigator<RootStackParamsType>();

const AuthStackNavigator = createStackNavigator<AuthStackNavigationParamsType>();

type AuthStackScreenProps = StackScreenProps<RootStackParamsType, 'authStack'>;

class AppNavigation extends React.Component<AppNavigationProps, AppNavigationState> {

    constructor(props: AppNavigationProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <NavigationContainer>
                {this.props.core.coreData.auth.signedIn ? (
                    <TabNavigator.Navigator
                        initialRouteName="medicineStack"
                        screenOptions={(props) => ({
                            tabBarIcon: (tabProps: any) => {
                                return (
                                    <Feather name={getTabIcon(props.route.name)} size={tabProps.size + 2} color={tabProps.color} />
                                )
                            },
                            tabBarLabel: getTabLabel(props.route.name)
                        })}
                        tabBarOptions={getTabBarStyles()}>
                        <TabNavigator.Screen
                            name="medicineStack"
                            component={MedicineStackNavigation}
                            initialParams={this.props.core.rootStackParams.medicineStack} />

                        <TabNavigator.Screen
                            name="requestStack"
                            component={RequestStackNavigation}
                            initialParams={this.props.core.rootStackParams.requestStack} />

                        <TabNavigator.Screen
                            name="settingsStack"
                            component={SettingsStackNavigation}
                            initialParams={this.props.core.rootStackParams.settingsStack} />
                    </TabNavigator.Navigator>
                ) : (
                        <AuthStackNavigator.Navigator initialRouteName="login">
                            <AuthStackNavigator.Screen
                                name="login"
                                component={LoginScreen}
                                initialParams={this.props.core.rootStackParams.authStack.login}
                            />
                            <AuthStackNavigator.Screen
                                name="register"
                                component={RegisterScreen}
                                initialParams={this.props.core.rootStackParams.authStack.register}
                            />
                            <AuthStackNavigator.Screen
                                name="verifyCode"
                                component={VerifyCodeScreen}
                                initialParams={this.props.core.rootStackParams.authStack.verifyCode}
                            />
                            <AuthStackNavigator.Screen
                                name="resetCode"
                                component={ResetCodeScreen}
                                initialParams={this.props.core.rootStackParams.authStack.resetCode}
                            />
                            <AuthStackNavigator.Screen
                                name="resetPassword"
                                component={ResetPasswordScreen}
                                initialParams={this.props.core.rootStackParams.authStack.resetPassword}
                            />
                            <AuthStackNavigator.Screen
                                name="finishedReset"
                                component={FinishedResetScreen}
                                initialParams={this.props.core.rootStackParams.authStack.finishedReset}
                            />
                        </AuthStackNavigator.Navigator>
                    )
                }
            </NavigationContainer>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: AppNavigationProps): AppNavigationProps => {
    return {
        core: state.core
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): AppNavigationDispatchProps => {
    return {}
}

export default connect(mapStatetoProps, mapDispatchToProps)(AppNavigation)