// import React, { Dispatch, useCallback, useState, useEffect } from 'react'
// import { ScrollView, View, Dimensions, Text, FlatList, Button, Animated } from 'react-native'
// import Styles from './styles'
// import { CharBotScreenProps, CharBotScreenState, CharBotScreenDispatchProps } from './types'
// import { AppState, AppActionTypes } from '../../store';
// import { connect } from 'react-redux';
// import { getStackStyles } from '../../commons/styles/stack-style-constants';
// // import ChatBot from 'react-native-chatbot';
// import { GiftedChat } from 'react-native-gifted-chat';
// import { Dialogflow_V2 } from 'react-native-dialogflow';
// import { dialogflowConfig } from '../../../env';

// const BOT = {
//     _id: 11,
//     name: 'MediShare Bot',
//     avatar: require('../../assets/images/MediShare_logo.png')
// }

// const HUMAN_BOT = {
//     _id: 4,
//     name: 'Human Bot',
//     avatar: require('../../assets/images/MediShare_logo.png')
// }
// const messageQueue: {
//     text: string,
//     username: string
// }[] = []

// class ChatBotScreen extends React.Component<CharBotScreenProps> {
//     state = {
//         messages: [
//           {
//             _id: 1,
//             text: `Hi! I am the FAQ bot 🤖 from Jscrambler.\n\nHow may I help you with today?`,
//             createdAt: new Date(),
//             user: {
//               _id: 2,
//               name: 'FAQ Bot',
//               avatar: 'https://i.imgur.com/7k12EPD.png'
//             }
//           }
//         ]
//       };
//     constructor(props: CharBotScreenProps) {
//         super(props)
//         this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
        
//     }

//     componentDidMount() {
//         Dialogflow_V2.setConfiguration(
//             dialogflowConfig.client_email,
//             dialogflowConfig.private_key,
//             Dialogflow_V2.LANG_ENGLISH_US,
//             dialogflowConfig.project_id
//         );
//     }


//     onSend(messages = []) {
//         // this.setState(previousState => ({
//         //   messages: GiftedChat.append(previousState.messages, messages)
//         // }));
//       }

    


//     render(): React.ReactNode {

//         return (
//             <View style={{ flex: 1, backgroundColor: '#fff' }}>
//         <GiftedChat
//           messages={this.state.messages}
//         //   onSend={(messages: any) => this.onSend(messages)}
//           user={{
//             _id: 1
//           }}
//         />
//       </View>
//         )
//     }
// }

// const mapStatetoProps = (state: AppState, localProps: CharBotScreenProps): CharBotScreenProps => {
//     return {
//         ...localProps
//     }
// }

// const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): CharBotScreenDispatchProps => {
//     return {

//     }
// }

// export default connect(mapStatetoProps, mapDispatchToProps)(ChatBotScreen)


// App.js
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import { dialogflowConfig } from '../../../env';
import { connect } from 'react-redux';

const BOT_USER = {
    _id: 2,
    name: 'FAQ Bot',
    avatar: require('../../assets/images/MediShare_logo.png')
  };
class ChatBotScreen extends React.Component {
  
  state = {
    messages: [
      {
        _id: 1,
        text: `Hi! I am the MediSHare Bot 🤖.\n\nWhat are you looking for ?`,
        createdAt: new Date(),
        user: BOT_USER
      }
    ]
  };

  componentDidMount = () => {
    // Dialogflow_V2.setConfiguration(
    //   dialogflowConfig.client_email,
    //   dialogflowConfig.private_key,
    //   Dialogflow_V2.LANG_ENGLISH_US,
    //   dialogflowConfig.project_id
    // );
  }

  onSend(messages: any) {
    this.setState((previousState: any) => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));

    let message = messages[0].text;
    this.handleGoogleResponse('hello')
    // Dialogflow_V2.requestQuery(
    //   message,
    //   result => this.handleGoogleResponse(result),
    //   error => console.log(error)
    // );
  }

  handleGoogleResponse(result: any) {
    let text = 'Within what distance you are looking'//result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
}

sendBotResponse(text: any) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };

    this.setState((previousState: any) => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages: any) => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
      </View>
    );
  }
}

export default ChatBotScreen;