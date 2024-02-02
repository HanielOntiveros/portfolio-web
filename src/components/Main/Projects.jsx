import { Card } from "../UI/Card"
import web from '../../assets/icons/browser-window-2-svgrepo-com.svg'

export const Projects = () => {
    return (
        <section className=' w-full h-auto realative'>
            <div className="flex flex-col h-auto mx-3 justify-start items-end">
                <h2 className='mt-20 text-5xl font-semibold text-white text-end md:text-8xl md:mt-24'>Projects</h2>
                <Card
                    title={'Web title'}
                    img={web}
                    description={'Non ea pariatur dolor labore in nisi duis exercitation sit non ut proident. '}
                />
                <Card
                    title={'Web title'}
                    img={web}
                    description={'Non ea pariatur dolor labore in nisi duis exercitation sit non ut proident. '}
                />
                <Card
                    title={'Web title'}
                    img={web}
                    description={'Non ea pariatur dolor labore in nisi duis exercitation sit non ut proident. '}
                />
            </div>
        </section >
    )
}
