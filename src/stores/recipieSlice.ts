import {StateCreator} from  "zustand"

export type Category = {}

export type RecipiesSliceType = {
    categories : Category[]
}

export const createRecipiesSlice : StateCreator<RecipiesSliceType> =  () =>({
	categories : [],
})