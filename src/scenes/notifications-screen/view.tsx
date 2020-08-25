import React, { Dispatch } from 'react'
import { ScrollView, View, Dimensions, Text, FlatList } from 'react-native'
import Styles from './styles'
import { NotificationsScreenProps, NotificationsScreenState, NotificationsScreenDispatchProps } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
import { Ionicons, AntDesign, Feather, Entypo, MaterialIcons, FontAwesome5, FontAwesome  } from '@expo/vector-icons';
import { Card } from '../../../src/components/atoms/card/view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RTitleText } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-title-text/view';
import { InsightAllAck } from '../../components/molecules/insight-all-ack/view';
import Constants from '../../commons/constants';
import { clearNotif, ProductsActionTypes, setDecision, setDecisionById } from '../../store/medicines/actions';
import { RText } from '../../components/atoms';
import { Medicine } from '../../models/medicines';


class NotificationsScreen extends React.Component<NotificationsScreenProps, NotificationsScreenState> {

    constructor(props: NotificationsScreenProps, state: NotificationsScreenState) {
        super(props)
        var options = getStackStyles(
            this.props.title
        )

        this.props.navigation.setOptions(options)
    }

    handleNavigateToDetail = (id: any) => {

    }

    handleNavigateToNewProduct = () => {

    }

    handleDonate = (id: any) => {
        this.props.setDecisionById(id,'Donate') // D -> Donate
        this.props.navigation.navigate("request", {
            title: "Donors"
        })
    }

    render(): React.ReactNode {
        return (
            <ScrollView>
                {this.props.data.notification.map((notif) => {
                    return (
                        <View key={notif.id} style={Styles.screen}>
                            <Card key={notif.id}>
                                <View style={Styles.notifHolder}>
                                    <View style={Styles.notifHeaderContainer}>
                                        <View style={Styles.medicineContainer}>
                                            <RTitleText>{notif.fields.name}</RTitleText>
                                            <RText>Qty: {notif.fields.InStockQty}</RText>
                                        </View>
                                        <View style={Styles.ackContainer}>
                                            <TouchableOpacity onPress={() => this.handleDonate(notif.id)}>
                                                <FontAwesome5 name="hand-holding-heart" style={Styles.buttonIconSeparator} size={30} color="black" />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => {
                                                this.props.setDecisionById(notif.id.toString(), 'Retain') // R -> Retain
                                                this.props.clearNotif(notif.id.toString())}}>
                                                <AntDesign style={Styles.buttonIconSeparator} name="CodeSandbox" size={30} color="black" />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => {
                                                this.props.setDecisionById(notif.id.toString(), 'Discard') // R -> Retain
                                            }}>
                                                <MaterialIcons style={Styles.buttonIconSeparator} name="delete" size={30} color="black" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={Styles.requestorContainer}>
                                        {/* <MaterialIcons style={{ marginRight: 10 }} name="person" size={24} color="black" /> */}
                                        <FontAwesome style={{ marginRight: 10 }} name="calendar" size={24} color="black" />
                                        <Text style={Styles.requestorTextContainer}>
                                            Expires in {notif.fields.expiresOn} months
                                        </Text>
                                    </View>
                                </View>
                            </Card>
                        </View>
                    )
                })}
                <View style={Styles.mainContainer}>
                    <InsightAllAck
                        icon="rocket1"
                        text1={Constants.DEFAULT_TEXT.insightsText1}
                        text2={Constants.DEFAULT_TEXT.insightsText2}
                    />
                </View>
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: NotificationsScreenProps): NotificationsScreenProps => {
    var notifArray: any =  []
    state.medicine.medicines.forEach((med) => {
        if(med.fields.expiresOn < 3 && med.fields.decision == "") {
            notifArray.push(med)
        }
    })
    return {
        ...localProps,
        data: {
            // notification: state.medicine.notifications
            notification: notifArray
            // state.medicine.medicines
        },
        title: localProps.route.params.title
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ProductsActionTypes>): NotificationsScreenDispatchProps => {
    return {
        clearNotif: (id: string) => dispatch(clearNotif(id)),
        setDecisionById: (id: string, label: string) => dispatch(setDecisionById(id, label))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(NotificationsScreen)