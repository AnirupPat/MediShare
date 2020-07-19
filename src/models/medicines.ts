export type Medicine = 
{
    "id": number,
    "fields": {
        "name": string,
        "InStockQty": number,
        "BlockedQty": number,
        "points": string[],
        "description": string,
        "price": number,
        "notes": string,
        "currency": string,
        "images": string[],
        "rating": number,
        "offer": number,
        "details": [
            "key:value",
            "key:value"
        ],
        "tags": string[],
        "category": number,
        "subcategory": string
    }
}