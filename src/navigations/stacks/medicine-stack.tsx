import React from 'react'
import { MedicineStackNavigationParamsType, RootStackParamsType } from '../../store/core/types'
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack'
import ProductScreen  from '../../scenes/products-screen/view'


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
			</MedicineStackNavigator.Navigator>
		)
	}
}