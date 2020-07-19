import React, { Dispatch } from 'react'
import { ScrollView } from 'react-native'
import { RText } from '../../components/atoms'
import Styles from './styles'
import { SettingsScreenProps, SettingsScreenState, SettingsScreenDataProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { SettingsItem } from '../../components/molecules/settings-item/view'
import { AppActionTypes, AppState } from '../../store';
import { signOutUser } from '../../store/core/actions';
import { connect } from 'react-redux';

class SettingsScreen extends React.Component<SettingsScreenProps, SettingsScreenState> {
    constructor(props: SettingsScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.route.params.title))
    }

    profileNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate("profile")
    }

    configurationNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate("configuration")
    }

    privacyPolicyNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate("privacyPolicy")
    }

    termsOfServiceNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate("termsOfService")
    }

    aboutUsNavigationHandler = () => {
        // @ts-ignore
        // REASON: state picked up from redux
        this.props.navigation.navigate("aboutUs")
    }

    render(): React.ReactNode {
        return (
            <ScrollView style={Styles.screen}>
                <SettingsItem
                    value="Profile"
                    icon="idcard"
                    showNavigation={true}
                    onSelection={this.profileNavigationHandler}
                />
                <SettingsItem
                    value="Configuration"
                    icon="tool"
                    showNavigation={true}
                    onSelection={this.configurationNavigationHandler}
                />
                <SettingsItem
                    value="Privacy Policy"
                    icon="Safety"
                    showNavigation={true}
                    onSelection={this.privacyPolicyNavigationHandler}
                />
                <SettingsItem
                    value="Terms of Service"
                    icon="filetext1"
                    showNavigation={true}
                    onSelection={this.termsOfServiceNavigationHandler}
                />
                <SettingsItem
                    value="About Us"
                    icon="team"
                    showNavigation={true}
                    onSelection={this.aboutUsNavigationHandler}
                />
                <SettingsItem
                    value="Logout"
                    icon="logout"
                    showNavigation={false}
                    onSelection={this.props.signOut}
                />
            </ScrollView>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: SettingsScreenProps): {} => {
    return {}
}

const mapDispatchToProps = (dispatch: Dispatch<AppActionTypes>): SettingsScreenDataProps => {
    return {
        signOut: (value? : string) => dispatch(signOutUser())
    }
}

export default connect(mapStatetoProps, mapDispatchToProps) (SettingsScreen)
