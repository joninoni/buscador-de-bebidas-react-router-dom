import { useMemo } from "react"
import useAppStore from "../stores/useAppStore"
import { DrinkCard } from "../components/DrinkCard"

const IndexPage = () => {

    const drinks = useAppStore( state => state.drinks)

    //comprueba si hay recetas en nuestro state de drinks
    const hasDrinks = useMemo( ()=> drinks.drinks.length,[drinks])
    return (
        <>
            <h1 className="text-6xl font-bold">Recetas</h1>

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
        </>
    )
}

export default IndexPage