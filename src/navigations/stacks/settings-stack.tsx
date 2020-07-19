import React from 'react';
import { SettingsStackNavigationParamsType, RootStackParamsType } from '../../store/core/types'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import SettingsScreen from '../../scenes/settings-screen/view'
import ProfileScreen from '../../scenes/profile-screen/view';
import ConfigurationScreen from '../../scenes/configuration-screen/view';
import PrivacyPolicyScreen from '../../scenes/privacy-policy-screen/view';
import TermsOfServiceScreen from '../../scenes/terms-of-service-screen/view';
import AboutUsScreen from '../../scenes/about-us-screen/view';


const SettingsStackNavigator = createStackNavigator<SettingsStackNavigationParamsType>();

type SettingsStackScreenProps = StackScreenProps<RootStackParamsType, 'settingsStack'>;

export class SettingsStackNavigation extends React.Component<SettingsStackScreenProps> {
	constructor(props: SettingsStackScreenProps) {
		super(props)
	}

	render(): React.ReactNode {
		return (
			<SettingsStackNavigator.Navigator initialRouteName="settings">
                <SettingsStackNavigator.Screen
                    name="settings"
                    component={SettingsScreen}
                    initialParams={this.props.route.params.settings}
                />
                <SettingsStackNavigator.Screen
                    name="profile"
                    component={ProfileScreen}
                    initialParams={this.props.route.params.profile}
                />
                <SettingsStackNavigator.Screen
                    name="configuration"
                    component={ConfigurationScreen}
                    initialParams={this.props.route.params.configuration}
                />
                <SettingsStackNavigator.Screen
                    name="privacyPolicy"
                    component={PrivacyPolicyScreen}
                    initialParams={this.props.route.params.privacyPolicy}
                />
                <SettingsStackNavigator.Screen
                    name="termsOfService"
                    component={TermsOfServiceScreen}
                    initialParams={this.props.route.params.termsOfService}
                />
                <SettingsStackNavigator.Screen
                    name="aboutUs"
                    component={AboutUsScreen}
                    initialParams={this.props.route.params.aboutUs}
                />
			</SettingsStackNavigator.Navigator>
		)
	}
}
