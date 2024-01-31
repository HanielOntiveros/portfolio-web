import menu from '../assets/icons/icons8-squared-menu-96.png'
export const Navbar = () => {
    return (
        <nav className='fixed w-full top-0  h-16 z-10'>
            <div className="flex h-full bg-black">
                <div>
                    <img
                        className="m-3 h-10 w-full object-contain md:h-full md:w-48"
                        src={menu}
                        alt='linux penguin'
                    />
                </div>

                <div className='absolute flex  w-full h-full justify-center '>
                    <h1 className='text-white '>sH dev</h1>
                </div>
            </div>
            <hr className=" decoration-white border-1" />
        </nav>
    )
}
