import {create} from "zustand"
import {devtools} from "zustand/middleware"
import { createRecipiesSlice,RecipesSliceType} from "./recipieSlice"
import { createFavoritesSlice,FavoritesSliceType } from "./favoritesSlice"
import { createNotificationsSlice, NotificacionSliceType } from "./notificationsSlice"

const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificacionSliceType>()(
	devtools( 
		(...a)=>(
			{
				...createRecipiesSlice(...a),
				...createFavoritesSlice(...a),
				...createNotificationsSlice(...a),
			}
		)
	)
)

export default useAppStore