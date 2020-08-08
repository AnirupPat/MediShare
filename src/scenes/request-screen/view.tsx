import React, { Dispatch } from 'react'
import { ScrollView, View, Dimensions, Text, FlatList, Button, Animated } from 'react-native'
import Styles from './styles'
import { RequestScreenProps, RequestScreenState, RequestScreenDispatchProps } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
import { Product } from '../../components/organisms/product/view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RAntIconButton } from '../../components/atoms/r-ant-icon-button/view';
import navigations from '../../navigations';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { LogoImage } from '../../components/molecules/logo-image/view';
import { RTitleText } from '@virtuelabs-io/rapido-modules/src/components/atoms/r-title-text/view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 

const { height } = Dimensions.get("window");
const _draggedValue = new Animated.Value(180);
class RequestScreen extends React.Component<RequestScreenProps, RequestScreenState> {
    _panel: SlidingUpPanel | null = null;

    constructor(props: RequestScreenProps, state: RequestScreenState) {
        super(props)
        // this.props.draggableRange.top = height + 180 - 64
        // this.props.draggableRange.bottom = 180


        this.state = {
            draggableRange: {
                top: height + 180,
                bottom: 0
            }
        }
        // this.setState({
        //     draggableRange: {
        //         top: height + 180 - 64,
        //         bottom: 180
        //     }
        // })
        var options = getStackStyles(
            'Request',
            "message-square",
            () => {
                this.handleNavigateToNewProduct()
            }
        )
        options = {
            ...options,
            headerLeft: () => (
                <RAntIconButton
                    icon="filter"
                    size={28}
                    onPress={() => {
                        // @ts-ignore
                        // REASON: state picked up from redux
                        this.props.navigation.navigate('filterProducts', {
                            title: "Filters"
                        })
                    }}
                />
            )
        }
        this.props.navigation.setOptions(options)
    }

    handleNavigateToDetail = (id: any) => {

    }

    handleNavigateToNewProduct = () => {
        this.props.navigation.navigate("chatbot", {
            title: 'ChatBot'
        })
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                {/* <View > */}
                <MapView
                    style={{ flex: 1 }}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation
                    initialRegion={{
                        latitude: 12.9275,
                        longitude: 77.6810,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }} >
                    <Marker coordinate={{ latitude: 12.9275, longitude: 77.6810 }} />
                    <Marker coordinate={{ latitude: 12.9503, longitude: 77.6666 }} />
                    <Marker coordinate={{ latitude: 12.9660, longitude: 77.7026 }} />
                    <Marker coordinate={{ latitude: 12.9202, longitude: 77.6512 }} />
                    <Marker coordinate={{ latitude: 12.9569, longitude: 77.7011 }} />
                </MapView>
                <Button title='SHOW LIST' onPress={() => this._panel?.show(360)} />
                {/* </View> */}



                <SlidingUpPanel
                    draggableRange={this.state.draggableRange}
                    animatedValue={_draggedValue}
                    snappingPoints={[360]}
                    height={height + 180}
                    friction={0.5}
                    ref={c => this._panel = c}>
                    <View style={Styles.container}>
                        <View style={Styles.logoBox}>
                            <LogoImage />
                        </View>

                        <SafeAreaView style={Styles.screen}>
                            <FlatList
                                style={Styles.screen}
                                data={this.props.data}
                                renderItem={(donor) =>

                                    <View style={Styles.donorBox}>
                                        <View style={Styles.nameBox}>
                                            <RTitleText>{donor.item.name}</RTitleText>
                                            <View style={Styles.verifiedBox}>
                                                <Text style={Styles.verifiedFont}>{donor.item.status}</Text>
                                            </View>
                                        </View>

                                        <Text style={Styles.donorAddress}>{donor.item.address}</Text>
                                        <View style={Styles.distanceActionBox}>
                                            <Text style={{fontSize: 15}}>Distance: {donor.item.distance}</Text>
                                            <View style={Styles.requestAction}>
                                            <TouchableOpacity>
                                                <Entypo name="hand" size={24} color="black" />
                                            </TouchableOpacity>
                                            <Text>Request</Text>
                                            </View>
                                            
                                        </View>
                                        
                                    </View>

                                }
                                keyExtractor={(donor) => donor.id.toString()}
                            />
                        </SafeAreaView>

                        {/* <Text style={Styles.text}>Here is the content inside panel</Text>
                        <Button title='Hide' onPress={() => this._panel?.hide()} /> */}
                    </View>
                </SlidingUpPanel>
            </View>

        )
    }
}

const mapStatetoProps = (state: AppState, localProps: RequestScreenProps): RequestScreenProps => {
    return {
        ...localProps,
        data: state.donors.donors
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): RequestScreenDispatchProps => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(RequestScreen)