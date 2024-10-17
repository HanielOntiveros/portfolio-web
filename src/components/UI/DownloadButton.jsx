

export const DownloadButton = () => {
    const downloadCV = () => {
        const link = document.createElement('a');
        link.href = 'path/to/your_cv.pdf'; // Reemplaza con la ruta de tu CV
        link.download = 'my_cv.pdf'; // Nombre del archivo descargado
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (

        <button className=" bg-[#ebbf26] shadow-[1px_1px_25px_3px_rgba(168,144,67,1)]  p-3 w-auto h-auto rounded-md text-lg font-semibold md:text-4xl md:p-5 md:rounded-xl md:mt-3 lg:text-3xl lg:p-4 hover:scale-105"
            onClick={downloadCV}
        >
            Download CV
        </button>

    );
};


