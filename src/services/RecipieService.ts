import axios from  "axios"
import {CategoriesApiResponseSchema} from "../schema/recipiesSchema"


export const getCategories = async () =>{
   const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
   const {data} = await axios(url)
   const result = CategoriesApiResponseSchema.safeParse(data)
   if(result.success){
      return result.data
   }
}