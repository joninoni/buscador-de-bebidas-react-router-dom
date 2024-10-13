import {z} from "zod"
import {CategoriesApiResponseSchema, SearchFilterSchema} from "../schema/recipiesSchema"

//type para las categorias
export type Categories = z.infer<typeof CategoriesApiResponseSchema>

//type para la busqueda en base a categoria y bebida
export type SearchFliter = z.infer<typeof SearchFilterSchema>