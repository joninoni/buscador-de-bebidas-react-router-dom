import {StateCreator} from "zustand"
import { CurrencyDrink } from "../types"
import { createRecipiesSlice, RecipesSliceType } from "./recipieSlice"

export type FavoritesSliceType = {
    favorites : CurrencyDrink[]
    handleFavorites : (drink : CurrencyDrink) => void
    loadFromStorage: () => void
}

export const createFavoritesSlice : StateCreator<FavoritesSliceType & RecipesSliceType, [], [], FavoritesSliceType> = (set,get,api) =>( {
    favorites : [],
    handleFavorites: (drink) => {
        //el metodo get() es muy parecido al state ambos pueden hacer lo mismo en este caso use el get() en lugar de state para que pueda recordar que se puede hacer de diferentes formas

        if(get().favorites.some( favorite => favorite.idDrink === drink.idDrink)){
            // ya existe la receta en los favoritos
            set({
                favorites : get().favorites.filter(favorite => favorite.idDrink !== drink.idDrink)
            })
        }
        else{
            // no existe la receta en los favoritos
            set({
                favorites : [...get().favorites,drink]
            })
        }
        //cierra el modal consumiendo un estado de otro slice
        createRecipiesSlice(set,get,api).closeModal()
        //guradando en localstorage las recetas
        localStorage.setItem("favorites",JSON.stringify(get().favorites))
    },
    loadFromStorage : () => {
        const storedFavorites = localStorage.getItem("favorites")
        if(storedFavorites){
            set({
                favorites : JSON.parse(storedFavorites)
            })
        }   
    }
})