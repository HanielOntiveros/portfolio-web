import { DownloadButton } from "../UI/DownloadButton"

export const About = () => {
    return (
        <section id="about" className="relative w-full h-auto scroll-mt-20 ">
            <div className="mt-20 flex flex-col flex-wrap h-auto mx-3 justify-start items-end lg:items-end lg:m-0 lg:mt-10 relativ lg:p-10">
                <h2 className='text-5xl font-jura font-semibold text-white text-end md:text-8xl md:mt-24   lg:-rotate-90 lg:border-b-4 lg:left-[-3%] lg:absolute '>About</h2>
                <div className="lg:flex lg:flex-col lg:w-4/5 ">


                    <p className='font-jura mt-5 text-xl font-regular leading-8 text-white text-end md:text-3xl md:leading-snug'>
                        I'm a frontend developer with one year of experience in creating and designing websites, adapting to the various technologies that projects may require. If you're interested in learning more about my work and skills, feel free to download my CV.
                    </p>
                    <div className="w-full flex justify-end mt-5">
                        <DownloadButton />
                    </div>
                </div>
            </div>
        </section>
    )
}
