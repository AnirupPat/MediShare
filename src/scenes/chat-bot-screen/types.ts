import { StackScreenProps } from '@react-navigation/stack';
import { RequestStackNavigationParamsType } from '../../store/core/types'


export type CharBotScreenParamProps = StackScreenProps<RequestStackNavigationParamsType, 'chatbot'>

export type CharBotScreenState = { }

export type CharBotScreenDispatchProps = {

}

export type CharBotScreenProps = CharBotScreenParamProps & CharBotScreenDispatchProps
