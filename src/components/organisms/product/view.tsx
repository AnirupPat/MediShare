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
import CheckBox from 'react-native-check-box';

export class Product extends React.Component<ProductProps, ProductState> {
    constructor(props: ProductProps) {
        super(props)
    }

    render(): React.ReactNode {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={Styles.orderContainer} activeOpacity={0.5}>
                {/* <View style={Styles.rightContainer}> */}
                <View style={Styles.checkboxContainer}>
                    <CheckBox
                        leftText={"CheckBox"}
                        isChecked={this.props.data.fields.selected}
                        onClick={this.props.onClick}
                        style={Styles.checkbox}
                    />
                </View>
                {/* </View> */}
                <View style={Styles.rightContainer}>
                    <View style={Styles.orderNumberContainer}>
                        <View style={Styles.medicineNameBox}>
                            <AntDesign name="medicinebox" size={30} color={Colors.primary} />
                            <RTitleText> {this.props.data.fields.name}</RTitleText>
                            <View style={Styles.qtyBox}>
                                <RText>(Qty - {this.props.data.fields.InStockQty})</RText>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.orderNumberContainer}>
                        <RText> {this.props.data.fields.points}</RText>
                    </View>
                    <View style={Styles.orderNumberContainer}>
                        <View style={Styles.medicineNameBox}>
                            <FontAwesome name="calendar" size={24} color="black" />
                            <RText> Expires  {this.props.data.fields.expiresOn}</RText>
                        </View>
                    </View>
                    <View style={Styles.orderNumberContainer}>
                        <RText> {this.props.data.fields.notes}</RText>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}