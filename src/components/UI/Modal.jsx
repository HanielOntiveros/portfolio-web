import close from '../../assets/icons/close-svgrepo-com.svg'

export const Modal = ({ setModalView }) => {

    const closeModal = () => {
        setModalView(false)
    }

    return (
        <modal className='fixed z-20 top-[25%] left-[25%] bg-black  border-2 w-1/4 h-1/4 min-h-[50%] min-w-[50%] flex flex-col p-4 '>
            <div className='w-full h-1/5 flex justify-end items-start' >
                <button
                    onClick={closeModal}
                >
                    <img src={close} alt='close icon' className='w-7' />
                </button>
            </div>
            <div className='w-full h-4/5 flex flex-col items-start justify-cente gap-2 mt-4 px-2 sm:items-center sm:mt-0'>
                <p className='text-white text-2xl font-bold text-start sm:text-3xl md:text-5xl  lg:text-7xl'>Coming Soon!</p>
                <p className='text-white text-xl font-medium text-start sm:text-2xl md:text-4xl  lg:text-6xl'>We still crafting this amazing page!</p>
            </div>

        </modal>
    )
}
