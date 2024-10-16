import {z} from "zod"

//schema para las categorias
export const CategoriesApiResponseSchema = z.object({
    drinks : z.array(
        z.object({
            strCategory : z.string()
        })
    )
})

//schema para la busqueda en base a la categoria y bebida
export const SearchFilterSchema = z.object({
    ingredient: z.string(),
    category: z.string(),
})

//schema para validar las bebidas que se usaran para renderizar en DrinkCard
export const DrinkApiResponseSchema = z.object({
    idDrink : z.string(),
    strDrink : z.string(),
    strDrinkThumb : z.string()
})

//schema vara validar la respuesta de las categorias de la api
export const DrinksApiResponseSchema = z.object({
    drinks : z.array(DrinkApiResponseSchema)
})