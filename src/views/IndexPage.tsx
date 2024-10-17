import { useMemo } from "react"
import useAppStore from "../stores/useAppStore"
import { DrinkCard } from "../components/DrinkCard"

const IndexPage = () => {

    const drinks = useAppStore( state => state.drinks)

    //comprueba si hay recetas en nuestro state de drinks
    const hasDrinks = useMemo( ()=> drinks.drinks.length,[drinks])
    return (

        <>
            <h1 className="text-6xl font-bold mb-12">Recetas</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-12">
                {hasDrinks ? (
                    drinks.drinks.map( drink => (
                        <DrinkCard
                            key={drink.idDrink}
                            drink={drink}
                        />
                    ))
                ) : (
                    <p className="text-2xl text-center my-10">No hay resultados</p>
                )}
            </div>
        </>
    )
}

export default IndexPage