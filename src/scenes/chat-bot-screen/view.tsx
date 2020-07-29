import React, { Dispatch } from 'react'
import { ScrollView, View, Dimensions, Text, FlatList, Button, Animated } from 'react-native'
import Styles from './styles'
import { CharBotScreenProps, CharBotScreenState, CharBotScreenDispatchProps } from './types'
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
class ChatBotScreen extends React.Component<CharBotScreenProps, CharBotScreenState> {
    _panel: SlidingUpPanel | null = null;

    constructor(props: CharBotScreenProps, state: CharBotScreenState) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <Text>ChatBot !</Text>
            </View>

        )
    }
}

const mapStatetoProps = (state: AppState, localProps: CharBotScreenProps): CharBotScreenProps => {
    return {
        ...localProps
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): CharBotScreenDispatchProps => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(ChatBotScreen)