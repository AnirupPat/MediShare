import { OrderHeader, OrderItemDetails, OrderEvents } from "./orders"

export type DummyDataBarType = {
    id: number
    aggDay: string
    noOfOrders: number
}

export type DummyDataPieType = {
    size: string
    noOfOrders: number
}

export type DummyDataType = {
    barType: DummyDataBarType[]
    pieType: DummyDataPieType[]
    orderHeaderDetails: OrderHeader[]
    orderItemDetails: OrderItemDetails[]
    orderEvents: OrderEvents[]
}

export const DummyData: DummyDataType = {
    barType: require('../assets/data/bar-data.json'),
    pieType: require('../assets/data/pie-data.json'),
    orderHeaderDetails: require('../assets/data/orders-header.json'),
    orderItemDetails: require('../assets/data/order-items.json'),
    orderEvents: require('../assets/data/order-events.json')
}

