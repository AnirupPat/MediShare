import React, { Dispatch } from 'react'
import { ScrollView, View, Dimensions, Text, FlatList, Button, Animated } from 'react-native'
import Styles from './styles'
import { CharBotScreenProps, CharBotScreenState, CharBotScreenDispatchProps } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
import ChatBot from 'react-native-chatbot';

const steps = [
    {
      id: '0',
      message: 'Welcome to react chatbot!',
      trigger: '1',
    },
    {
      id: '1',
      message: 'Bye!',
      end: true,
    },
  ];
class ChatBotScreen extends React.Component<CharBotScreenProps, CharBotScreenState> {

    constructor(props: CharBotScreenProps, state: CharBotScreenState) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    render(): React.ReactNode {
        return (
            <ChatBot steps={steps} />
            

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