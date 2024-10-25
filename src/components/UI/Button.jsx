
export const Button = ({ text }) => {

    return (
        <button className="bg-[#ebbf26] shadow-[1px_1px_25px_3px_rgba(168,144,67,1)]  p-3 w-auto h-auto rounded-md text-lg font-semibold md:text-2xl md:p-5 md:rounded-xl md:mt-3 lg:text-3xl lg:p-4 hover:scale-105">
            {text}
        </button>
    )
}
