/** Elementos de la aplicacion
 * 1. Navigation
 */
import React from 'react';
import { Link } from 'next/link'; // importamos el componente Link de next
import { Principal, Short, Suscription, Library, NavMovil, Logo, SearchIcon,
    MicrophoneIcon , CreateIcon, NotificationIcon
} from '../icons/iconsApp'; // importamos los icons

/* Componente de navegacion principal 
* @return {JSX.Element} 
*/

export const NavigationPrincipal =  () =>
{
    return(
        <nav className='w-full h-80 text-xs text-white grid-cols-3  grid grid-rows-4 justify-center gap-1 gap-y-2 2xl:w-0.5 '>
            <div className=' grid justify-center col-start-1 col-end-3 '>
                <Principal
                    className="text-white"
                />
                <p className=' text-center ' >Principal</p>
            </div>
            <div className=' row-start-2 col-start-1 col-end-3'>
                <Short
                    className="text-white"
                />
                <p className=' text-center' >Principal</p>
            </div>
            <div className='row-start-3 col-start-1 col-end-3'>
                <Suscription
                    className="text-white"
                />
                <p className=' text-center' >Principal</p>
            </div>
            <div className='row-start-4 col-start-1 col-end-3'>
                <Library 
                    className="text-white"
                />
                <p className=' text-center' >Principal</p>            

            </div>
        </nav>
    )
}
export const Header = () =>
{
    return(
        <header className={` grid grid-cols-12 w-full items-center py-2 h-10  `}>
            <div className={` col-start-1 col-end-3 pl-1 grid grid-cols-11 items-center w-full `}>
                <NavMovil 
                    className='text-white col-start-1 px-2  col-end-4 pe-2 hover:bg-purple rounded-full p-1'
                />
                <Logo
                    className='col-start-5 col-end-9'
                />
            </div>
            <Search />
            <NavIconsProfile />
        </header>
    )
}

export const Search = ({
    className
}) =>
{
    return(
        <div className=' grid grid-cols-7 gap-5 justify-center w-ful  col-start-3 col-end-11 '>
            <div className={`w-full col-start-2 col-end-6  grid grid-cols-8 ${className}`} >
                <input type="text" placeholder='Buscar Musica ...' className=' col-start-1 col-end-8 px-4 py-1 w-full  bg-gray-200 rounded-s-3xl sm:hidden lg:block' />
                    <SearchIcon
                        dir="rtl"
                        className='bg-purple w-full rounded-s-3xl'
                    />
            </div>
            <div className={` bg-midnight rounded-full h-full w-10 py-2 px-2  ${className}`}>
                <MicrophoneIcon />
            </div>
        </div>
    )
}

export const NavIconsProfile = () =>
{
    return(
        <div className=' col-start-11 col-end-13 grid grid-cols-5  gap-7 w-full'>
            <div className='rounded-full h-12 w-12 py-2 px-2 col-start-2  '>
                <CreateIcon />
            </div>
            <div className='rounded-full py-2 px-2 h-12 w-12'>
                <NotificationIcon />
            </div>
            <div className=' rounded-full py-2 px-2 h-12 w-12'>
                <img className=' rounded-3xl h-full w-full' src="https://yt3.ggpht.com/yti/AOXPAcUFzh8-05yaqk37IGGSkdUU5uXBgeMGXcN_aA=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
            </div>  
        </div>
    )
}

// Componente imagen
export const Image = ()=>
{
    return(
        <div className='w-full h-96 bg-purple rounded-lg' >
            <iframe 
            className=' w-ful h-2/3 rounded-lg' 
            style={{ width: "100%" }} 
            height="315" src="https://www.youtube.com/embed/jfKfPfyJRdk" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; 
            gyroscope; 
            picture-in-picture; 
            web-share" 
            allowfullscreen></iframe>
            <div className='py-2 grid grid-cols-6'>
                <img className=' rounded-3xl h-8 w-8 mx-3 col-start-1 col-end-2' src="https://yt3.ggpht.com/6ryOp4Oyf-36SqDOwXYH9knrnJD3q078c07VmiPnqquDxspNVWvo7uxjADRjNCucpcy7bT0uGw=s68-c-k-c0x00ffffff-no-rj" alt="" />
                <div className=' col-start-2 col-end-7 me-3'>
                    <h3 className=' text-md' >Rihanna, Miley Cyrus, Ariana Grande, Maroon 5, Adele, Taylor Swift, Zayn 🪔 ...</h3>
                    <p className=' text-xs'>sanlanksa</p>
                    <p className=' text-xs'>maakmsalkmsa</p>
                </div>
            </div>
        </div>
    )
}

// Componente de navegacion secundaria
export const NavigationSecundary = () =>
{
    return(
        <nav className='w-full h-80 bg-purple grid grid-rows-2 gap-1 gap-y-2 2xl:w-0.5 '>
            <div className=''>
                <Principal
                    className="text-white"
                />
                <p className=' text-center' >Principal</p>
            </div>
            <div className='bg-silver'>
                <Short
                    className="text-white"
                />
                <p className=' text-center' >Principal</p>
            </div>
            <div>
                <Suscription />
                <p className=' text-center' >Principal</p>
            </div>
        </ nav>

    )
}