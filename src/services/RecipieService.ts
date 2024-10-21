import axios from  "axios"
import {CategoriesApiResponseSchema, DrinksApiResponseSchema, RecipeAPIResponseSchema} from "../schema/recipiesSchema"
import { Drink, SearchFliter } from "../types"


export const getCategories = async () =>{
	const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
	const {data} = await axios(url)
	const result = CategoriesApiResponseSchema.safeParse(data)
	if(result.success){
		return result.data
	}
}

export const getRecipies = async (filters : SearchFliter) =>{
	const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`
	const {data} = await axios(url)
	const result = DrinksApiResponseSchema.safeParse(data)
	if(result.success){
		return result.data
	}
}

export const getCurrencyDrink = async (id : Drink["idDrink"]) =>{
	const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
	const {data} = await axios(url)
	const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
	if(result.success){
		return result.data
	}
}