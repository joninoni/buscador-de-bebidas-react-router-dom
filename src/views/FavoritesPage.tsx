import { useMemo } from "react"
import { DrinkCard } from "../components/DrinkCard"
import useAppStore from "../stores/useAppStore"

const FavoritesPage = () => {

    const favorites = useAppStore(state => state.favorites)
    const hasFavorites = useMemo( ()=> favorites.length ,[favorites])

    return (

        <section>
            <h1 className="text-6xl font-extrabold">Favoritos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12">
                {hasFavorites ?
                    (
                        favorites.map(drink => (
                            <DrinkCard
                                key={drink.idDrink}
                                drink={drink}
                            />
                        ))
                    ) : (
                        <p className="my-5 text-center">Aqui apareceran los favoritos</p>
                    )
                }
            </div>
        </section>
    )
}

export default FavoritesPage