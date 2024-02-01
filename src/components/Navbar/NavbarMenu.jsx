
export const NavbarMenu = () => {
    return (
        <div className="mt-20 h-auto w-screen bg-black flex justify-center z-10 hidden ">
            <ul className="w-full flex flex-col  items-center">
                <li className='m-3 text-2xl font-regular leading-loose text-white text-center hover:font-bold hover:cursor-pointer'>ABOUT</li>
                <hr className="w-2/3" />
                <li className='m-3 text-2xl font-regular leading-loose text-white text-center hover:font-bold hover:cursor-pointer'>PROJECTS</li>
                <hr className="w-2/3" />
                <li className='m-3 text-2xl font-regular leading-loose text-white text-center hover:font-bold hover:cursor-pointer'>CONTACT</li>
                <hr className="w-2/3" />
            </ul>
        </div>
    )
}
