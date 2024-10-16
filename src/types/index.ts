import { z } from "zod"
import { CategoriesApiResponseSchema, DrinkApiResponseSchema, DrinksApiResponseSchema, SearchFilterSchema } from "../schema/recipiesSchema"

//type para las categorias
export type Categories = z.infer<typeof CategoriesApiResponseSchema>

//type para la busqueda en base a categoria y bebida
export type SearchFliter = z.infer<typeof SearchFilterSchema>

//type para validar la respuesta de la api al obtener las categorias
export type Drinks = z.infer<typeof DrinksApiResponseSchema>

//type para validar la bebida en DrinkCard
export type Drink =z.infer<typeof DrinkApiResponseSchema>