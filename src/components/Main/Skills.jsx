
export const Skills = () => {
    return (
        <section className=" w-full h-auto realative">
            <div className="flex flex-col flex-wrap h-auto mx-3 justify-start items-end lg:items-end lg:m-0 lg:mt-10 lg:p-10 relative">
                <h2 className='font-jura mt-20 text-5xl  font-semibold text-white text-end md:text-8xl md:mt-24   lg:-rotate-90 lg:border-b-4 lg:left-[-2%] lg:absolute lg:top-[25%] '>Stack</h2>
                <div className="self-center flex justify-start item mt-5">
                    <ul >
                        <li className='font-jura m-3 text-xl font-regular leading-8 text-white text-end md:text-4xl md:leading-loose'>HTML</li>
                        <li className='font-jura m-3 text-xl font-regular leading-8 text-white text-end md:text-4xl md:leading-loose'>JS</li>
                        {/* <li className='m-3 text-xl font-regular leading-8 text-white text-end md:text-4xl md:leading-loose'>REDUX</li> */}
                        <li className='font-jura m-3 text-xl font-regular leading-8 text-white text-end md:text-4xl md:leading-loose'>GIT</li>
                        <li className='font-jura m-3 text-xl font-regular leading-8 text-white text-end md:text-4xl md:leading-loose '>WORDPRESS</li>
                    </ul>
                    <ul >
                        <li className='font-jura m-3 text-xl font-regular leading-8 text-white text-start md:text-4xl md:leading-loose'>CSS</li>
                        <li className='font-jura m-3 text-xl font-regular leading-8 text-white text-start md:text-4xl md:leading-loose'>REACT</li>
                        <li className='font-jura m-3 text-xl font-regular leading-8 text-white text-start md:text-4xl md:leading-loose'>GITHUB</li>
                        <li className='m-3 text-xl font-regular leading-8 text-white text-start md:text-4xl md:leading-loose'>FIGMA</li>
                    </ul>
                </div>

            </div>
        </section>
    )
}
