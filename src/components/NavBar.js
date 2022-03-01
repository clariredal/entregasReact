import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {

    const styleNav={
        backgroundColor: "#ffcd19",
        height:"80px",
        color:"white"
    }
    return (
        <header style={styleNav} className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z" clipRule="evenodd" />
</svg>
        <span className="ml-3 text-xl">TATTOO-ANDO</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-7 hover:text-gray-900">TATUAJES</a>
            <a className="mr-7 hover:text-gray-900">PIERCINGS</a>
            <a className="mr-7 hover:text-gray-900">TURNOS</a>
            <a className="mr-7 hover:text-gray-900">SOBRE NOSOTRXS</a>
        </nav>
        <button>
        <CartWidget></CartWidget>
        </button>
    </div>
    </header>
    )
}

export default NavBar