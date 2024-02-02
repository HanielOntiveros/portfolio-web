import { Button } from "./Button"

export const Card = ({ title, img, description }) => {


    return (
        <div className="container my-4  p-2">
            <div className="flex flex-col justify-end items-end p-2 ">
                <h2 className='mt-10 text-2xl font-semibold text-white text-end md:text-5xl'>{title}</h2>
                <img src={img} alt={`${title} image`} />
                <p className='my-5 text-lg font-semibold text-white text-end md:text-3xl'>
                    {description}
                </p>
                <Button
                    text={'More info'}
                />
            </div>
        </div>
    )
}
