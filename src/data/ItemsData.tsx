export interface Item {
    itemId: number,
    name: string,
    article: string, 
    desc?: string, 
    categoryId: number[],
    materialId?: number[],
    seasonId?: number,
    colorId?: number[],
    styleId?: number[],
    country?: string,
    photos: string[]
}

export const items: Item[] = [
    {
        itemId: 0,
        name: "Скороходы нереальные",
        article: "53KSVGLJ452D",
        desc: "Ну что за тапочки?",
        categoryId: [2, 14],
        materialId: [5, 9],
        seasonId: 4,
        colorId: [13],
        styleId: [2],
        country: "Китай",
        photos: []
    },
    {
        itemId: 1,
        name: "mikal bordan sneakers",
        article: "GOH5O432NVDS",
        desc: "whaaataaaaaa heeeeeeeeeeeeeeeeeeeeeeeeeeeelll ououooooo",
        categoryId: [2, 11],
        materialId: [2],
        seasonId: 3,
        colorId: [2, 6],
        styleId: [3],
        country: "Китай",
        photos: []
    },
]
