import linkedin from '../../assets/icons/linkedin-linked-in-svgrepo-com.svg'
import github from '../../assets/icons/github-142-svgrepo-com.svg'
import email from '../../assets/icons/email-svgrepo-com.svg'

export const Contact = () => {
    return (
        <section id='contact' className=" w-full h-auto realative">
            <div className="flex flex-col flex-wrap h-auto mx-3 justify-start items-end lg:items-end lg:m-0 lg:mt-10 lg:p-10 relative">
                <h2 className='mt-20 text-5xl  font-semibold text-white text-end md:text-8xl md:mt-24   lg:-rotate-90 lg:border-b-4 lg:left-[-7%] lg:absolute lg:top-[28%] '>Contact</h2>
                <div className="lg:flex lg:flex-col lg:w-4/5 lg:justify-center lg:items-center lg:gap-4">
                    <a href="https://github.com/HanielOntiveros" target="_blank" rel="noopener noreferrer" className='mt-6 text-3xl font-bold text-white text-center '>
                        <img
                            className="h-10 w-full object-contain md:h-full md:w-20 md:m-5 "
                            src={github}
                            alt='github logo'
                        />
                        Github
                    </a>
                    <a href="https://linkedin.com/in/haniel-ontiveros-fernández-2424a61b7" target="_blank" rel="noopener noreferrer" className='mt-6 text-3xl font-bold text-white text-center '>
                        <img
                            className="h-10 w-full object-contain md:h-full md:w-20 md:m-5 "
                            src={linkedin}
                            alt='linkedin logo'
                        />
                        Linkedin
                    </a>
                    <p className='mt-6 text-3xl font-bold text-white text-center '>
                        <img
                            className="h-10 w-full object-contain md:h-full md:w-20 md:m-5"
                            src={email}
                            alt='email logo'
                        />
                        Email
                    </p>
                </div>


            </div>
        </section >
    )
}
