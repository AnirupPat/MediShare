import { OrderItemDetails, OrderHeader } from "../../../models/orders"

export type DetailsProps = {
    data: {
        items: OrderItemDetails[]
        header: OrderHeader
        addCommentHandler: (selectedOrder: number) => void
    }
    onPress: (selectedOrder: any) => void
}

export type  DetailsState = {

}
