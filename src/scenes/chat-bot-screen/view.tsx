import React, { Dispatch, useCallback, useState, useEffect } from 'react'
import { ScrollView, View, Dimensions, Text, FlatList, Button, Animated } from 'react-native'
import Styles from './styles'
import { CharBotScreenProps, CharBotScreenState, CharBotScreenDispatchProps } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
// import ChatBot from 'react-native-chatbot';
import { GiftedChat } from 'react-native-gifted-chat';



class ChatBotScreen extends React.Component<CharBotScreenProps, CharBotScreenState> {

    constructor(props: CharBotScreenProps, state: CharBotScreenState) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
        this.state = {
            messages: [
                {
                    _id: 1,
                    text: `Hi! I am the MediShare Bot. How can I help you today ?`,
                    createdAt: new Date(),
                    user: {
                        _id: 11,
                        name: 'MediShare Bot',
                        avatar: require('../../assets/images/MediShare_logo.png')
                    }
                }
            ]
        }
    }


    onSend = (messages: any) => {
        console.log('---------------------------')
        GiftedChat.append(this.state.messages, messages)
        
        this.setState({
            messages: messages.concat(this.state.messages)
        })
    }


    render(): React.ReactNode {

        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(messages: any) => this.onSend(messages)}
                user={{
                    _id: 4,
                    name: 'Anirup'
                }}
            />
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