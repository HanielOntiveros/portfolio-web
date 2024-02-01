import { Button } from "./Button"

export const Card = ({ title, img, description }) => {
    return (
        <div className="container my-4">
            <div className="flex flex-col justify-start items-start p-2">
                <h2 className='mt-10 text-xl font-semibold text-white text-start '>{title}</h2>
                <img className='my-4 ' src={img} alt={`${title} image`} />
                <p className='my-5 text-xl font-semibold text-white text-start '>
                    {description}
                </p>
                <Button text={'More info'} />
            </div>
        </div>
    )
}
