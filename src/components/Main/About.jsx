export const About = () => {
    return (
        <section id="about" className="relative w-full h-auto">
            <div className="flex flex-col flex-wrap h-auto mx-3 justify-start items-end lg:items-end lg:m-0 lg:mt-10 relativ lg:p-10">
                <h2 className='mt-20 text-5xl  font-semibold text-white text-end md:text-8xl md:mt-24   lg:-rotate-90 lg:border-b-4 lg:left-[-3%] lg:absolute '>About</h2>
                <div className="lg:flex lg:flex-col lg:w-4/5 ">

                    <p className='mt-5 text-xl font-semibold text-white text-end md:text-4xl'>
                        Nice to meet you.
                    </p>
                    <p className='mt-5 text-xl font-regular leading-8 text-white text-end md:text-3xl md:leading-snug'>
                        El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer.
                    </p>
                </div>
            </div>
        </section>
    )
}
