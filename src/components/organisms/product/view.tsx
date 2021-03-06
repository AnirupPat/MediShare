import React from 'react';
import { View, Text } from 'react-native';
import { ProductProps, ProductState } from './types';
import { Styles } from './styles';
import { RTitleText } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-title-text/view';
import { Colors } from '@virtuelabs-io/rapido-modules/src/commons/styles/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons, FontAwesome, FontAwesome5, AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { RText } from '../../atoms/r-text/view';
import CheckBox from 'react-native-check-box';

export class Product extends React.Component<ProductProps, ProductState> {
    constructor(props: ProductProps) {
        super(props)
    }

    handleConsumption = (key) => {
        console.log(key)
    }

    render(): React.ReactNode {
        return (
            <TouchableOpacity onPress={this.props.onPress}
                style={[Styles.orderContainer, (this.props.data.fields.decision == 'Retain' ? { backgroundColor: '#85C1E9' }
                    : (this.props.data.fields.decision == 'Discard' ? { backgroundColor: '#CD5C5C' }
                        : (this.props.data.fields.decision == 'Donate' ? { backgroundColor: '#3CB371' } : null)))]} activeOpacity={0.5}>
                {/* <View style={Styles.rightContainer}> */}
                <View style={Styles.checkboxContainer}>
                    <CheckBox
                        isChecked={this.props.data.fields.selected}
                        onClick={this.props.onClick}
                        style={Styles.checkbox}
                    />
                </View>
                {/* </View> */}
                <View style={Styles.rightContainer}>
                    <View style={Styles.orderNumberContainer}>
                        <View style={Styles.medicineNameBox}>
                            <AntDesign style={Styles.innerIcons} name="medicinebox" size={30} color={Colors.primary} />
                            <RTitleText> {this.props.data.fields.name}</RTitleText>
                            <View style={Styles.qtyBox}>
                                <RText>(Qty - {this.props.data.fields.InStockQty})</RText>
                            </View>
                        </View>
                    </View>
                    <View style={Styles.orderNumberContainer}>

                        <View style={Styles.medicineNameBox}>
                            <AntDesign style={Styles.innerIcons} name="pushpin" size={24} color="black" />
                            <RText> {this.props.data.fields.points}</RText>
                        </View>
                    </View>
                    <View style={Styles.orderNumberContainer}>
                        <View style={Styles.medicineNameBox}>
                            <FontAwesome style={Styles.innerIcons} name="calendar" size={24} color="black" />
                            <RText> Expires in {this.props.data.fields.expiresOn} months</RText>
                        </View>
                    </View>
                    <View style={Styles.orderNumberContainer}>
                        <View style={Styles.medicineNameBox}>
                            {/* <Entypo style={Styles.innerIcons} name="bug" size={24} color="black" /> */}
                            <MaterialCommunityIcons style={Styles.innerIcons} name="hand-pointing-right" size={24} color="black" />
                            <RText> {this.props.data.fields.notes}</RText>
                        </View>
                    </View>
                    <View style={[Styles.buttonStack, Styles.orderNumberContainer]}>
                        <TouchableOpacity onPress={this.props.onDelete}>
                            <AntDesign style={Styles.iconSeparator} name="minuscircle" size={24} color="#8B0000" />
                        </TouchableOpacity>


                        {this.props.data.fields.decision == 'Retain' ?
                            <AntDesign style={Styles.iconSeparator} name="CodeSandbox" size={24} color="black" />
                            : null
                        }

                        {this.props.data.fields.decision == 'Discard' ?
                            <MaterialIcons style={Styles.iconSeparator} name="delete" size={24} color="black" />
                            : null
                        }

                        {this.props.data.fields.decision == 'Donate' ?
                            <FontAwesome5 name="hand-holding-heart" style={Styles.iconSeparator} size={24} color="black" />
                            : null
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}