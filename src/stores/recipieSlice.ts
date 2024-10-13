import {StateCreator} from  "zustand"
import { getCategories, getRecipies } from "../services/RecipieService"
import { Categories, SearchFliter } from "../types"

export type RecipesSliceType = {
    categories : Categories
    fetchCategories: () => Promise<void>
    searchRecipies: (searchFilter : SearchFliter) => Promise<void>
}

export const createRecipiesSlice : StateCreator<RecipesSliceType> =  (set) =>({
     
    categories: {drinks: [] as { strCategory: string }[]},

    fetchCategories : async() =>{
        const categories = await getCategories()
        set({
            categories
        })
    },
    searchRecipies : async (filters) => {
        await getRecipies(filters)
    }
})