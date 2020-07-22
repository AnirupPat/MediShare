import React from 'react';
import { View, Text } from 'react-native';
import { ProductProps, ProductState } from './types';
import { Styles } from './styles';
import { RTitleText } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-title-text/view';
import { Colors } from '@virtuelabs-io/rapido-modules/src/commons/styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'; 
import { RText } from '../../atoms/r-text/view';

export class Product extends React.Component<ProductProps, ProductState> {
    constructor(props: ProductProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <TouchableOpacity style={Styles.orderContainer} onPress={this.props.onPress} activeOpacity={0.5}>
                <View style={Styles.leftContainer}>
                    <View style={Styles.orderNumberContainer}>
                        <View style={Styles.medicineNameBox}>
                            <AntDesign name="medicinebox" size={30} color={Colors.primary} />
                            <RTitleText> {this.props.data.fields.name}</RTitleText>
                        </View>
                        <View style={Styles.deleteBox}>
                            <TouchableOpacity style={Styles.delete}>
                                <MaterialIcons name="delete" size={30} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={Styles.orderNumberContainer}>
                        <View style={Styles.medicineNameBox}>
                        <FontAwesome name="calendar" size={24} color="black" />
                            <RText> Expires  {this.props.data.fields.expiresOn}</RText>
                        </View>
                    </View>

                    <View style={Styles.lowerBox}>
                        <View style={Styles.donate}>
                            <TouchableOpacity style={Styles.donateIcon}>
                            <AntDesign name="hearto" size={40} color={Colors.primary} />
                            </TouchableOpacity>
                            <RTitleText>Donate</RTitleText>
                        </View>
                        <View style={Styles.qunatityBox}>
                            <View style={Styles.quantityActionBox}>
                                <TouchableOpacity>
                                    <AntDesign style={Styles.quantityAction} name="minuscircle" size={24} color="black" />
                                </TouchableOpacity>
                                <Text style={Styles.quantity}>{this.props.data.fields.InStockQty}</Text>
                                <TouchableOpacity>
                                    <AntDesign style={Styles.quantityAction} name="pluscircle" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                            <RTitleText>Quantity</RTitleText>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}