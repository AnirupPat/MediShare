export type Comment = {
    id: number
    commentedOn: string
    text: string
    commentedBy: string
}
export type OrderHeader = {
    orderId: number
    receiptEmail: string
    guest: boolean
    orderStatus: string
    orderPrice: number
    createdOn: string
    vat: number
    deliveryCost: number
    orderPriceTotal: number
    customerName: string
    addressType: number
    addr1: string
    addr2: string
    city: string
    county: string
    country: string
    postcode: string
    dueDate: string
    currency: string
    changedBy: string
    lastUpdatedOn: string
    assignedTo: string
    comments: Comment[]
}

export type OrderItemDetails = {
    orderId: number
    productId: number
    quantity: number
    unitPrice: number
    itemVat: number
    totalPrice: number
    itemName: string
}

export type OrderEvents = {
    id: number
    orderId: number
    eventDate: string
    prevStatus: string
    changedState: string
    changedBy: string
    comment: string
}
