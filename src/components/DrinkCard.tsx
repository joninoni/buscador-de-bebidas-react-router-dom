import type { Drink } from "../types"

type DrinkCard  = {
	drink : Drink
}

export const DrinkCard = ({drink} : DrinkCard) => {
	return (
		<>
			<p>{drink.strDrink}</p>
		</>
	)
}
