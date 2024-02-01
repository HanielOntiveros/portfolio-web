import linkedin from '../../assets/icons/linkedin-linked-in-svgrepo-com.svg'
import github from '../../assets/icons/github-142-svgrepo-com.svg'
import email from '../../assets/icons/email-svgrepo-com.svg'

export const Contact = () => {
    return (
        <section className=" w-full h-auto realative">
            <h2 className='mt-20 mx-3 text-5xl font-semibold text-white text-end'>Contact</h2>
            <div className="flex flex-col mx-3 my-10 justify-even items-center">
                <p className='mt-6 text-3xl font-bold text-white text-end '>
                    <img
                        className="h-10 w-full object-contain md:h-full md:w-48 "
                        src={github}
                        alt='linux penguin'
                    />
                    Github
                </p>
                <p className='mt-6 text-3xl font-bold text-white text-end '>
                    <img
                        className="h-10 w-full object-contain md:h-full md:w-48 "
                        src={linkedin}
                        alt='linux penguin'
                    />
                    LinkedIn
                </p>
                <p className='mt-6 text-3xl font-bold text-white text-end '>
                    <img
                        className="h-10 w-full object-contain md:h-full md:w-48 "
                        src={email}
                        alt='linux penguin'
                    />
                    Email
                </p>


            </div>
        </section>
    )
}
