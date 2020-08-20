import { Medicine } from "../../../models/medicines"

export type ProductProps = {
    data: Medicine,
    onPress: (selectedProduct: any) => void
    onClick: (id: string, value: boolean) => void
}

export type ProductState = { }