export interface Category {
    categoryId: number
    subCategories?: Category[]
    title: string
}

export const categories: Category[] = [
    {
        categoryId: 0,
        title: "Мужская одежда",
        subCategories: [
            {
                categoryId: 3,
                subCategories: undefined,
                title: "Верхняя одежда"
            },
            {
                categoryId: 4,
                subCategories: undefined,
                title: "Штаны и брюки"
            },
            {
                categoryId: 5,
                subCategories: undefined,
                title: "Футболки",
            },
            {
                categoryId: 6,
                subCategories: undefined,
                title: "Олимпийки и свитшоты",
            },
        ]
    },
    {
        categoryId: 1,
        title: "Женская одежда",
        subCategories: [
            {
                categoryId: 7,
                subCategories: undefined,
                title: "Верхняя одежда"
            },
            {
                categoryId: 8,
                subCategories: undefined,
                title: "Штаны и брюки"
            },
            {
                categoryId: 9,
                subCategories: undefined,
                title: "Футболки",
            },
            {
                categoryId: 10,
                subCategories: undefined,
                title: "Платья",
            },
        ]
    },
    {
        categoryId: 2,
        
        title: "Обувь",
        subCategories: [
            {
                categoryId: 11,
                subCategories: undefined,
                title: "Кроссовки и кеды"
            },
            {
                categoryId: 12,
                subCategories: undefined,
                title: "Сапоги"
            },
            {
                categoryId: 13,
                subCategories: undefined,
                title: "Туфли",
            },
            {
                categoryId: 14,
                subCategories: undefined,
                title: "Ботинки",
            },
        ]
    },
]