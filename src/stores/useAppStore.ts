import {create} from "zustand"
import {devtools} from "zustand/middleware"
import { createRecipiesSlice,RecipesSliceType} from "./recipieSlice"

const useAppStore = create<RecipesSliceType>()(
	devtools( 
		(...a)=>(
			{
				...createRecipiesSlice(...a)
			}
		)
	)
)

export default useAppStore