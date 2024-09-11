import {create} from "zustand"
import { createRecipiesSlice,RecipiesSliceType} from "./recipieSlice"

const useAppStore = create<RecipiesSliceType>( (...a)=>({
	...createRecipiesSlice(...a)
}))

export default useAppStore