// Author: AngelOrtega - Ag9571 © 2020
// Filename: page.jsx
// Code: ReactJS
// Function: Home
import React from 'react';
import { NavigationPrincipal, Header, Image } from './components/Components';


function Home (){
    return(
        <>
            <Header />
            <main className='grid grid-cols-12 gap-5 mt-5 h-full '>
                <NavigationPrincipal />
                <div className=' w-full col-start-2 col-end-13  '>
                    <ul  className='flex py-4 ' >
                        <li className='px-5 py-1 mx-4 rounded-lg bg-purple' >main</li>                        
                        <li className='px-5 py-1 mx-4 rounded-lg bg-purple' >main</li>                        
                        <li className='px-5 py-1 mx-4 rounded-lg bg-purple' >main</li>                        
                    </ul>
                    <div className=' grid grid-cols-3 gap-5 col-start-2 col-end-13' >
                        <Image />
                        <Image />
                        <Image />
                        <Image />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;