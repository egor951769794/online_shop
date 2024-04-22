export interface Item {
    itemId: number,
    name: string,
    article: string, 
    desc?: string, 
    categoryId: number,
    material?: {id: number, value: string}[],
    season?: {id: number, value: string},
    color?: {id: number, value: string}[],
    sport?: {id: number, value: string},
    country?: string,
    brand?: {id: number, value: string}
    photos: string[]
}

export const items: Item[] = [
    {
        itemId: 0,
        name: "Скороходы нереальные",
        article: "53KSVGLJ452D",
        desc: "Ну что за тапочки?",
        categoryId: 14,
        material: [{id: 10, value: "Кожа"}],
        photos: []
    },
]