import { StateCreator } from "zustand"
import { getCategories, getCurrencyDrink, getRecipies } from "../services/RecipieService"
import { Categories, CurrencyDrink, Drink, Drinks, SearchFliter } from "../types"

export type RecipesSliceType = {
    categories : Categories
    drinks : Drinks
    currencyDrink : CurrencyDrink
    modal : boolean
    fetchCategories: () => Promise<void>
    searchRecipies: (searchFilter : SearchFliter) => Promise<void>
    searchCurrencyDrink: (id : Drink["idDrink"] ) => Promise<void>
    closeModal : () => void
}

export const createRecipiesSlice : StateCreator<RecipesSliceType> =  (set) =>({
     
    categories: {drinks: [] as { strCategory: string }[]},

    drinks : {drinks : [] as { idDrink : string , strDrink : string ,strDrinkThumb : string}[]},

    currencyDrink : {
        idDrink:"",
        strDrink:"",
        strDrinkThumb:"",
        strInstructions:"",
        strIngredient1:null,
        strIngredient2:null,
        strIngredient3:null,
        strIngredient4:null,
        strIngredient5:null,
        strIngredient6:null,
        strMeasure1:null,
        strMeasure2:null,
        strMeasure3:null,
        strMeasure4:null,
        strMeasure5:null,
        strMeasure6:null,
    },

    modal : false,

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
    },
    searchCurrencyDrink : async (id) => {
        const currencyDrink = await getCurrencyDrink(id)
        set({
            currencyDrink,
            modal : true
        })
    },
    closeModal : ()=>{
        set({
            modal : false,
            currencyDrink : {} as CurrencyDrink
        })
    }
})