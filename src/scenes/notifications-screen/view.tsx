import React, { Dispatch } from 'react'
import { ScrollView, View, Dimensions, Text, FlatList } from 'react-native'
import Styles from './styles'
import { NotificationsScreenProps, NotificationsScreenState, NotificationsScreenDispatchProps } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
import { Ionicons, AntDesign, Feather, Entypo, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { Card } from '../../../src/components/atoms/card/view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RTitleText } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-title-text/view';
import { InsightAllAck } from '../../components/molecules/insight-all-ack/view';
import Constants from '../../commons/constants';
import { clearNotif, ProductsActionTypes } from '../../store/medicines/actions';


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
                                            <RTitleText>{notif.medicine} (Qty: {notif.quantity} )</RTitleText>
                                        </View>
                                        <View style={Styles.ackContainer}>
                                            <TouchableOpacity onPress={() => this.props.clearNotif(notif.id)}>
                                                <Feather name="thumbs-up" size={24} color="black" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={Styles.requestorContainer}>
                                        {/* <MaterialIcons style={{ marginRight: 10 }} name="person" size={24} color="black" /> */}
                                        <FontAwesome style={{ marginRight: 10 }} name="calendar" size={24} color="black" />
                                        <Text style={Styles.requestorTextContainer}>
                                            {notif.expiryDate}

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
    return {
        ...localProps,
        data: {
            notification: state.medicine.notifications
        },
        title: localProps.route.params.title
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ProductsActionTypes>): NotificationsScreenDispatchProps => {
    return {
        clearNotif: (id: string) => dispatch(clearNotif(id))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(NotificationsScreen)