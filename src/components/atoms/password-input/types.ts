import { Country } from '../../../models'
import React from 'react';



export type PasswordInputProps = {
    data: {
        password: string
        inputHelperText: string
    },
    operations: {
        setPassword: (password: string) => void
    }
}

export type PasswordInputState = {

}
