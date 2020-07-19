import { ProductHeader } from "../../../models/products"

export type ProductProps = {
    data: ProductHeader,
    onPress: (selectedProduct: any) => void
}

export type ProductState = { }