import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import useAppStore from '../stores/useAppStore';
import { CurrencyDrink } from '../types';
 
export default function Modal() {

    const modal = useAppStore( state => state.modal)
    const closeModal = useAppStore( state => state.closeModal)
    const currencyDrink = useAppStore( state => state.currencyDrink)
    //hacia abajo son del slice de favoritos
    const handleFavorites = useAppStore(state => state.handleFavorites)
    const favorites = useAppStore(state => state.favorites)

    const favoriteExist = favorites.some(favorite => favorite.idDrink === currencyDrink.idDrink)

    const renderIngredients = () =>{
        const ingredients : JSX.Element[] = []
        for(let i = 1; i <= 6;i++){
            const ingredient = currencyDrink[`strIngredient${i}` as keyof CurrencyDrink] 
            const measure = currencyDrink[`strMeasure${i}` as keyof CurrencyDrink]

            if(ingredient && measure){
                ingredients.push(
                    <li>
                        {ingredient} - {measure}
                    </li>
                )
            }
        }
        return ingredients
    }
    
    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-70" />
                    </TransitionChild>
    
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
                                <DialogTitle as="h3" className="text-gray-900 text-4xl font-extrabold my-5 text-center">
                                    {currencyDrink.strDrink}
                                </DialogTitle>

                                <img
                                    src={currencyDrink.strDrinkThumb}
                                    alt={`Imagen de ${currencyDrink.strDrink}`}
                                    className='mx-auto w-96'
                                />
                                <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                    <p className='py-2'>Ingredientes y cantidades</p>
                                </DialogTitle>
                                    {renderIngredients()}
                                <DialogTitle as="h3" className="text-gray-900 text-2xl font-extrabold my-5">
                                    <p className='py-2'>Instrucciones</p>
                                </DialogTitle>
                                    <p>{currencyDrink.strInstructions}</p>

                                    <div className='flex  gap-4'>
                                        <button
                                            className='bg-orange-400 py-5 w-full mt-5 rounded-lg hover:bg-orange-500'
                                            onClick={ ()=> handleFavorites(currencyDrink)}
                                        >
                                           {favoriteExist ? "Eliminar favorito" : "Añadir a favoritos"}
                                        </button>
                                        <button
                                            className='bg-gray-400 py-5 w-full mt-5 rounded-lg'
                                            onClick={() => closeModal()}
                                        >
                                            Cerrar
                                        </button>  
                                    </div>                                      
                            </DialogPanel>                            
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
        </>
    )
}