import React, { Dispatch } from 'react'
import { ScrollView, View, Dimensions, Text, FlatList, Button, Animated } from 'react-native'
import Styles from './styles'
import { NotifListnerScreenProps, NotifListnerScreenState, NotifListnerScreenDispatchProps } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { RText, RButton } from '../../components/atoms';
import { getStackStyles } from '../../commons/styles';

const { height } = Dimensions.get("window");
const _draggedValue = new Animated.Value(180);
class NotifListnerScreen extends React.Component<NotifListnerScreenProps, NotifListnerScreenState> {
    constructor(props: NotifListnerScreenProps, state: NotifListnerScreenState) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    handleMedReview = () => {
        console.log('---clicked ---')
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <RText>One or more meds in your pill box are expiring soon. Please review to take action</RText>
                <RButton name='Review' onPress={() => this.handleMedReview()} />
            </View>

        )
    }
}

const mapStatetoProps = (state: AppState, localProps: NotifListnerScreenProps): NotifListnerScreenProps => {
    return {
        ...localProps,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): NotifListnerScreenDispatchProps => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(NotifListnerScreen)