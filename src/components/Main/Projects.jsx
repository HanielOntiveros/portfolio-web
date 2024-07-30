import { Card } from "../UI/Card"
import { webDatas } from "../../data/webPage"

export const Projects = () => {
    return (
        <section id="projects" className=' w-full h-auto realative'>
            <div className="flex flex-col flex-wrap h-auto mx-3 justify-start items-end lg:items-end lg:m-0 lg:mt-10 lg:p-10 relative">
                <div className="">
                    <h2 className=' mt-20 text-5xl  font-semibold text-white text-end md:text-8xl md:mt-24   lg:-rotate-90 lg:border-b-4 lg:left-[-8%] lg:absolute lg:top-[45%] '>Projects</h2>
                </div>
                <div className="lg:flex lg:flex-col lg:w-4/5 ">
                    {
                        webDatas.map(webData => (

                            <Card
                                key={webData.id}
                                title={webData.title}
                                img={webData.image}
                                description={webData.description}
                            />
                        ))
                    }
                </div>
            </div>
        </section >
    )
}
