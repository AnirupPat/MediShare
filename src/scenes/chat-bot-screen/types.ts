import { StackScreenProps } from '@react-navigation/stack';
import { RequestStackNavigationParamsType } from '../../store/core/types'


export type CharBotScreenParamProps = StackScreenProps<RequestStackNavigationParamsType, 'chatbot'>

export type CharBotScreenState = { 
    // messages: [
    //     {
    //       _id: number,
    //       text: string,
    //       createdAt: any,
    //       user: {
    //         _id: number,
    //         name: string,
    //         avatar: string
    //       }
    //     }
    //   ]
}

export type CharBotScreenDispatchProps = {

}

export type CharBotScreenProps = CharBotScreenParamProps & CharBotScreenDispatchProps
