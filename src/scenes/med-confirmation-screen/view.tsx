import React from 'react'
import { View } from 'react-native'
import { RText } from '@virtuelabs-io/rapido-modules/src/components/atoms'
import Styles from './styles'
import { MedConfirmationScreenProps, MedConfirmationScreenState } from './types'
import { getStackStyles } from '../../commons/styles';
import { connect } from 'react-redux'
import { AppState } from '../../store'

class MedConfirmationScreen extends React.Component<MedConfirmationScreenProps, MedConfirmationScreenState> {
    constructor(props: MedConfirmationScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.data.title))
    }

    componentDidMount() {
        this.MedList();
    }

    MedList = () => {
        return fetch('https://medishare.azurewebsites.net/api/getmedicine?newMedicine=true')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <RText>{this.props.data.title}</RText>
            </View>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: MedConfirmationScreenProps): MedConfirmationScreenProps => {
    return {
        ...localProps,
        data: {
            title: state.core.rootStackParams.medicineStack.medConfirmation.title
        }
    }
}

export default connect(mapStatetoProps)(MedConfirmationScreen)