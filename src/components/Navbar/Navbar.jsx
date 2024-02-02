import { useState } from 'react'
import { NavbarMenu } from "./NavbarMenu"
import menu from '../../assets/icons//menu-2-svgrepo-com.svg'
import close from '../../assets/icons/close-svgrepo-com.svg'

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <nav className='fixed w-full top-0 end-0 h-16 z-10 md:h-24 '>
            <div className="flex h-full bg-black">
                <div className='flex flex-col '>
                    <div className='hidden lg:flex'>
                        <NavbarMenu />
                    </div>
                    <button
                        className='h-full w-full p-2 z-20 lg:hidden '
                        onClick={handleMenu}
                    >
                        {
                            toggleMenu
                                ?
                                <img
                                    className="h-10 w-full object-contain md:h-full md:w-28 md:p-2"
                                    src={close}
                                    alt='linux penguin'
                                />
                                :
                                <img
                                    className="h-9 w-full object-contain md:h-full md:w-28 md:p-2"
                                    src={menu}
                                    alt='linux penguin'
                                />
                        }
                    </button>
                </div>
                <div className='absolute flex  w-full h-full justify-center  lg:justify-start lg:m-3'>
                    <h1 className='text-white '>sH dev<br />logo</h1>
                </div>
            </div>
            <hr className=" decoration-white border-1 md:border-2 lg:w-1/2 lg:absolute lg:end-0" />
            {toggleMenu ? <NavbarMenu /> : null}
        </nav >
    )
}
