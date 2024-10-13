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