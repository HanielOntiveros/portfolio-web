
export const Skills = () => {
    return (
        <section className=" w-full h-svh realative">
            <h1 className='mt-20 text-5xl font-semibold text-white text-end'>Skills</h1>
            <div className="flex flex-col h-screen mx-3 justify-start items-center">
                <div className="flex justify-center item-center">
                    <ul >
                        <li className='m-3 text-xl font-regular leading-8 text-white text-end '>HTML</li>
                        <li className='m-3 text-xl font-regular leading-8 text-white text-end '>JS</li>
                        <li className='m-3 text-xl font-regular leading-8 text-white text-end '>REDUX</li>
                        <li className='m-3 text-xl font-regular leading-8 text-white text-end '>GIT</li>
                        <li className='m-3 text-xl font-regular leading-8 text-white text-end '>MONGO DB</li>
                    </ul>
                    <ul >
                        <li className='m-3 text-xl font-regular leading-8 text-white text-start '>css</li>
                        <li className='m-3 text-xl font-regular leading-8 text-white text-start '>REACT</li>
                        <li className='m-3 text-xl font-regular leading-8 text-white text-start '>EXPRESS</li>
                        <li className='m-3 text-xl font-regular leading-8 text-white text-start '>GITHUB</li>

                    </ul>
                </div>
                <p className='mt-6 text-3xl font-bold text-white text-end '>
                    OS
                </p>
                <div className="flex justify-center item-center">
                    <ul >
                        <li className='m-3 text-xl font-regular leading-8 text-white text-end '>WINDOWS</li>
                    </ul>
                    <ul >
                        <li className='m-3 text-xl font-regular leading-8 text-white text-start '>LINUX</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
