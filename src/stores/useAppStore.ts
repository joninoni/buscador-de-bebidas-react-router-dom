import {create} from "zustand"
import {devtools} from "zustand/middleware"
import { createRecipiesSlice,RecipesSliceType} from "./recipieSlice"
import { createFavoritesSlice,FavoritesSliceType } from "./favoritesSlice"

const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(
	devtools( 
		(...a)=>(
			{
				...createRecipiesSlice(...a),
				...createFavoritesSlice(...a),
			}
		)
	)
)

export default useAppStore