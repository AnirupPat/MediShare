import React, { Dispatch } from 'react'
import { View, FlatList } from 'react-native'
import { RText, RButton } from '../../components/atoms'
import Styles from './styles'
import { NGORequestScreenProps, NGORequestScreenState, NGORequestScreenDispatchProps } from './types'
import { getStackStyles } from '../../commons/styles';
import { RTitleText } from '@virtuelabs-io/rapido-modules/src/components/atoms'
import { ProductsActionTypes } from '../../store/medicines/actions'
import { connect } from 'react-redux'
import { AppState } from '../../store'
import { Colors } from '@virtuelabs-io/rapido-modules/src/commons/styles/colors';
import { MaterialIcons, FontAwesome, FontAwesome5, AntDesign, Entypo } from '@expo/vector-icons';

class NGORequestScreen extends React.Component<NGORequestScreenProps, NGORequestScreenState> {
    constructor(props: NGORequestScreenProps) {
        super(props)
        this.props.navigation.setOptions(getStackStyles(''))
    }

    handleBack = () => {
        this.props.navigation.navigate("medicine", {
            title: "My Pillbox"
        })
    }

    render(): React.ReactNode {
        return (
            <View style={Styles.screen}>
                <View style={Styles.thanksBox}>
                    <RTitleText>Don't turn away, Give today!</RTitleText>
                    </View>    
                    <RText>We are organizing a medical camp for women on 25th Oct 2020.</RText>
                    <View style={Styles.thanksBox}>
                    <RText>You can help us by donating the below meds:</RText>
                    </View>
                    
                
                <FlatList
                    style={{ marginBottom: '10%' }}
                    keyExtractor={item => item.id.toString()}
                    data={this.props.data}
                    // ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={(product) =>
                        <View style={Styles.donatedMeds}>
                            <View style={Styles.medName}>
                                {/* <AntDesign style={{ marginRight: '5%' }} name="medicinebox" size={30} color={Colors.primary} /> */}
                                <Entypo style={{ marginRight: '5%' }} name="dot-single" size={30} olor={Colors.primary} />
                                <RText>{product.item.medName}</RText>
                            </View>

                        </View>
                    }
                />

                <RButton name="Back to Pillbox" onPress={() => this.handleBack()} />



            </View>
        )
    }
}

const mapStatetoProps = (state: AppState, localProps: NGORequestScreenProps): NGORequestScreenProps => {
    return {
        ...localProps,
        data: [
            {
                "medName": 'Folic Acid',
                id: '001'
            }, {
                "medName": 'Multivitamins',
                id: '002'
            }, {
                "medName": 'Iron',
                id: '003'
            }, {
                "medName": 'Calcium',
                id: '004'
            }, {
                "medName": 'Thyroid Medicines',
                id: '005'
            }, {
                "medName": 'Analgesics',
                id: '006'
            }, {
                "medName": 'Antibiotics',
                id: '007'
            }
        ]
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ProductsActionTypes>): NGORequestScreenDispatchProps => {
    return {

    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(NGORequestScreen)