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
import { FontAwesome, Entypo } from '@expo/vector-icons';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as jpeg from 'jpeg-js'
import * as tf from '@tensorflow/tfjs'
import { fetch } from '@tensorflow/tfjs-react-native'
const cocoSsd = require('@tensorflow-models/coco-ssd'); 

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
        image: null,
        isTfReady: false,
        isModelReady: false,
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
            // console.log(E);
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

        if (status.status !== 'granted' && status2.status !== 'granted') {

        } else {
            let image = await ImagePicker.launchCameraAsync();
            if (!image.cancelled) {
                this.setState({ image: image.uri });
                this.classifyImage(image)
            }
            this.props.addMedicinePics(image)
        }
    };


imageToTensor(rawImageData) {
    const TO_UINT8ARRAY: any = true
    const { width, height, data } = jpeg.decode(rawImageData, TO_UINT8ARRAY)
    // Drop the alpha channel info for mobilenet
    const buffer = new Uint8Array(width * height * 3)
    let offset = 0 // offset into original data
    for (let i = 0; i < buffer.length; i += 3) {
      buffer[i] = data[offset]
      buffer[i + 1] = data[offset + 1]
      buffer[i + 2] = data[offset + 2]

      offset += 4
    }

    return tf.tensor3d(buffer, [height, width, 3])
  }

    classifyImage = async (image) => {
        try {
          const imageAssetPath = Image.resolveAssetSource(image)
          const response = await fetch(imageAssetPath.uri, {}, { isBinary: true })
          const rawImageData = await response.arrayBuffer()
          const imageTensor = this.imageToTensor(rawImageData)
          var model = await mobilenet.load()
          const predictions = await model.classify(imageTensor)
          this.setState({ predictions })
          console.log(predictions)
        } catch (error) {
          console.log(error)
        }
      }

    async componentDidMount() {
        await tf.ready(); // preparing TensorFlow
        this.setState({ isTfReady: true});    
        var model = await cocoSsd.load(); // preparing COCO-SSD model
        this.setState({ isModelReady: true }); 
        this.props.getMedicinePics()
        this.getPermissionAsync()
    }

    handlerLongClick = (image: any, index: any) => {
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
                Animated.timing(this.animatedValue, { toValue: 1.0, duration: 150, easing: Easing.linear, useNativeDriver: true }),
                // rotate in other direction, to minimum value (= twice the duration of above)
                Animated.timing(this.animatedValue, { toValue: -1.0, duration: 300, easing: Easing.linear, useNativeDriver: true }),
                // return to begin position
                Animated.timing(this.animatedValue, { toValue: 0.0, duration: 150, easing: Easing.linear, useNativeDriver: true })
            ]), {
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
                            <TouchableOpacity style={Styles.iconCamera} onPress={this._cameraImage}>
                                <FontAwesome name="camera" size={40} color="black" />
                            </TouchableOpacity>


                            <TouchableOpacity style={Styles.iconGallery} onPress={this._pickImage}>
                                <Entypo name="folder-images" size={40} color="black" />
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
                    <Text style={Styles.hintFont}>** Add images of both sides of the medicine and
                    let the Dawaai AI detect the Medicine details for you</Text>
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
    state.medicine.medicinePics.map(image => {
        if (image.image)
            a.push(image.image.toString())
    })

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