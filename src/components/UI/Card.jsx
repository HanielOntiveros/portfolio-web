import { Button } from "./Button"

export const Card = ({ title, img, description }) => {

    console.log(img);
    return (
        <div className="container my-4 p-2  lg:p-0 ">
            <div className="flex flex-col justify-end items-end p-2 lg:items-start lg:place-items-end lg:grid lg:grid-rows-subgrid lg:grid-cols-2 lg:p-5">
                <h2 className='mt-10 text-2xl font-semibold text-white text-end md:text-5xl lg:text-6xl lg:row-start-1 lg:place-self-end lg:my-10 '>{title}</h2>
                <img className=" lg:col-start-2 lg:row-start-1 lg:row-end-4  lg:place-self-center lg:w-2/3 lg:h-auto" src={img} alt={`${title} image`} />
                <p className='my-5 text-lg font-semibold text-white text-end md:text-2xl lg:text-2xl lg:place-self-center lg:row-start-2 lg:my-10'>
                    {description}
                </p>
                <div className="lg:row-start-3 lg:my-5">
                    <Button

                        text={'More info'}
                    />
                </div>
            </div>
        </div>
    )
}
