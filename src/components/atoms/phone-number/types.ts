import { Country } from '../../../models'
import React from 'react';



export type PhoneNumberProps = {
    data: {
        phoneNumber: string
        country: Country
    },
    operations: {
        setCountry: (countryCode: string) => void
        setPhoneNumber: (phoneNumber: string) => void
    }
}

export type PhoneNumberState = {

}
