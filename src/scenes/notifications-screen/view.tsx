import React, { Dispatch } from 'react'
import { ScrollView, View, Dimensions, Text, FlatList } from 'react-native'
import Styles from './styles'
import { NotificationsScreenProps, NotificationsScreenState, NotificationsScreenDispatchProps } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
import { Product } from '../../components/organisms/product/view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RAntIconButton } from '../../components/atoms/r-ant-icon-button/view';
import navigations from '../../navigations';
import { Ionicons, AntDesign, Feather, Entypo, MaterialIcons } from '@expo/vector-icons';
import { Card } from '@virtuelabs-io/rapido-modules/src/components/atoms/card/view';
import { RText } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-text/view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RTitleText } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-title-text/view';
import { InsightAllAck } from '../../components/molecules/insight-all-ack/view';
import Constants from '../../commons/constants';


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
                    <View style={Styles.screen}>
                        <Card key={notif.id}>
                        <View style={Styles.notifHolder}>
                            <View style={Styles.notifHeaderContainer}>
                                <View style={Styles.medicineContainer}>
                                <RTitleText>{notif.medicine} (Qty: {notif.quantity} )</RTitleText>
                                </View>
                                <View style={Styles.ackContainer}>
                                    <TouchableOpacity>
                                        <Feather name="thumbs-up" size={24} color="black" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={Styles.requestorContainer}>
                                <MaterialIcons style={{marginRight: 10}} name="person" size={24} color="black" />
                                <Text style={Styles.requestorTextContainer}>
                                {notif.requestor}
                                    
                                </Text>
                            </View>
                            <View style={Styles.requestorContainer}>
                            <Entypo style={{marginRight: 10}} name="address" size={24} color="black" />
                                <Text style={Styles.requestorTextContainer}>
                                    {notif.address}
                                </Text>
                            </View>
                        </View>
                    </Card>
                    </View>
                )
            })}
            <InsightAllAck
                    icon="rocket1"
                    text1={Constants.DEFAULT_TEXT.insightsText1}
                    text2={Constants.DEFAULT_TEXT.insightsText2}
                />
            </ScrollView>
            
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: NotificationsScreenProps): NotificationsScreenProps => {
    return {
        ...localProps,
        data: {
            notification: require('../../assets/data/notifications.json')
        },
        title: localProps.route.params.title
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): NotificationsScreenDispatchProps => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(NotificationsScreen)