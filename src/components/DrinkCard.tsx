import useAppStore from "../stores/useAppStore"
import type { Drink } from "../types"

type DrinkCard  = {
	drink : Drink
}

export const DrinkCard = ({drink} : DrinkCard) => {

	const {searchCurrencyDrink} = useAppStore()

	return (
		<div className="border shadow-lg">

			<div className="overflow-hidden">
				<img
					src={drink.strDrinkThumb}
					alt={drink.strDrink}
					className=" hover:scale-125 hover:rotate-2 transition-transform"
				/>
			</div>

			<div className="p-5">
				<p className=" truncate font-black text-2xl text-center">{drink.strDrink}</p>
				<button
					className="bg-orange-400 hover:bg-orange-500 w-full p-3 mt-5 text-white font-bold text-lg"
					onClick={() => searchCurrencyDrink(drink.idDrink)}
				>
					Ver receta
				</button>
			</div>
		</div>
	)
}
