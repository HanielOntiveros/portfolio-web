import html from '../../assets/icons/html-logo.svg'
import css from '../../assets/icons/css-logo.svg'
import js from '../../assets/icons/js-logo.svg'
import git from '../../assets/icons/git-logo.svg'
import github from '../../assets/icons/github-logo.svg'
import react from '../../assets/icons/react-logo.svg'
import wordpress from '../../assets/icons/wordpress-logo.svg'

export const Skills = () => {
    return (
        <section className=" w-full h-auto realative">
            <div className="flex flex-col flex-wrap h-auto mx-3 justify-start items-end lg:items-end lg:m-0 lg:mt-10 lg:p-10 relative">
                <h2 className='font-jura mt-20 text-5xl  font-semibold text-white text-end md:text-6xl md:mt-24   lg:-rotate-90 lg:border-b-4 lg:left-[-2%] lg:absolute lg:top-[25%] '>Stack</h2>
                <div className="animation-scroll self-center flex justify-start item mt-5">
                    <ul >
                        <li className='flex justify-end items-center font-jura m-3 text-xl font-regular leading-8 text-white text-end md:text-2xl md:leading-loose'><span className='pr-4'><img className="h-8 w-full object-contain sm:h-auto sm:w-16 md:w-20" src={html} /></span> HTML</li>
                        <li className='flex justify-end items-center font-jura m-3 text-xl font-regular leading-8 text-white text-end md:text-2xl md:leading-loose'><span className='pr-4'><img className="h-8 w-full object-contain sm:h-auto sm:w-16 md:w-20" src={js} /></span>JS</li>
                        {/* <li className='flex justify-end m-3 text-xl font-regular leading-8 text-white text-end md:text-4xl md:leading-loose'>REDUX</li> */}
                        <li className='flex justify-end items-center font-jura m-3 text-xl font-regular leading-8 text-white text-end md:text-2xl md:leading-loose'><span className='pr-4'><img className="h-8 w-full object-contain sm:h-auto sm:w-16 md:w-20" src={git} /></span>GIT</li>
                        <li className='flex justify-end items-center font-jura m-3 text-xl font-regular leading-8 text-white text-end md:text-2xl md:leading-loose '><span className='pr-4'><img className="h-8 w-full object-contain sm:h-auto sm:w-16 md:w-20" src={wordpress} /></span>WORDPRESS</li>
                    </ul>
                    <ul >
                        <li className='flex justify-start items-center font-jura m-3 text-xl font-regular leading-8 text-white text-start md:text-2xl md:leading-loose'>CSS <span className='pl-4'><img className="h-8 w-full object-contain sm:h-auto sm:w-16 md:w-20" src={css} /></span></li>
                        <li className='flex justify-start items-center font-jura m-3 text-xl font-regular leading-8 text-white text-start md:text-2xl md:leading-loose'>REACT<span className='pl-4'><img className="h-8 w-full object-contain sm:h-auto sm:w-16 md:w-20" src={react} /></span></li>
                        <li className='flex justify-start items-center font-jura m-3 text-xl font-regular leading-8 text-white text-start md:text-2xl md:leading-loose'>GITHUB<span className='pl-4'><img className="h-8 w-full object-contain sm:h-auto sm:w-16 md:w-20" src={github} /></span></li>
                        {/* <li className='flex justify-start m-3 text-xl font-regular leading-8 text-white text-start md:text-2xl md:leading-loose'>FIGMA</li> */}
                    </ul>
                </div>

            </div>
        </section>
    )
}
