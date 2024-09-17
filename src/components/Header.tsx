import { useEffect, useMemo } from "react"
import {NavLink, useLocation} from "react-router-dom"
import useAppStore from "../stores/useAppStore"

const Header = () => {

    const {pathname} = useLocation()

    const isHome = useMemo( () => pathname === "/", [pathname])

    const {categories} = useAppStore()
    
    
    return (
        <header className={isHome ? "bg-header bg-cover bg-center bg-no-repeat": "bg-slate-800"}>
            <div className="mx-auto container px-5 py-16">
                <div className=" flex justify-between items-center">

                    <div>
                        <img className="w-32" src="/logo.svg" alt="logotipo" />
                    </div>

                    <nav className="flex flex-col items-center gap-4 md:flex-row">
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                isActive ? "text-orange-500 font-bold uppercase" : "text-white font-bold uppercase"
                            }
                        >
                            Inicio
                        </NavLink>

                        <NavLink
                            to="/favoritos"
                            className={({isActive}) =>
                                isActive ? "text-orange-500 font-bold uppercase" : "text-white font-bold uppercase"
                            }
                        >
                            Favoritos
                        </NavLink>
                    </nav>
                </div>

                {isHome && (

                    <form className="bg-orange-400 md:w-1/2 2xl:w-1/3 my-32 rounded-lg shadow space-y-6 p-10">

                        <div className="space-y-4">
                            <label
                                htmlFor="ingredient"
                                className="block uppercase font-extrabold text-white text-lg"
                            >
                                    Nombre o ingrediente
                            </label>
                            <input
                                type="text"
                                id="ingredient"
                                className="p-3 w-full rounded-lg focus:outline-none"
                                placeholder="Nombre o ingrediente. Ej. Vodka,Tequila,Cafe"
                            />
                        </div>

                        <div className="space-y-4">
                            <label
                                htmlFor="category"
                                className="block uppercase font-extrabold text-white text-lg"
                            >
                                    Categoria
                            </label>
                            <select
                                id="category"
                                name="category"
                                className="p-3 w-full rounded-lg focus:outline-none"
                            >
                                <option value="">--Seleccione</option>
                                {categories.drinks.map(category=>(
                                    <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                                ))}
                            </select>
                        </div>

                        <input
                            type="submit"
                            value="Buscar receta"
                            className="uppercase bg-orange-800 hover:bg-orange-900 w-full p-2 rounded-lg text-white cursor-pointer font-extrabold"
                        />
                    </form>
                )}
            </div>
        </header>
    )
}

export default Header