import React, { Dispatch } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Button } from 'react-native';
import { Card, PhoneNumber, PasswordInput, RButton, RHeadingText, RText, Logo } from '../../components/atoms';
import { RegisterScreenProps, RegisterScreenState, RegisterDetailsDispatchProps } from './types'
import { connect } from 'react-redux';
import { AppState, AppActionTypes } from '../../store';
import { signInUser, setCountry, setPhoneNumber, setPassword, signOutUser } from '../../store/core/actions';
import Styles from './styles';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import Geolocation from 'react-native-geolocation-service';
import * as Permissions from 'expo-permissions';

const EXAMPLES = { latitude: 20.241189949999992, longitude: 85.80121611999998 };

class RegisterScreen extends React.Component<RegisterScreenProps, RegisterScreenState> {
    constructor(props: RegisterScreenProps) {
        super(props)
        this.state = {
            selectedExample: {
                latitude: EXAMPLES.latitude,
                longitude: EXAMPLES.longitude
            },
            result: '',
            inProgress: false,
        };
        this.props.navigation.setOptions(getStackStyles(this.props.route.name))
    }

    componentDidMount() {
        console.log(this.state.selectedExample);
        this.getPermissionAsync()
    }

    getPermissionAsync = async () => {
        // Constants.platform?.ios
        if (Constants.platform?.ios) {
            const { status } = await Permissions.askAsync(Permissions.LOCATION);
            // Location.requestPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
            }
            let location = await Location.getCurrentPositionAsync({});
            console.log(location)

             this._attemptReverseGeocodeAsync()

        }
    }

    _attemptReverseGeocodeAsync = async () => {
        this.setState({ inProgress: true });
        try {
            let result = await Location.reverseGeocodeAsync(
                this.state.selectedExample
            );
            console.log('Result is ')
            console.log(result)
        } catch (e) {
            console.log(e)
        } finally {
            this.setState({ inProgress: false });
        }
    };

    dashboardStackNavigationHandler = () => {
        // console.log("dashboardStackNavigationHandler Handled!")
    }

    resetCodeScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate("resetCode")
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>

                <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                    <Card>
                        <PhoneNumber
                            data={{
                                country: this.props.data.country,
                                phoneNumber: this.props.data.phoneNumber
                            }}
                            operations={{
                                setCountry: this.props.setCountry,
                                setPhoneNumber: this.props.setPhoneNumber
                            }}
                        />
                        <PasswordInput
                            data={{
                                password: this.props.data.password,
                                inputHelperText: "Enter your Password"
                            }}
                            operations={{
                                setPassword: this.props.setPassword
                            }}
                        />
                        <PasswordInput
                            data={{
                                password: this.props.data.password,
                                inputHelperText: "Re enter your Password"
                            }}
                            operations={{
                                setPassword: this.props.setPassword
                            }}
                        />
                        <RButton name={this.props.route.name} onPress={this.props.signInUser} />

                    </Card>
                </KeyboardAvoidingView>

            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: RegisterScreenProps): RegisterScreenProps => {
    return {
        ...localProps,
        data: {
            country: state.core.coreData.country,
            phoneNumber: state.core.coreData.phoneNumber,
            password: state.core.coreData.password
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): RegisterDetailsDispatchProps => {
    return {
        signInUser: () => dispatch(signInUser()),
        setCountry: (countryCode: string) => dispatch(setCountry(countryCode)),
        setPhoneNumber: (phoneNumber: string) => dispatch(setPhoneNumber(phoneNumber)),
        setPassword: (password: string) => dispatch(setPassword(password))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(RegisterScreen)