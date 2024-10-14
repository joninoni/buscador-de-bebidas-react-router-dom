import {StateCreator} from  "zustand"
import { getCategories, getRecipies } from "../services/RecipieService"
import { Categories, Drinks, SearchFliter } from "../types"

export type RecipesSliceType = {
    categories : Categories
    drinks : Drinks
    fetchCategories: () => Promise<void>
    searchRecipies: (searchFilter : SearchFliter) => Promise<void>
}

export const createRecipiesSlice : StateCreator<RecipesSliceType> =  (set) =>({
     
    categories: {drinks: [] as { strCategory: string }[]},

    drinks : {drinks : [] as { idDrink : string , strDrink : string ,strDrinkThumb : string}[]},

    fetchCategories : async() =>{
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipies : async (filters) => {
        const drinks = await getRecipies(filters)
        set({
            drinks
        })
    }
})