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


const { width, height } = Dimensions.get('screen');
const images = [
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
        // this.props.navigation.setOptions(getStackStyles(
        //     this.props.route.params.title
        // ))
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
        }
    };

    componentDidMount() {
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


    render(): React.ReactNode {
        let { image } = this.state;
        return (
            <ScrollView style={Styles.screen}>
                <View>
                    {/* <MultiLineInput 
                    value=""
                    placeHolder="Product Title"
                    numberOfLines={0}
                    onChange={() => console.log('Prouduct Title Added')} /> */}

                    <TextInput
                        style={Styles.input}
                        placeholder="Product Title"
                        multiline={true}
                        onChangeText={() => console.log('Prouduct Title Added')} />

                    <TextInput
                        style={Styles.input}
                        placeholder="Product Description"
                        multiline={true}
                        onChangeText={() => console.log('Prouduct Desc Added')} />


                    <Card>
                        <Text style={Styles.pointsTitle}>Pricing Details</Text>
                        <View style={Styles.cardPrice}>
                            <Text style={Styles.priceLabel}>Currency</Text>
                            <TextInput
                                style={Styles.inputPrice}
                                placeholder="Currency" />
                        </View>
                        <View style={Styles.cardPrice}>
                            <Text style={Styles.priceLabel}>MRP</Text>
                            <TextInput
                                style={Styles.inputPrice}
                                placeholder="MRP" />
                        </View>
                        <View style={Styles.cardPrice}>
                            <Text style={Styles.priceLabel}>Price</Text>
                            <TextInput
                                style={Styles.inputPrice}
                                placeholder="Price" />
                        </View>
                        <View style={Styles.cardPrice}>
                            <Text style={Styles.priceLabel}>Discount %</Text>
                            <TextInput
                                style={Styles.inputPrice}
                                placeholder="Discount" />
                        </View>
                    </Card>

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
                            {images.map((image, index) => {
                                return (
                                    <View style={Styles.imageTouchableOpacity}>
                                        {/* <TouchableOpacity
                                        onLongPress={() => this.handlerLongClick(image, index)}
                                        activeOpacity={0.6}> */}


                                        
                                            <AnimatedView key={index} image={image} values={123} />

                                         {/* <Animated.Image 
                                            key={index} 
                                            // resizeMode='contain'
                                            source={{ uri: image }} 
                                            style={[
                                                Styles.image,{
                                                transform: [{
                                                  rotate: this.animatedValue.interpolate({
                                                    inputRange: [-1, 1],
                                                    outputRange: ['-0.1rad', '0.1rad']
                                                  })
                                                }]
                                              }]
                                              } />  */}



                                    {/* </TouchableOpacity> */}
                                    </View>    

                                )
                            })}
                        </View>
                    </Card>





                    <DoubleTap onDoubleTap={this.toggleLike}>
                        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                    </DoubleTap>



                </View>
            </ScrollView>
        )
    }
}







const mapStatetoProps = (state: AppState, localProps: ProductAddScreenProps): ProductAddScreenProps => {

    return {
        ...localProps
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): ProductAddScreenDispatchProps => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ProductAddScreen)