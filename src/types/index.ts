import {z} from "zod"
import {CategoriesApiResponseSchema} from "../schema/recipiesSchema"

export type Categories = z.infer<typeof CategoriesApiResponseSchema>