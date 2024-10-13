import axios from  "axios"
import {CategoriesApiResponseSchema} from "../schema/recipiesSchema"
import { SearchFliter } from "../types"


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
	console.log(data)
}