
export const NavbarMenu = () => {
    return (
        <div className="relative  h-auto w-screen flex justify-center z-20 ">
            <div className="w-screen h-auto  bg-black  lg:w-1/2 lg:absolute lg:end-0 lg:mr-2">
                <ul className="w-full h-full flex flex-col items-center lg:flex-row lg:justify-evenly lg:gap-10  lg:px-3">
                    <li className='inline-block my-3  w-full text-2xl font-regular leading-loose text-white text-center hover:font-bold hover:cursor-pointer md:text-5xl md:my-7 lg:text-3xl lg:w-auto'>ABOUT</li>
                    <hr className="w-2/3 lg:hidden" />
                    <li className='inline-block my-3 w-full text-2xl font-regular leading-loose text-white text-center hover:font-bold hover:cursor-pointer md:text-5xl md:my-7 lg:text-3xl lg:w-auto'>PROJECTS</li>
                    <hr className="w-2/3 lg:hidden" />
                    <li className='inline-block my-3 w-full text-2xl font-regular leading-loose text-white text-center hover:font-bold hover:cursor-pointer md:text-5xl md:my-7 lg:text-3xl lg:w-auto'>CONTACT</li>
                    <hr className="w-2/3 mb-4 lg:hidden" />
                </ul>

            </div>
        </div>

    )
}
