import React, { Dispatch } from 'react'
import { View, FlatList, Text } from 'react-native'
import { RText, RButton } from '../../components/atoms'
import Styles from './styles'
import { MailScreenProps, MailScreenState, MailScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { RTitleText } from '@virtuelabs-io/rapido-modules/src/components/atoms'
import { ProductsActionTypes } from '../../store/medicines/actions'
import { connect } from 'react-redux'
import { AppState } from '../../store'
import { Colors } from '@virtuelabs-io/rapido-modules/src/commons/styles/colors';
import { MaterialIcons, FontAwesome, FontAwesome5, AntDesign, Entypo } from '@expo/vector-icons';

class MailScreen extends React.Component<MailScreenProps, MailScreenState> {
    constructor(props: MailScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(''))
    }

    handleBack = () => {
        this.props.navigation.navigate("medicine", {
            title: "My Pillbox"
        })
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <View style={Styles.thanksBox}>
                    <RTitleText>Thank you for MediSharing</RTitleText>
                    <RText>You have shared the following meds with Goonj.</RText>
                </View>
                <FlatList
                    style={{ marginBottom: '10%' }}
                    keyExtractor={item => item.id.toString()}
                    data={this.props.data}
                    // ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={(product) =>
                        <View style={Styles.donatedMeds}>
                            <View style={Styles.medName}>
                                <AntDesign style={{ marginRight: '5%' }} name="medicinebox" size={30} color={Colors.primary} />
                                <RText>{product.item.fields.name}</RText>
                            </View>
                            <View style={Styles.medName}>
                                <AntDesign style={{ marginRight: '5%' }} name="pushpin" size={24} color="black" />
                                <RText>{product.item.fields.points}</RText>
                            </View>
                        </View>
                    }
                />


                <View style={Styles.thanksBox}>
                    <RText>Your intent to donate has been notified to Goonj. </RText>
                    <RText>Kindly contact for hand over.</RText>
                </View>

                <RButton name="Back to Pillbox" onPress={() => this.handleBack()} />

                <View style={Styles.thanksBox}>
                    <RText>Moreover, click below to know of Meds requested by Goonj</RText>
                    <RButton name="Lets help Goonj" onPress={() => this.handleBack()} />
                </View>
            </View>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: MailScreenProps): MailScreenProps => {
    var donatedMedArray: any = []
    state.medicine.medicines.forEach((med) => {
        if (med.fields.decision == 'Donate' && med.fields.name != "Glyciphage SR 1mg") {
            donatedMedArray.push(med)
        }
        if(med.fields.name == "Glyciphage SR 1mg") {
            donatedMedArray.push(med)
        }
    })
    return {
        ...localProps,
        data: donatedMedArray
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ProductsActionTypes>): MailScreenDispatchProps => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(MailScreen)