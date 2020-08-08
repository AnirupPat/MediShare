// import React, { Component, Dispatch } from 'react';
// import { StyleSheet, Text, View, Image } from 'react-native';
// import { GiftedChat } from 'react-native-gifted-chat';
// import { Dialogflow_V2 } from 'react-native-dialogflow';
// import { dialogflowConfig } from '../../../env';
// import { connect } from 'react-redux';
// import { CharBotScreenProps, CharBotScreenState, CharBotScreenDispatchProps } from './types'
// import { AppState, AppActionTypes } from '../../store';

// const BOT_USER = {
//     _id: 2,
//     name: 'FAQ Bot',
//     avatar: require('../../assets/images/MediShare_logo.png')
//   };
// class ChatBotScreen extends React.Component<CharBotScreenProps, CharBotScreenState> {
//   constructor(props: CharBotScreenProps) {
//     super(props)
//   }
//   state = {
//     messages: [
//       {
//         _id: 1,
//         text: `Hi! I am the MediShare Bot 🤖.\n\nWhat are you looking for ?`,
//         createdAt: new Date(),
//         user: BOT_USER
//       }
//     ]
//   };

//   componentDidMount = () => {
//     // Dialogflow_V2.setConfiguration(
//     //   dialogflowConfig.client_email,
//     //   dialogflowConfig.private_key,
//     //   Dialogflow_V2.LANG_ENGLISH_US,
//     //   dialogflowConfig.project_id
//     // );
//   }

//   onSend(messages: any) {
//     this.setState((previousState: any) => ({
//       messages: GiftedChat.append(previousState.messages, messages)
//     }));

//     let message = messages[0].text;
//     this.handleGoogleResponse(message)



//     // let message = messages[0].text;
//     // Dialogflow_V2.requestQuery(
//     //   message,
//     //   (result) => this.handleGoogleResponse(result),
//     //   (error) => console.log(error)
//     // );
//   }

//   handleGoogleResponse(result: any) {
//     let text = ""
//     if((result == 'Hello') || (result == 'Hello') ) {
//       text = 'Hello'+ ' '+ this.props.data.name
//       text+= `\n\n 1. Looking for meicines \n 2. Looking for Equipments. \n Enter the number and let us serve you !`
//     }

//     else if(result == '1') {
//       text = 'Routing you to the filters screen.. stay tuned !'
//     } else if(result == '2') {
//       text = 'Please specify the equipment that you are looking for ?'
//     }
//     this.sendBotResponse(text);


//     // let text = result.queryResult.fulfillmentMessages[0].text.text[0];
//     // this.sendBotResponse(text);
// }

// sendBotResponse(text: any) {
//     let msg = {
//       _id: this.state.messages.length + 1,
//       text,
//       createdAt: new Date(),
//       user: BOT_USER
//     };

//     this.setState((previousState: any) => ({
//       messages: GiftedChat.append(previousState.messages, [msg])
//     }));
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, backgroundColor: '#fff' }}>
//         <GiftedChat
//           messages={this.state.messages}
//           onSend={(messages: any) => this.onSend(messages)}
//           user={{
//             _id: 1
//           }}
//         />
//       </View>
//     );
//   }
// }

// const mapStatetoProps = (state: AppState, localProps: CharBotScreenProps): CharBotScreenProps => {
//   return {
//       ...localProps,
//       data: {
//         name: state.core.coreData.username
//       }
//   }
// }

// const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): CharBotScreenDispatchProps => {
//   return {
      
//   }
// }

// export default connect(mapStatetoProps, mapDispatchToProps)(ChatBotScreen);


import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  Dimensions,
  Animated,
  Platform,
} from 'react-native';
import { Icon } from 'native-base';
import { GiftedChat } from 'react-native-gifted-chat';
import Expo from 'expo';
import { connect } from 'react-redux';
// import {googleAuth} from 'google-oauth-jwt';

interface stateMan  {
  gifted: {
      _id: number,
      text: string,
      createdAt: any,
      user: {
        _id: number,
        name: string,
        avatar: string,
      },
    }[],
    answers: {}[],
    height: any
}


let window = Dimensions.get('window');
const contentHeight = window.height - 80;
const avatarBot = require('../../assets/images/MediShare_logo.png')
// "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg";

class ChatBotScreen extends React.Component<{}, stateMan> {
  static navigationOptions = {
    title: 'ChatBot'
  }
  keyboardDidShowListener: any;
  keyboardDidHideListener: any;

  constructor(props) {
    super(props);
    this.getDialogFlow = this.getDialogFlow.bind(this);
    this.state = { gifted: [], answers: [], height: contentHeight };
  }

  // componentDidMount () {
  //   this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
  //   this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
  // }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
    // Expo.Speech.stop();
  }

  _keyboardDidShow = (e) => {
    this.setState({ height: contentHeight - e.endCoordinates.height});
    // console.log(this.state.contentHeight, 'Keyboard Shown');
  }

  _keyboardDidHide = (e) => {
    this.setState({ height: contentHeight });
    // console.log(this.state.contentHeight, 'Keyboard Hidden');
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
    this.setState({
      gifted: [
        {
          _id: 1,
          text: 'Hi! Im MediShareBot! How can I help you!',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Botler',
            avatar: avatarBot,
          },
        },
      ],
    })
  }

  onSend(messages : any[]) {
    this.setState((previousState: any) => ({
      gifted: GiftedChat.append(previousState.gifted, messages),
    }))
    // this.generateAccessToken().then(token => {
    //   this.getDialogFlow(messages[0].text, token)
    // })

    this.getDialogFlow(messages[0].text)
    
  }

  // async generateAccessToken() {
  //    return new Promise((resolve) => {
  //     googleAuth.authenticate(
  //      {
  //       email: "dialogflow-eknvpt@medisharebot-jlkr.iam.gserviceaccount.com",
  //       key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCa12XouB+3ZD1G\nK6aFrVeorGZruI74NqTmPqnjzTTOE1GDM8tAszks/1BVEVBLtJ28k+bO688F5snN\nyQBvI+S+b05CvRgpTLp36O2PivWx2WNmyPrhXQUZ5ZrxcrSTs6Wj4goitaOBhlmX\n9rXSGTESIIfcgmE87V7546a970WfVd2SmxawHn6oEBcSpCV63L/l1tQXbx0/G2cr\nrjXwBCzXCmGFEH50k8Jc9+oapLurCOwMwpN7hJqTcaj9cE9G0cncKWNVcTTdNFB1\nszurv+9Hsm38h5Pbr6xSBcMCTt698rbeb3QOk1yoOERmPySmc0bAZPX67xReBvDQ\n8+0Mdy9PAgMBAAECggEAPGWGR6cCIAuGZweBtaSui4lrjdr4UVMnMPQCWmvhi/w3\nEEE0p7EAvU99KyFMu6rg1/ysy8to/flOf+lGNRPAFpPd5+RQN1PJbBo8B4CBY3TS\n8/Wy/hLFeZt4u3MtgmtRUcJKh81n0I7yBXdi5meTH2n29IkamqRQJpKoqG9bLdG5\nh74Gmlxy23nc0t97CoZD2WUMBFgyKecar1UGUeuQNWZsZDIcNhXIYb38lcXp6PsX\nBJdM6tGY0i7NxJDEILI/fEIAMPW2/8ZZ3CAt63WM9oXjPvav3vnXVX/CEG4cfVrm\nP7Co1HxnKDIG8E9Mbqg8ICm3l7dMevRDevR595GMcQKBgQDXP8Y3LX0rT9pTiLYE\ngNDrqZAR3QaJZ9LGu1h8Gi0IHuYb8y0+SsrB8i1FhEaEzb/xrYWbgnxaCM2EiSrO\nXlAbSFNdSFpVd4exsIWzSadLfIkSpvKPOAM38JMrovr2KlU+3Xcp8PXBQtWSGghh\n2AGa2z0PWi1rbEM+3s0XYMFluQKBgQC4J+n4WjDzclxRCTN620nnr91P60WhxSUR\nxzu96WjsP4BBvPcGcBY6hBB9l+pPWdCndJNokweYQrNx7CZAXs3FJSGUDohJdy+k\nqfpojQDpSxaDCH3JRFQnZV9T7Eos3FOJLsbptwPZLencSPeDGtPn1nnpcAwTVev4\nDheu/ABBRwKBgBGT+7P12wr2cnXv7C1h963HIyTST/5YpDXmhstbt+G55EDUExXL\nNdOw21GaA8hEpTAvY4HXniAcJ+xy5zQDL7eKqIQtrHLeWA6Cw+hoU2kuumLzj0ty\n35Bp7RrbLHN98Yg4vcqHCwrFUnuj9JtI8Jic3teqHZtwM+2mdEk8dY7BAoGAOrjv\nkLQh299htK18bvayMGER70QUpisZUPv4/uwI+xycp1m8Y58mV255W7MvkjIPqPYx\ncy0/RLwwQGmPIQOaFf1rIa0opFSPKrDRGrmryriY6xuwEJfrRcy7gyVb2cZAFQSH\nhUtIvN45LndOBc5uOAVaRqfmEdxaLHVB9BiDdE0CgYBjbU12NLWNmbD7Xxyh1Zb2\n6G/APvj8bqlz1cUQfL+p/ShYN8Y+COo2lXU65trYD1Hf1Fol8wAf1xGDLp/hqo7M\nj+VjW4V+9zh2x9fteaDSrJ9u5XS0NaMmqSeSh56qfo1PZYVvJFSptgnxPrDvdGbl\nKzXeyn/JGq46hraAJLpihw==\n-----END PRIVATE KEY-----\n",
  //       scopes: 'https://www.googleapis.com/auth/cloud-platform',
  //      },
  //      (err, token) => {
  //       resolve(token);
  //      },
  //     );
  //    });
  //   }

  async getDialogFlow(msg) {
    const ACCESS_TOKEN = '7861f6ede0edfdf56bc93a39040e34d774bc17b2';

    try {
       const response = await fetch(`https://bot.dialogflow.com/915bbe95-83e3-4e15-8ec4-916391c3e057`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify({
          query: msg,
          lang: 'en',
          sessionId: 'somerandomthing'
        })
      })
      let responseJson = await response.json();

      var imageUrl: any;

      responseJson.result.fulfillment.messages.map((item, i) => {
         if (item.payload !== undefined){
            if(item.payload.imageUrl !== undefined) {
              imageUrl = item.payload.imageUrl;
            }
        }
        return imageUrl
      })

      let answers = [
        {
          _id: responseJson.id,
          text: responseJson.result.fulfillment.speech,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Botler',
            avatar: avatarBot,
          },
          image: imageUrl,
          imageProps: {
             height: 200,
             width: 200
          }
        },
      ]

      Expo.Speech.stop()
      Expo.Speech.speak(responseJson.result.fulfillment.speech)

      this.setState((previousState: any) => ({
        gifted: GiftedChat.append(previousState.gifted, answers),
      }))

      return responseJson;

    } catch(error) {
      console.error(error);
    }
  }

  renderChat = () => {
    return(
        <GiftedChat
          textInputProps={{autoFocus: true}}
          messages={this.state.gifted}
          placeholder='Ask me anything...'
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
    );
  }

  render() {
    if(Platform.OS === 'ios'){
      return this.renderChat();
     }
    else{
       return(
        <View style={{ height: this.state.height }}>
           { this.renderChat() }
        </View>
      )
    }
  }
}

export default (ChatBotScreen)