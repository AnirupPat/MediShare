import React, { Dispatch } from 'react'
import { View, TextInput, Text } from 'react-native'
import { RText } from '@virtuelabs-io/rapido-modules/src/components/atoms'
import Styles from './styles'
import { MedConfirmationScreenProps, MedConfirmationScreenState, MedConfirmationScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { connect } from 'react-redux'
import { AppState, AppActionTypes } from '../../store'
import { RButton } from '../../components/atoms'
import { MedConfirm } from '../../store/medicines/types'
import { setMedConfirm, ProductsActionTypes } from '../../store/medicines/actions'

var medObj = {
  "composition": "",
  "count": 0,
  "drugName": "",
  "expiry": "",
  "id": null,
  "indication": "",
  "mobileNumber": null,
}
class MedConfirmationScreen extends React.Component<MedConfirmationScreenProps, MedConfirmationScreenState> {
    constructor(props: MedConfirmationScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(this.props.data.title))
    }

    componentDidMount() {
        this.MedList();
    }

    medConfirm = () => {
        this.props.navigation.navigate("medicine", {
            title: 'Medicines'
        })
    }

    MedList = () => {
        return fetch('https://medishare.azurewebsites.net/api/getmedicine?newMedicine=true')
            .then((response) => response.json())
            .then((json) => {
                // console.log(json)
                // medObj = json
                this.props.setMedConfirm(json)
            })
            .catch((error) => {
                // console.error(error);
            });
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.passwordInputContainer}>
                <TextInput
                    style={Styles.passwordInputTextInput}
                    enablesReturnKeyAutomatically={true}
                    keyboardType="default"
                    value={this.props.data.medConfirm.drugName}
                    returnKeyType="next"
                />
                <Text style={Styles.inputHelpText}>Drug Name</Text>

                <TextInput
                    style={Styles.passwordInputTextInput}
                    enablesReturnKeyAutomatically={true}
                    value={this.props.data.medConfirm.composition}
                    keyboardType="default"
                    returnKeyType="next"
                />
                <Text style={Styles.inputHelpText}>Composition</Text>

                <TextInput
                    style={Styles.passwordInputTextInput}
                    enablesReturnKeyAutomatically={true}
                    value={this.props.data.medConfirm.expiry}
                    keyboardType="default"
                    returnKeyType="next"
                />
                <Text style={Styles.inputHelpText}>Expiry</Text>

                <TextInput
                    style={Styles.passwordInputTextInput}
                    enablesReturnKeyAutomatically={true}
                    value={this.props.data.medConfirm.indication}
                    keyboardType="default"
                    returnKeyType="next"
                />
                <Text style={Styles.inputHelpText}>Indication</Text>

                <RButton name="Submit" onPress={() => this.medConfirm()} />
            </View>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: MedConfirmationScreenProps): MedConfirmationScreenProps => {
    // console.log('----------lets see')
    // console.log(state.medicine.MedConfirm) 
    return {
        ...localProps,
        data: {
            title: state.core.rootStackParams.medicineStack.medConfirmation.title,
            medConfirm: 
             state.medicine.MedConfirm != undefined ? state.medicine.MedConfirm : 
            {
                "composition": "Paracetamol(650mg)",
  "count": 10,
  "drugName": "Dolo 650",
  "expiry": "2021-01-01T00:00:00",
  "id": null,
  "indication": "Fever",
  "mobileNumber": null,
            }
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ProductsActionTypes>): MedConfirmationScreenDispatchProps => {
    return {
        setMedConfirm: (medConfirm: MedConfirm) => dispatch(setMedConfirm(medConfirm)),
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(MedConfirmationScreen)