import adsn from 'src/assets/photos/adsn.png'
import nsn from 'src/assets/photos/nsn.jpg'
import bbs from 'src/assets/photos/bbs.png'
import psn from 'src/assets/photos/psn.jpg'

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
        name: "Ботинки черные кожаные",
        article: "53KSVGLJ452D",
        desc: "",
        categoryId: [2, 14],
        materialId: [5, 9],
        seasonId: 4,
        colorId: [13],
        styleId: [2],
        country: "Индонезия",
        photos: [bbs]
    },
    {
        itemId: 1,
        name: "Nike кроссовки",
        article: "GOH5O432NVDS",
        desc: "",
        categoryId: [2, 11],
        materialId: [2],
        seasonId: 3,
        colorId: [2, 6],
        styleId: [3],
        country: "Китай",
        photos: [nsn]
    },
    {
        itemId: 2,
        name: "Adidas кроссовки",
        article: "OU23UROU36DAFD",
        desc: "",
        categoryId: [2, 11],
        materialId: [2, 5],
        seasonId: 3,
        colorId: [2, 13],
        styleId: [3],
        country: "Индонезия",
        photos: [adsn]
    },
    {
        itemId: 3,
        name: "Куртка мужская стильная",
        article: "HJ2P54JPI63VD",
        desc: "",
        categoryId: [0, 3],
        materialId: [5, 10],
        seasonId: 3,
        colorId: [13],
        styleId: [1],
        country: "США",
        photos: []
    },
    {
        itemId: 4,
        name: "Куртка мужская милитари",
        article: "UFADUH51DFDGW",
        desc: "",
        categoryId: [0, 3],
        materialId: [7, 9],
        seasonId: 4,
        colorId: [4],
        styleId: [3],
        country: "Индонезия",
        photos: []
    },
    {
        itemId: 5,
        name: "Джинсы мужские",
        article: "FGP5P23EFC5NP1",
        desc: "",
        categoryId: [0, 4],
        materialId: [7, 11],
        seasonId: 1,
        colorId: [11],
        styleId: [1],
        country: "Китай",
        photos: []
    },
    {
        itemId: 6,
        name: "Puma кроссовки",
        article: "VD0545LDS",
        desc: "",
        categoryId: [2, 11],
        materialId: [2, 5],
        seasonId: 3,
        colorId: [2, 13],
        styleId: [3],
        country: "Индонезия",
        photos: [psn]
    },
]
