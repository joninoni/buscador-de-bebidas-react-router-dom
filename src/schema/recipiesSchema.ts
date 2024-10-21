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

//schema que valida la receta que se quiere visualizar
export const RecipeAPIResponseSchema = z.object({
    idDrink: z.string(),
    strDrink: z.string(),
    strDrinkThumb: z.string(),
    strInstructions: z.string(),
    strIngredient1: z.string().nullable(),
    strIngredient2: z.string().nullable(),
    strIngredient3: z.string().nullable(),
    strIngredient4: z.string().nullable(),
    strIngredient5: z.string().nullable(),
    strIngredient6: z.string().nullable(),
    strMeasure1: z.string().nullable(),
    strMeasure2: z.string().nullable(),
    strMeasure3: z.string().nullable(),
    strMeasure4: z.string().nullable(),
    strMeasure5: z.string().nullable(),
    strMeasure6: z.string().nullable(),
  });