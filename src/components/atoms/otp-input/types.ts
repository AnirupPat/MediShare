import { Country } from '../../../models'
import React from 'react';



export type OTPInputProps = {
    data: {
        otp: string
        inputHelperText: string
    },
    operations: {
        setOTP: (password: string) => void
    }
}

export type OTPInputState = { }
