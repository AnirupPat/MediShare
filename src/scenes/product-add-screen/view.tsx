import React, { Dispatch, Component } from 'react'
import { ScrollView, Text, View, Image, Dimensions, TextInput, Button, Animated, Easing } from 'react-native'
import Styles from './styles'
import { ProductAddScreenProps, ProductAddScreenState, ProductAddScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { Card } from '@virtuelabs-io/rapido-modules/src/components/atoms/card/view';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as Expo from 'expo'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RButton } from '../../../src/components/atoms';
import { DoubleTap } from '../../components/organisms/double-tap/view';
import AnimatedView from '../../components/organisms/animated-view/view';
import { addMedicinePics, ProductsActionTypes, getMedicinePics } from '../../store/medicines/actions';
import { MedicinePics } from '../../store/medicines/types';


const { width, height } = Dimensions.get('screen');
let images = [
    "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
];


class ProductAddScreen extends React.Component<ProductAddScreenProps, ProductAddScreenState> {
    _isMounted = false;
    state = {
        image: undefined,
        // hasCameraPermission: null,
        // type: Expo.Camera.Constants.Type.Back,

        cameraRollStatus: '',
        cameraStatus: '',
        testmsg: ''
    };
    animatedValue: Animated.Value;
    constructor(props: ProductAddScreenProps, state: ProductAddScreenState) {
        super(props)
        this.animatedValue = new Animated.Value(0)
        // images = this.props.image
        this.props.navigation.setOptions(getStackStyles(
            this.props.route.params.title
        ))
    }

    _pickImage = async () => {
        this.getPermissionAsync();
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
                this.props.addMedicinePics(result)
            }
        } catch (E) {
            console.log(E);
        }
    }

    _cameraImage = async () => {
        this.setState({ testmsg: 'forcing refresh' });

        const permissions = Permissions.CAMERA;
        const permissions2 = Permissions.CAMERA_ROLL
        const status = await Permissions.askAsync(permissions);
        const status2 = await Permissions.askAsync(permissions2);


        this.setState({ cameraStatus: status.status });
        this.setState({ cameraRollStatus: status2.status })
        console.log('Permission =>', permissions);
        console.log('Status => ', status);

        if (status.status !== 'granted' && status2.status !== 'granted') {

            console.log(`[ pickFromCamera ] ${permissions} access: ${status.status}`);
            console.log(`[ pickFromCamera ] ${permissions2} access: ${status2.status}`);

        } else {
            let image = await ImagePicker.launchCameraAsync();
            if (!image.cancelled) {
                this.setState({ image: image.uri });
            }
            console.log(image);
            this.props.addMedicinePics(image)
        }
    };

    componentDidMount() {
        this.props.getMedicinePics()
        this.getPermissionAsync()
    }

    handlerLongClick = (image: any, index: any) => {
        console.log('log pressed !')
        // console.log(image)
        console.log(this.animatedValue)
        console.log(this.animatedValue)
        this.handleAnimation(image, index)
    }



    getPermissionAsync = async () => {
        // Constants.platform?.ios
        if (Constants.platform?.ios) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    handleAnimation = (image: any, index: any) => {
        // A loop is needed for continuous animation
        Animated.loop(
          // Animation consists of a sequence of steps
          Animated.sequence([
            // start rotation in one direction (only half the time is needed)
            Animated.timing(this.animatedValue, {toValue: 1.0, duration: 150, easing: Easing.linear, useNativeDriver: true}),
            // rotate in other direction, to minimum value (= twice the duration of above)
            Animated.timing(this.animatedValue, {toValue: -1.0, duration: 300, easing: Easing.linear, useNativeDriver: true}),
            // return to begin position
            Animated.timing(this.animatedValue, {toValue: 0.0, duration: 150, easing: Easing.linear, useNativeDriver: true})
          ]),{
              iterations: 1
          }
        ).start(); 
      }

    toggleLike = () => {
        console.log('Double tapped !')
    }

    handleIntelligentMac = () => {
        this.props.navigation.navigate("medConfirmation", {
            title: 'Confirmation'
        })
    }


    render(): React.ReactNode {
        let { image } = this.state;
        return (
            <ScrollView style={Styles.screen}>
                <View>
                    <Card>
                        <Text style={Styles.pointsTitle}>Images</Text>
                        <View style={Styles.picButtonsView}>
                            <TouchableOpacity style={Styles.button} onPress={this._cameraImage}>
                                <View>
                                    <Text style={Styles.buttonTextStyle}>Camera</Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity style={Styles.button} onPress={this._pickImage}>
                                <View>
                                    <Text style={Styles.buttonTextStyle}>Gallery</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.imageView}>
                        {this.props.image2.map((image, index) => {
                                    return (
                                        <View key={index} style={Styles.imageTouchableOpacity}>
                                                <AnimatedView key={index} image={image} values={123} /> 
                                                {/* <Image source={{ uri: image }} />  */}
                                        </View>    
                                    )
                                })}
                        </View>
                    </Card>
                    {this.props.image2.length > 1 ? 
                        <RButton name="Submit" onPress={() => this.handleIntelligentMac()} />
                        : null
                    }
                    

                    

                    {/* <DoubleTap onDoubleTap={this.toggleLike}>
                        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                    </DoubleTap> */}
                </View>
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: ProductAddScreenProps): ProductAddScreenProps => {
    var a: string[] = []
    console.log('----------raw----------')
    console.log(state.medicine.medicinePics)
    state.medicine.medicinePics.map(image => {
        a.push(image.image.toString())
    })
    console.log('---------lets see-----------')
    console.log(a)
    return {
        ...localProps,
        image2: a
        //[ "file:///var/mobile/Containers/Data/Application/A679248F-6D32-4552-BB8C-922FEC4EF740/Library/Caches/ExponentExperienceData/%2540anirupp%252Fmedi-share/ImagePicker/4E7DF888-F91D-4E2B-8010-7E1712AFDC85.jpg", "file:///var/mobile/Containers/Data/Application/A679248F-6D32-4552-BB8C-922FEC4EF740/Library/Caches/ExponentExperienceData/%2540anirupp%252Fmedi-share/ImagePicker/4E7DF888-F91D-4E2B-8010-7E1712AFDC85.jpg"]
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ProductsActionTypes>): ProductAddScreenDispatchProps => {
    return {
        addMedicinePics: (image: any) => dispatch(addMedicinePics(image.uri)),
        getMedicinePics: () => dispatch(getMedicinePics())
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductAddScreen)