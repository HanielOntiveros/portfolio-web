import { Card } from "../UI/Card"

export const Projects = () => {
    return (
        <section className=' w-full h-auto realative'>
            <div className="flex flex-col h-auto mx-3 justify-start items-center">
                <h2 className='mt-20 text-5xl font-semibold text-white text-end '>Projects</h2>
                <Card
                    title={'Web title'}
                    img={''}
                    description={'Non ea pariatur dolor labore in nisi duis exercitation sit non ut proident. '}
                />
                <Card
                    title={'Web title'}
                    img={''}
                    description={'Non ea pariatur dolor labore in nisi duis exercitation sit non ut proident. '}
                />
                <Card
                    title={'Web title'}
                    img={''}
                    description={'Non ea pariatur dolor labore in nisi duis exercitation sit non ut proident. '}
                />
            </div>
        </section >
    )
}
