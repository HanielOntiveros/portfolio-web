import selfie from '../../assets/imgs/stevejobswide620x350.webp'

export const Home = () => {
    return (
        <section className='relative w-full h-svh mb-5'>
            <div className="absolute end-0 inline-block h-screen w-fit mx-3 ">
                <p className=' absolute top-0 mt-20  end-0  text-5xl font-medium text-white md:text-8xl md:mt-24'>Portfolio</p>
                <img className='relative top-36 end-0 w-auto h-[20rem]  object-cover md:top-48' src={selfie} />
                <div className='absolute bottom-10 end-0 md:bottom-20 '>
                    <h1 className='mt-20 leading-normal text-5xl font-bold text-amber-400 text-end md:text-9xl'>Haniel Ontiveros</h1>
                    <h2 className='mt-2 text-3xl leading-snug font-semibold text-white text-end md:text-5xl'>Frontend Developer</h2>
                </div>
            </div>
        </section >
    )
}
