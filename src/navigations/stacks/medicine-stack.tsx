import React from 'react'
import { MedicineStackNavigationParamsType, RootStackParamsType } from '../../store/core/types'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import ProductScreen  from '../../scenes/products-screen/view'
import NotificationScreen from '../../scenes/notifications-screen/view'
import ProductAddScreen from '../../scenes/product-add-screen/view'
import MedConfirmationScreen from '../../scenes/med-confirmation-screen/view'
import RequestScreen  from '../../scenes/request-screen/view'
import NotifListnerScreen from '../../scenes/notif-listner-screen/view'

const MedicineStackNavigator = createStackNavigator<MedicineStackNavigationParamsType>();

type MedicineStackScreenProps = StackScreenProps<RootStackParamsType, 'medicineStack'>;

export class MedicineStackNavigation extends React.Component<MedicineStackScreenProps> {
	constructor(props: MedicineStackScreenProps) {
		super(props)
	}

	render(): React.ReactNode {
		return (
			<MedicineStackNavigator.Navigator initialRouteName="medicine">
                <MedicineStackNavigator.Screen
                    name="medicine"
                    component={ProductScreen}
                    initialParams={this.props.route.params.medicine}
                />
                <MedicineStackNavigator.Screen
                    name="request"
                    component={RequestScreen}
                    initialParams={this.props.route.params.request}
                />
				<MedicineStackNavigator.Screen
                    name="notifications"
                    component={NotificationScreen}
                    initialParams={this.props.route.params.notifications}
                />
				<MedicineStackNavigator.Screen
                    name="medicineAdd"
                    component={ProductAddScreen}
                    initialParams={this.props.route.params.medicineAdd}
                />
                <MedicineStackNavigator.Screen
                    name="medConfirmation"
                    component={MedConfirmationScreen}
                    initialParams={this.props.route.params.medConfirmation}
                />
                <MedicineStackNavigator.Screen
                    name="notifListner"
                    component={NotifListnerScreen}
                    initialParams={this.props.route.params.notifListner}
                />
			</MedicineStackNavigator.Navigator>
		)
	}
}