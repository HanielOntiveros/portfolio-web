import linkedin from '../../assets/icons/linkedin-linked-in-svgrepo-com.svg'
import github from '../../assets/icons/github-142-svgrepo-com.svg'
import email from '../../assets/icons/email-svgrepo-com.svg'

export const Contact = () => {
    return (
        <section id='contact' className=" w-full h-auto realative">
            <div className="flex flex-col flex-wrap h-auto mx-3  justify-start items-end md:mb-5 lg:items-end lg:m-0 lg:mt-10 lg:p-10 relative">
                <h2 className='font-jura mt-20 text-5xl font-semibold text-white text-end md:text-6xl md:mt-24   lg:-rotate-90 lg:border-b-4 lg:left-[-7%] lg:absolute lg:top-[28%] '>Contact</h2>
                <div className="animation-scroll flex justify-evenly w-full md:mt-5 lg:flex-col lg:w-4/5 lg:justify-center lg:items-center lg:gap-4">
                    <a href="https://github.com/HanielOntiveros" target="_blank" rel="noopener noreferrer" className='font-jura flex flex-col place-content-center mt-6 text-xl font-medium text-white text-center '>
                        <img
                            className="h-8 w-full object-contain sm:h-auto sm:w-16 md:w-20  "
                            src={github}
                            alt='github logo'
                        />
                        Github
                    </a>
                    <a href="https://linkedin.com/in/haniel-ontiveros-fernández-2424a61b7" target="_blank" rel="noopener noreferrer" className='font-jura flex flex-col place-content-center mt-6 text-xl font-medium text-white text-center '>
                        <img
                            className="h-8 w-full object-contain  flex flex-col place-content-center sm:h-auto sm:w-16 md:w-20  "
                            src={linkedin}
                            alt='linkedin logo'
                        />
                        Linkedin
                    </a>
                    <a href='mailto:shdeveloper19@gmail.com' className='font-jura mt-6 text-xl font-medium text-white text-center '>
                        <img
                            className="h-8 w-full object-contain sm:h-auto sm:w-16 md:w-20 "
                            src={email}
                            alt='email logo'
                        />
                        Email
                    </a>
                </div>


            </div>
        </section >
    )
}
