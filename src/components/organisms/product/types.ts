import { Medicine } from "../../../models/medicines"

export type ProductProps = {
    data: Medicine,
    onPress: (selectedProduct: any) => void
    onClick: (id: string, value: boolean) => void
    onDelete: (id: any) => void
}

export type ProductState = { }