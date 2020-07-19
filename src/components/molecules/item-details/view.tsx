import React from 'react';
import { View } from 'react-native';
import { ItemDetailsProps, ItemDetailsState } from './types';
import { Styles } from './styles';
import { RMediumText } from '../../atoms/r-medium-text/view';
import { RText } from '../../atoms/r-text/view';


export class ItemDetails extends React.Component<ItemDetailsProps, ItemDetailsState> {

    constructor(props: ItemDetailsProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.itemDetailsParentContainer}>
                <View style={Styles.itemDetailsContainer}>
                    <View style={Styles.leftHeaderContainer}>
                        <RMediumText>Item ID</RMediumText>
                    </View>
                    <View style={Styles.centerHeaderContainer}>
                        <RMediumText>Description</RMediumText>
                    </View>
                    <View style={Styles.rightHeaderContainer}>
                        <RMediumText>Qty</RMediumText>
                    </View>
                </View>
                {this.props.items.map((item, index) => {
                    return (
                        <View key={(item.orderId + item.productId).toString()}  style={Styles.itemDetailsContainer}>
                            <View style={Styles.leftContainer}>
                                <RText>{item.productId}</RText>
                            </View>
                            <View style={Styles.centerContainer}>
                                <RText>{item.itemName}</RText>
                            </View>
                            <View style={Styles.rightContainer}>
                                <RText>{item.quantity}</RText>
                            </View>
                        </View>
                    )
                })}
            </View>
        )
    }
}
