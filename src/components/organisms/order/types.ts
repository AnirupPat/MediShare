import { OrderHeader } from "../../../models/orders"

export type OrderProps = {
    data: OrderHeader,
    onPress: (selectedOrder: any) => void
}

export type OrderState = { }
