import React from 'react'
import { RequestStackNavigationParamsType, RootStackParamsType } from '../../store/core/types'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import RequestScreen  from '../../scenes/request-screen/view'


const RequestStackNavigator = createStackNavigator<RequestStackNavigationParamsType>();

type RequestStackScreenProps = StackScreenProps<RootStackParamsType, 'requestStack'>;

export class RequestStackNavigation extends React.Component<RequestStackScreenProps> {
	constructor(props: RequestStackScreenProps) {
		super(props)
	}

	render(): React.ReactNode {
		return (
			<RequestStackNavigator.Navigator initialRouteName="request">
                <RequestStackNavigator.Screen
                    name="request"
                    component={RequestScreen}
                    initialParams={this.props.route.params.request}
                />
			</RequestStackNavigator.Navigator>
		)
	}
}