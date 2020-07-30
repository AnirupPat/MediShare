import React, { Dispatch, useCallback, useState, useEffect } from 'react'
import { ScrollView, View, Dimensions, Text, FlatList, Button, Animated } from 'react-native'
import Styles from './styles'
import { CharBotScreenProps, CharBotScreenState, CharBotScreenDispatchProps } from './types'
import { AppState, AppActionTypes } from '../../store';
import { connect } from 'react-redux';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
// import ChatBot from 'react-native-chatbot';
import { GiftedChat } from 'react-native-gifted-chat';

const BOT = {
    _id: 11,
    name: 'MediShare Bot',
    avatar: require('../../assets/images/MediShare_logo.png')
}

const HUMAN_BOT = {
    _id: 4,
    name: 'Human Bot',
    avatar: require('../../assets/images/MediShare_logo.png')
}
const messageQueue: {
    text: string,
    username: string
}[] = []

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
                    user: BOT
                }
            ]
        }
        // messageQueue.push({
        //     text: 'Hi! I am the MediShare Bot. How can I help you today ?',
        //     username: 'Medishare BOT'
        // }) 
    }


    onSend = (messages: any) => {
        GiftedChat.append(this.state.messages, messages)
        
        // this.setState({
        //     messages: messages.concat(this.state.messages)
        // })
        messageQueue.push({
            text: messages[0].text,
            username: 'Human BOT'
        }) 
        this.sendBotResponse(messages);
    }

    sendBotResponse = (messages: any) => {
        console.log('Bot trigerred !!')
        
        console.log("--------------------------------")
        // console.log(messageQueue)
        
        console.log(this.state.messages)
        messageQueue.forEach((element, index) => {
            this.state.messages.unshift({
                _id: this.state.messages.length + 1,
                text: element.text,
                createdAt: new Date(),
                user: element.username === 'Medishare BOT' ? BOT : HUMAN_BOT
            })
            
        });
        console.log('----lets watch state------')
        console.log(this.state.messages)
        

        



        
        
        
    }


    render(): React.ReactNode {

        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(messages: any) => this.onSend(messages)}
                user={HUMAN_BOT}
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