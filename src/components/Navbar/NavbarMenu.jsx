
export const NavbarMenu = () => {
    return (
        <div className="relative  h-auto w-screen flex justify-center z-20">
            <div className="w-screen h-auto  bg-black ">
                <ul className="w-full h-full flex flex-col items-center">
                    <li className='inline-block my-3  w-full text-2xl font-regular leading-loose text-white text-center hover:font-bold hover:cursor-pointer md:text-5xl md:my-7'>ABOUT</li>
                    <hr className="w-2/3" />
                    <li className='inline-block my-3 w-full text-2xl font-regular leading-loose text-white text-center hover:font-bold hover:cursor-pointer md:text-5xl md:my-7'>PROJECTS</li>
                    <hr className="w-2/3" />
                    <li className='inline-block my-3 w-full text-2xl font-regular leading-loose text-white text-center hover:font-bold hover:cursor-pointer md:text-5xl md:my-7'>CONTACT</li>
                    <hr className="w-2/3 mb-4" />
                </ul>

            </div>
        </div>

    )
}
