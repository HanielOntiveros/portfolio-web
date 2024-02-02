import { Button } from "./Button"

export const Card = ({ title, img, description }) => {


    return (
        <div className="container my-4 p-2 lg:w-1/3 lg:p-0">
            <div className="flex flex-col justify-end items-end p-2 lg:items-start">
                <h2 className='mt-10 text-2xl font-semibold text-white text-end md:text-5xl lg:text-2xl '>{title}</h2>
                <img className="lg:h-48" src={img} alt={`${title} image`} />
                <p className='my-5 text-lg font-semibold text-white text-end md:text-3xl lg:text-xl lg:text-start'>
                    {description}
                </p>
                <Button
                    text={'More info'}
                />
            </div>
        </div>
    )
}
