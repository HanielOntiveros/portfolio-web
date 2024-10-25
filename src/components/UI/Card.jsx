import { Button } from "./Button"

export const Card = ({ title, img, description, technologies }) => {


    return (
        <div className="container my-5 px-4  lg:p-0 ">
            <div className="animation-scroll flex flex-col justify-end items-end  lg:items-start lg:place-items-end lg:grid lg:grid-rows-subgrid lg:grid-cols-2 lg:p-5">
                <h2 className='font-jura mb-5 text-2xl font-semibold text-white text-end md:text-4xl lg:text-6xl lg:row-start-1 lg:place-self-end lg:mt-10 lg:px-5'>{title}</h2>
                <div className="w-auto h-auto  rounded-md mx-5  row-span-1  lg:row-start-2 lg:col-start-2  ">
                    <a className=" rounded-md shadow-[10px_10px_20px_10px_rgba(122,122,122,0.7)] my-5">
                        <div className="h-4 w-full  bg-[#3c3c3c] rounded-t-md flex justify-end place-items-center gap-1">
                            <div className="border  rounded-[50%] h-2 w-2"></div>
                            <div className="border  rounded-[50%] h-2 w-2"></div>
                            <div className="border  rounded-[50%] h-2 w-2 mr-1"></div>

                        </div>
                        <img className="rounded-b-md lg:col-start-2 lg:row-start-1 lg:row-end-4  lg:place-self-center lg:w-full lg:h-auto" src={img} alt={`${title} image`} />
                    </a>
                </div>
                <p className='font-jura my-5 text-lg font-medium text-white text-end md:text-xl lg:text-2xl lg:place-self-center lg:row-start-2 lg:my-auto lg:px-5'>
                    {description}
                </p>
                <div className="flex w-full gap-2 justify-end mb-5">
                    {
                        technologies.map(technologie =>
                            <p className='font-jura  text-lg font-light text-white text-end md:text-xl lg:text-2xl lg:place-self-center lg:row-start-2 lg:my-auto lg:px-5'>
                                {`${technologie} / `}
                            </p>
                        )
                    }
                </div>

                <div className="lg:row-start-3 lg:my-5 lg:px-5">
                    <Button

                        text={'More info'}
                    />
                </div>
            </div>
        </div>
    )
}
