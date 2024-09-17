import {StateCreator} from  "zustand"
import { getCategories } from "../services/RecipieService"
import { Categories } from "../types"

export type RecipesSliceType = {
    categories : Categories
    fetchCategories: () => Promise<void>
}

export const createRecipiesSlice : StateCreator<RecipesSliceType> =  (set) =>({
     
    categories: {drinks: [] as { strCategory: string }[]},

    fetchCategories : async() =>{
        const categories = await getCategories()
        
        set({
            categories
        })
    }
})