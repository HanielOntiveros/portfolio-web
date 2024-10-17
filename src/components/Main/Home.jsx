import selfie from '../../assets/imgs/selfie.webp'



export const Home = () => {


    return (
        <section className='flex flex-col place-items-end  w-full h-svh mb-5  lg:flex lg:justify-center '>

            <div className=" inline-block h-screen w-fit mx-3  lg:w-full">
                <p className='font-jura font-medium mt-16 text-end  text-5xl  text-white  md:top-0 md:mt-36 md:mr-8'>Portfolio</p>
                <div className='h-[55vh] w-full flex justify-center'>
                    <picture>
                        <source srcSet={selfie} type="image/webp" />
                        <img
                            className='top-36 end-0 w-auto h-full max-w-[375px] max-h-[666px] object-cover md:top-48 lg:w-1/4'
                            src={selfie}
                            alt='selfie image'
                            loading="lazy"
                            width="375"
                            height="666"
                        />
                    </picture>

                </div>
                <div className='md:top-20 lg:w-1/2 lg:py-16'>
                    <h1 className='font-jura mt-5 leading-none text-5xl font-semibold text-[#ebbf26]  text-end md:text-7xl lg:text-start  lg:text-8xl xl:text-9xl ' >Haniel Ontiveros</h1>
                    <p className='font-jura mt-1 text-3xl leading-snug font-medium text-white text-end md:text-4xl lg:text-start lg:pt-16 lg:text-5xl '>Frontend Developer</p>
                </div>
            </div>
        </section >
    )
}
