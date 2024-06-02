import adsn1 from 'src/assets/photos/adsn1.webp'
import adsn2 from 'src/assets/photos/adsn2.webp'
import adsn3 from 'src/assets/photos/adsn3.webp'

import nsn1 from 'src/assets/photos/nsn1.webp'
import nsn2 from 'src/assets/photos/nsn2.webp'
import nsn3 from 'src/assets/photos/nsn3.webp'

import psn1 from 'src/assets/photos/psn1.webp'
import psn2 from 'src/assets/photos/psn2.webp'
import psn3 from 'src/assets/photos/psn3.webp'





import bbs from 'src/assets/photos/bbs.png'

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
    photos: string[],
    price: number,
    discount?: number,
    availability: number,
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
        photos: [bbs],
        price: 7850,
        availability: 1
    },
    {
        itemId: 1,
        name: "Nike кроссовки Venture Runner",
        article: "GOH5O432NVDS",
        desc: "",
        categoryId: [2, 11],
        materialId: [2, 5, 17],
        seasonId: 1,
        colorId: [13],
        styleId: [3],
        country: "Китай",
        photos: [nsn1, nsn2, nsn3],
        price: 11290,
        discount: 0.25,
        availability: 3
    },
    {
        itemId: 2,
        name: "adidas Originals кеды GAZELLE",
        article: "OU23UROU36DAFD",
        desc: "",
        categoryId: [2, 11],
        materialId: [5],
        seasonId: 3,
        colorId: [11],
        styleId: [1],
        country: "Индонезия",
        photos: [adsn1, adsn2, adsn3],
        price: 15299,
        availability: 2
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
        photos: [],
        price: 5199,
        availability: 1
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
        photos: [],
        price: 3400,
        availability: 6,
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
        photos: [],
        price: 2990,
        availability: 7
    },
    {
        itemId: 6,
        name: "Puma кроссовки",
        article: "VD0545LDS",
        desc: "",
        categoryId: [2, 11],
        materialId: [2, 5],
        seasonId: 3,
        colorId: [2],
        styleId: [3],
        country: "Вьетнам",
        photos: [psn1, psn2, psn3],
        price: 6399,
        availability: 9
    },
]
