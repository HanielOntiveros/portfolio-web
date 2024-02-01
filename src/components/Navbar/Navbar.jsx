import menu from '../../assets/icons/icons8-squared-menu-96.png'
// import { NavbarMenu } from './NavbarMenu'

import { NavbarMenu } from "./NavbarMenu"

export const Navbar = () => {




    return (
        <nav className='fixed w-full top-0  h-16 z-10'>
            <div className="flex h-full bg-black">
                <div>
                    <img
                        className="m-3 h-10 w-full  object-contain md:h-full md:w-48 cursor-wait"
                        src={menu}
                        alt='linux penguin'
                    />
                    {/* <button
                        className='text-white cursor-pointer'
                        onClick={() => { console.log(toggleMenu) }}
                        >
                        Click here
                    </button> */}
                    {/* {
                        toggleMenu ? <NavbarMenu /> : null
                    } */}
                </div>

                <NavbarMenu />
                <div className='absolute flex  w-full h-full justify-center '>
                    <h1 className='text-white '>sH dev</h1>
                </div>
            </div>
            <hr className=" decoration-white border-1" />
        </nav >
    )
}
