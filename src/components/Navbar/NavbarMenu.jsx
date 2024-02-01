
export const NavbarMenu = () => {
    return (
        <div className="relative  h-auto w-screen flex justify-center z-20">
            <div className="w-screen h-40 bg-black">
                <ul className="w-full h-full flex flex-col items-center">
                    <li className='inline-block w-full text-2xl font-regular leading-loose text-white text-center hover:font-bold hover:cursor-pointer'>ABOUT</li>
                    <hr className="w-2/3" />
                    <li className='inline-block w-full text-2xl font-regular leading-loose text-white text-center hover:font-bold hover:cursor-pointer'>PROJECTS</li>
                    <hr className="w-2/3" />
                    <li className='inline-block w-full text-2xl font-regular leading-loose text-white text-center hover:font-bold hover:cursor-pointer'>CONTACT</li>
                    <hr className="w-2/3" />
                </ul>

            </div>
        </div>

    )
}
