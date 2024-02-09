import linkedin from '../../assets/icons/linkedin-linked-in-svgrepo-com.svg'
import github from '../../assets/icons/github-142-svgrepo-com.svg'
import email from '../../assets/icons/email-svgrepo-com.svg'

export const Contact = () => {
    return (
        <section id='contact' className=" w-full h-auto realative">
            <h2 className='mt-20 mx-3 text-5xl font-semibold text-white text-end md:text-8xl'>Contact</h2>
            <div className="flex flex-col mx-3 my-10 items-center md:flex-row md:justify-evenly ">
                <p className='mt-6 text-3xl font-bold text-white text-center '>
                    <img
                        className="h-10 w-full object-contain md:h-full md:w-20 md:m-5 "
                        src={github}
                        alt='github logo'
                    />
                    Github
                </p>
                <p className='mt-6 text-3xl font-bold text-white text-center '>
                    <img
                        className="h-10 w-full object-contain md:h-full md:w-20 md:m-5 "
                        src={linkedin}
                        alt='linkedin logo'
                    />
                    LinkedIn
                </p>
                <p className='mt-6 text-3xl font-bold text-white text-center '>
                    <img
                        className="h-10 w-full object-contain md:h-full md:w-20 md:m-5"
                        src={email}
                        alt='email logo'
                    />
                    Email
                </p>


            </div>
        </section>
    )
}
