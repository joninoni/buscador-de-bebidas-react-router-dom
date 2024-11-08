import { useEffect ,useState, useMemo, ChangeEvent, FormEvent } from "react"
import {NavLink, useLocation} from "react-router-dom"
import useAppStore from "../stores/useAppStore"

const Header = () => {

    const {pathname} = useLocation()

    const isHome = useMemo( () => pathname === "/", [pathname])

    const {categories,fetchCategories,searchRecipies,notificacion,showNotification,hideNotification} = useAppStore()//viene del recipieSlice y los ultimos tres de notificationSlice

    const [searchFilters,setSearchFilters] = useState({
        ingredient: "",
        category: ""
    })
    
    useEffect(()=>{
        fetchCategories()
    },[fetchCategories])

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) =>{
        setSearchFilters({
            ...searchFilters,
            [e.target.id] : e.target.value
        })
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        if(Object.values(searchFilters).includes("")){
            showNotification({"error" : true , "text" : "todos los campos son obligatorios"})
            return
        }
        hideNotification()//reinicia a false el error ¿
        searchRecipies(searchFilters)  //buscamos las recetas
        //reinicio el formulario
        setSearchFilters({
            ingredient : "",
            category : "",
        })
    }

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
                    <form
                        className="bg-orange-400 md:w-1/2 2xl:w-1/3 my-32 rounded-lg shadow space-y-6 p-10"
                        onSubmit={handleSubmit}
                    >

                    {notificacion.error ?? <p className="text-xl text-orange-700 font-bold"></p>}


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
                                value={searchFilters.ingredient}
                                onChange={handleChange}
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
                                value={searchFilters.category}
                                onChange={handleChange}
                                className="p-3 w-full rounded-lg focus:outline-none"
                            >
                                <option value="">--Seleccione</option>
                                {categories.drinks.length > 0 ? (
                                    categories.drinks.map(category=>(
                                        <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                                    ))
                                ):(
                                        <option value="" disabled>No hay categorias</option>
                                    
                                )}
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