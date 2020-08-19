import React, { Dispatch } from 'react';
import { View, Text, ScrollView, KeyboardAvoidingView, Button } from 'react-native';
import { Card, PhoneNumber, PasswordInput, RButton, RHeadingText, RText, Logo } from '../../components/atoms';
import { RegisterScreenProps, RegisterScreenState, RegisterDetailsDispatchProps } from './types'
import { connect } from 'react-redux';
import { AppState, AppActionTypes } from '../../store';
import { signInUser, setCountry, setPhoneNumber, setPassword, signOutUser, GeoLocation, LocationVal } from '../../store/core/actions';
import Styles from './styles';
import { getStackStyles } from '../../commons/styles/stack-style-constants';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const EXAMPLES = { latitude: 20.2400237, longitude: 85.799339 };

class RegisterScreen extends React.Component<RegisterScreenProps, RegisterScreenState> {
    constructor(props: RegisterScreenProps) {
        super(props)
        this.state = {
            selectedExample: {
                latitude: this.props.data.latitude,
                longitude: this.props.data.longitude
            },
            result: '',
            inProgress: false,
        };
        this.props.navigation.setOptions(getStackStyles(this.props.route.name))
    }

    componentDidMount() {
        this.getPermissionAsync()
    }

    getPermissionAsync = async () => {
        // Constants.platform?.ios
        if (Constants.platform?.ios) {
            const { status } = await Permissions.askAsync(Permissions.LOCATION);
            // Location.requestPermissionsAsync();
            if (status !== 'granted') {
                // console.log('Permission to access location was denied');
            }
            let location = await Location.getCurrentPositionAsync({});
             this._attemptReverseGeocodeAsync(location.coords.latitude, location.coords.longitude)

        }
    }

    _attemptReverseGeocodeAsync = async (lat: number, lon: number) => {
        this.setState({
            selectedExample: {
                latitude: lat,
                longitude: lon
            },
            result: '',
            inProgress: false
        })
        this.setState({ inProgress: true });
        try {
            let result = await Location.reverseGeocodeAsync(
                this.state.selectedExample
            );
            // console.log('Result is ')
            // console.log(result)
            this.props.setGeoLocation(lat, lon)
            this.props.setLocation(result[0].city)
        } catch (e) {
            // console.log(e)
        } finally {
            this.setState({ inProgress: false });
        }
    };

    resetCodeScreenNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate("resetCode")
    }

    handleVerifyUser = () => {
        this.props.signInUser
        this.props.navigation.navigate("verifyCode", {
            title: 'Verify Code'
        })
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
                        <RButton name="Proceed" onPress={this.handleVerifyUser} />
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
            password: state.core.coreData.password,
            location: state.core.coreData.location,
            latitude: state.core.coreData.latitude,
            longitude: state.core.coreData.longitude
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): RegisterDetailsDispatchProps => {
    return {
        signInUser: () => dispatch(signInUser()),
        setCountry: (countryCode: string) => dispatch(setCountry(countryCode)),
        setPhoneNumber: (phoneNumber: string) => dispatch(setPhoneNumber(phoneNumber)),
        setPassword: (password: string) => dispatch(setPassword(password)),
        setGeoLocation: (latitude: number, longitude: number) => dispatch(GeoLocation(latitude, longitude)),
        setLocation: (location: string) => dispatch(LocationVal(location))
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(RegisterScreen)