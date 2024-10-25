import selfie from '../../assets/imgs/selfie.webp'



export const Home = () => {


    return (
        <section className='flex flex-col place-items-end  w-full h-svh mb-5 lg:h-[90vh]  '>

            <div className=" inline-block h-screen w-full mx-3 lg:grid lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-2 ">
                <p className='font-jura font-medium mt-16 text-end  text-3xl  text-white sm:text-4xl md:top-0 md:mt-[6rem] md:mr-8 lg:col-start-2 lg:row-start-1'>Portfolio</p>
                <div className='h-[55vh] w-full flex justify-center  lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:place-items-center lg:justify-center lg:mt-[6rem]'>
                    <picture>
                        <source srcSet={selfie} type="image/webp" />
                        <img
                            className='top-36 end-0 w-auto h-full max-w-[375px] max-h-[666px] object-cover md:top-48 lg:h-[500px] '
                            src={selfie}
                            alt='selfie image'
                            loading="lazy"
                            width="375"
                            height="666"
                        />
                    </picture>

                </div>
                <div className='md:top-20  lg:py-16 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:place-content-end lg:justify-end'>
                    <h1 className='font-jura mt-5 leading-none text-4xl font-semibold text-[#ebbf26]  text-end sm:text-5xl md:text-7xl lg:text-end  lg:text-8xl xl:text-9xl ' >Haniel Ontiveros</h1>
                    <p className='font-jura mt-1 text-2xl leading-snug font-medium text-white text-end sm:text-3xl md:text-4xl lg:text-end lg:pt-16 lg:text-5xl '>Frontend Developer</p>
                </div>
            </div>
        </section >
    )
}
