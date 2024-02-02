
export const Skills = () => {
    return (
        <section className=" w-full h-auto realative">
            <h2 className='mt-20 mx-3 text-5xl font-semibold text-white text-end md:text-8xl'>Skills</h2>
            <div className="flex flex-col h-auto mx-3 my-10 justify-even items-center">
                <div className="flex justify-start ">
                    <ul >
                        <li className='m-3 text-xl font-regular leading-8 text-white text-end md:text-4xl md:leading-loose'>HTML</li>
                        <li className='m-3 text-xl font-regular leading-8 text-white text-end md:text-4xl md:leading-loose'>JS</li>
                        <li className='m-3 text-xl font-regular leading-8 text-white text-end md:text-4xl md:leading-loose'>REDUX</li>
                        <li className='m-3 text-xl font-regular leading-8 text-white text-end md:text-4xl md:leading-loose'>GIT</li>
                        <li className='m-3 text-xl font-regular leading-8 text-white text-end md:text-4xl md:leading-loose'>MONGO DB</li>
                    </ul>
                    <ul >
                        <li className='m-3 text-xl font-regular leading-8 text-white text-start md:text-4xl md:leading-loose'>CSS</li>
                        <li className='m-3 text-xl font-regular leading-8 text-white text-start md:text-4xl md:leading-loose'>REACT</li>
                        <li className='m-3 text-xl font-regular leading-8 text-white text-start md:text-4xl md:leading-loose'>EXPRESS</li>
                        <li className='m-3 text-xl font-regular leading-8 text-white text-start md:text-4xl md:leading-loose'>GITHUB</li>
                    </ul>
                </div>
                <p className='mt-6 text-3xl font-bold text-white text-end md:text-7xl'>
                    OS
                </p>
                <div className="flex justify-center item-center">
                    <ul >
                        <li className='m-3 text-xl font-regular leading-8 text-white text-end md:text-4xl md:leading-loose'>WINDOWS</li>
                    </ul>
                    <ul >
                        <li className='m-3 text-xl font-regular leading-8 text-white text-start md:text-4xl md:leading-loose'>LINUX</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
